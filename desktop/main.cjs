'use strict';
const { app, BrowserWindow, dialog, shell, session, Menu } = require('electron');
const fs = require('node:fs');
const path = require('node:path');
const { createServer, validateConfig } = require('./server.cjs');
app.setName('Daruix Hub');
const dev = !app.isPackaged && process.argv.includes('--dev');
let server;
let appOrigin;
const windows = new Set();
function isInternal(url) {
  try { return new URL(url).origin === appOrigin; } catch { return false; }
}
function openExternal(url) {
  try { if (['https:', 'http:'].includes(new URL(url).protocol)) void shell.openExternal(url).catch(console.error); } catch {}
}
function createWindow(url = appOrigin) {
  const win = new BrowserWindow({
    width: 1440, height: 900, minWidth: 1024, minHeight: 700, show: false,
    title: 'Daruix Hub', autoHideMenuBar: true,
    webPreferences: { nodeIntegration: false, contextIsolation: true, sandbox: true, webSecurity: true },
  });
  windows.add(win);
  win.once('ready-to-show', () => win.show());
  win.on('closed', () => windows.delete(win));
  win.webContents.on('will-navigate', (event, target) => {
    if (!isInternal(target)) { event.preventDefault(); openExternal(target); }
  });
  win.webContents.on('will-redirect', (event, target) => {
    if (!isInternal(target)) event.preventDefault();
  });
  win.webContents.setWindowOpenHandler(({ url: target }) => {
    if (isInternal(target)) createWindow(target); else openExternal(target);
    return { action: 'deny' };
  });
  win.webContents.on('will-attach-webview', (event) => event.preventDefault());
  win.loadURL(url).catch((error) => dialog.showErrorBox('Daruix Hub', `Não foi possível abrir o front.\n${error.message}`));
  if (dev) win.webContents.openDevTools({ mode: 'detach' });
  return win;
}
if (!app.requestSingleInstanceLock()) app.quit();
else {
  app.on('second-instance', () => { const win = [...windows][0]; if (win) { if (win.isMinimized()) win.restore(); win.focus(); } });
  app.whenReady().then(async () => {
    Menu.setApplicationMenu(Menu.buildFromTemplate([
      ...(process.platform === 'darwin' ? [{ role: 'appMenu' }] : []),
      { label: 'Editar', submenu: [{ role: 'undo' }, { role: 'redo' }, { type: 'separator' }, { role: 'cut' }, { role: 'copy' }, { role: 'paste' }, { role: 'selectAll' }] },
      { label: 'Exibir', submenu: [{ role: 'reload' }, { role: 'resetZoom' }, { role: 'zoomIn' }, { role: 'zoomOut' }, { role: 'togglefullscreen' }, ...(dev ? [{ role: 'toggleDevTools' }] : [])] },
    ]));
    session.defaultSession.setPermissionRequestHandler((_wc, _permission, callback) => callback(false));
    session.defaultSession.setPermissionCheckHandler(() => false);
    if (dev) appOrigin = 'http://localhost:4300';
    else {
      const configPath = path.join(app.getPath('userData'), 'desktop-config.json');
      // Backend comes from this package; only the local port may be customized.
      const bundledConfig = validateConfig(require('./config.json'));
      const savedConfig = fs.existsSync(configPath)
        ? JSON.parse(fs.readFileSync(configPath, 'utf8'))
        : {};
      const config = validateConfig({
        ...bundledConfig,
        port: savedConfig.port ?? bundledConfig.port,
      });
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
      const webRoot = app.isPackaged ? path.join(process.resourcesPath, 'web') : path.join(__dirname, 'web');
      if (!fs.existsSync(path.join(webRoot, 'index.html'))) throw new Error('Front desktop ausente. Execute npm run desktop:build no shell.');
      server = createServer({ webRoot, ...config });
      await new Promise((resolve, reject) => { server.once('error', reject); server.listen(config.port, '127.0.0.1', resolve); });
      appOrigin = `http://127.0.0.1:${config.port}`;
    }
    createWindow();
    app.on('activate', () => { if (!windows.size) createWindow(); });
  }).catch((error) => { dialog.showErrorBox('Daruix Hub — inicialização', `${error.message}\n\nVerifique desktop-config.json na pasta de dados do aplicativo. Se a porta estiver ocupada, altere port.`); app.quit(); });
  app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
  app.on('before-quit', () => server?.close());
}
