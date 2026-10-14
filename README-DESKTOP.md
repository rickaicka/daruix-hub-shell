# Daruix Hub — Electron

O Electron fica no shell, em `desktop/`, com dependências e lockfile próprios. Obras e Cadastros são compilados como MFEs e copiados para o pacote. Angular continua sem SSR. Os arquivos da interface são locais; o Django/BFF e o banco continuam sendo serviços separados. A aplicação não fornece funcionamento offline dos dados, e as fontes Google existentes ainda dependem de internet.

## Organização

Extraia os três ZIPs como pastas irmãs:

```
Daruix/
  shell/
  mfe-obras/
  mfe-cadastros/
```

Se seus diretórios têm outros nomes, ajuste `shell/desktop/projects.json`. Os caminhos são relativos a `shell/desktop/`. Por exemplo, `../../daruix-mfe-obras`.

## Instalação

Use Node compatível com Angular 21 (por exemplo, Node 24 LTS). Antes de instalar, confira os caminhos dos pacotes privados `@daruix/hub-auth` e `@daruix/hub-ui` nos três `package.json`. Eles apontam para `.tgz` em `D:\Projects\Daruix` e esses arquivos não estão nos anexos. Os pacotes privados devem ser os mesmos em todos os projetos.

Na pasta `shell`, execute:

```powershell
npm ci
npm --prefix ../mfe-obras ci
npm --prefix ../mfe-cadastros ci
npm --prefix desktop ci
```

Se alterar dependências ou os caminhos dos `.tgz`, use `npm install` no projeto alterado para atualizar seu lockfile; depois volte a usar `npm ci`.

## Build e execução local

No shell:

```powershell
npm run desktop:test
npm run desktop:build
npm run desktop:start
```

`desktop:build` compila Obras, Cadastros e o shell em produção. Usa `build:shell`, evitando os scripts antigos que apontam para composição-servico. Detecta a saída Angular com ou sem subpasta `browser`, recria `desktop/web`, gera o manifesto local e verifica a compatibilidade das bibliotecas singleton com versão estrita. Os arquivos empacotados não usam servidores de desenvolvimento dos MFEs.

Foi corrigida a seleção de `environment.production.ts` e `environment.development.ts` nos dois MFEs. Em produção, todos usam `/api`, incluindo a autenticação do shell. A configuração web/mobile do shell e seus comandos anteriores foram preservados.

## Instalador Windows

No Windows, dentro do shell:

```powershell
npm run desktop:dist:win
```

Saída: `shell/desktop/release/`, com instalador NSIS `.exe` x64. Para gerar somente a aplicação sem instalador:

```powershell
npm run desktop:pack
```

Linux: `npm run desktop:dist:linux`. macOS: `npm run desktop:dist:mac`, executado no macOS. Os comandos incluem o build do front. O pacote usa o ícone padrão Electron; não foi criado um ícone de marca. Assinatura de código e atualização automática não estão configuradas.

## Endereço do BFF

Antes de distribuir, edite `shell/desktop/config.json`:

```json
{
  "backendUrl": "http://127.0.0.1:8000",
  "port": 47831
}
```

`backendUrl` é a origem do Django, **sem `/api`**. Exemplo em produção: `https://hub.suaempresa.com`. O proxy mantém o caminho completo `/api/...`, query, verbo HTTP, corpo, token Bearer e respostas binárias de exportação.

Na primeira execução, o aplicativo copia essa configuração para `desktop-config.json` na pasta de dados do usuário. No Windows, normalmente `%APPDATA%\Daruix Hub\desktop-config.json`. Edite esse arquivo e reinicie para mudar o BFF de uma instalação existente. Reinstalar não sobrescreve essa configuração.

O front é servido apenas em `127.0.0.1:47831`, com fallback de rotas Angular. A porta fixa preserva a origem do armazenamento local entre execuções. Se ocupada, o app exibe um erro; configure outra porta (a mudança cria outra origem e exige novo login). O proxy usa o Host do BFF; ele precisa estar permitido no `ALLOWED_HOSTS` do Django. Não é necessário abrir CORS para o app empacotado, pois o renderer acessa `/api` na mesma origem.

## Remessas

O código-fonte de Remessas não foi enviado. O artefato antigo em `public/remotes/remessas` usa Angular 21.2.18, hub-auth 0.0.10 e hub-ui 0.2.5, enquanto os projetos enviados usam Angular 21.2.20, hub-auth 0.0.17 e hub-ui 0.2.98. Por isso, ele não é incorporado ao desktop. O manifesto desktop inclui somente Obras e Gestão Administrativa. A rota de Remessas do shell foi preservada e só ficará utilizável no desktop depois de incluir seu código-fonte.

Para incluir Remessas, configure `remessas` em `desktop/projects.json`, por exemplo `../../daruix-mfe-remessas`, instale suas dependências, alinhe as bibliotecas compartilhadas e confirme que o build de produção usa `apiUrl: '/api'`. O pipeline então compila e inclui esse MFE automaticamente.

## Desenvolvimento com recarga

Em terminais separados:

```powershell
# shell
npm start
# mfe-obras
npm start
# mfe-cadastros
npm start
# shell (depois dos servidores ficarem prontos)
npm run desktop:dev
```

O shell abre em `http://localhost:4300`, Obras em 4303, Cadastros em 4304. O modo dev abre DevTools e usa as URLs atuais do ambiente de desenvolvimento, com Django em `http://localhost:8000/api`; portanto, mantém a necessidade de CORS do desenvolvimento web. Se usar Remessas em dev, inicie seu projeto na porta 4301. O modo dev não usa `desktop-config.json` nem o proxy de produção.

## Verificações realizadas

- Testes Node aprovados para rotas profundas do Angular, JSON de MFE, MIME de JavaScript, arquivos ausentes, rejeição de traversal/Host/Origin indevidos, POST com Bearer e query, PDF binário, HEAD e BFF indisponível.
- Sintaxe dos scripts Electron e de build verificada.
- Dependências desktop instaladas e lockfile gerado.
- Build Angular e instalador não validados neste ambiente: faltam os `.tgz` privados e as dependências Angular dos projetos. Execução gráfica Electron e fluxos reais de login/exportação precisam ser verificados no Windows após a instalação e o build.

A janela usa sandbox, isolamento de contexto e Node desabilitado no renderer. Rotas internas abertas com `window.open` ganham outra janela com as mesmas restrições. Links HTTP/HTTPS externos abrem no navegador. Não há acesso Node ou IPC exposto ao Angular.
