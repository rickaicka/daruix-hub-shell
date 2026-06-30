Daruix Hub Shell
Shell principal do Daruix Hub. Este projeto centraliza login, sessão, layout principal, menu de módulos e carregamento de micro front-ends via Native Federation.
Visão geral
O Daruix Hub é a base web/mobile para unificar os sistemas internos da Daruix, incluindo módulos modernos em Angular/Ionic e integrações com sistemas legados durante a transição.
O Shell é responsável por:
autenticar usuários;
manter sessão local;
renderizar o layout principal;
exibir módulos disponíveis por permissão;
carregar MFEs dinamicamente;
aplicar interceptor JWT nas chamadas HTTP.
Stack principal
Angular 21
Ionic Angular
TypeScript
SCSS
NgRx Signals
Native Federation
`@daruix/hub-auth`
`@daruix/ui`
Instalação
```bash
npm install
```
Servidor de desenvolvimento
```bash
npm start
```
ou:
```bash
ng serve
```
A aplicação normalmente roda em:
```txt
http://localhost:4200
```
Build
```bash
npm run build
```
Testes
```bash
npm test
```
Autenticação
O Shell mantém a `AuthStore`, responsável por:
chamar `/auth/login`;
chamar `/auth/logout`;
chamar `/auth/me` quando necessário;
sincronizar a sessão com `@daruix/hub-auth`;
expor estado reativo de autenticação para o layout.
A sessão compartilhada é gerenciada pela lib:
```ts
import { HubSessionService } from '@daruix/hub-auth';
```
O login salva:
```txt
access_token
refresh_token
usuario
```
Interceptor HTTP
O Shell usa o interceptor compartilhado da lib:
```ts
import { hubAuthInterceptor } from '@daruix/hub-auth';
```
Configuração no `app.config.ts`:
```ts
provideHttpClient(
  withInterceptors([hubAuthInterceptor])
)
```
Rotas principais
Exemplo de estrutura:
```txt
/login
/hub
/hub/dashboard
/hub/remessas
```
A rota `/hub` é protegida pelo guard compartilhado:
```ts
import { hubAuthGuard } from '@daruix/hub-auth';
```
Micro front-ends
O Shell carrega módulos remotos usando Native Federation:
```ts
loadRemoteModule('remessas', './Routes')
```
O nome do remote deve bater com o `federation.config.js` do MFE e com o `federation.manifest.json` do Shell.
Exemplo de manifest:
```json
{
  "remessas": "http://localhost:4300/remoteEntry.json"
}
```
Dependendo da configuração do Native Federation, o arquivo remoto pode ser `remoteEntry.json` ou `remoteEntry.js`.
Configuração Native Federation
A lib de auth deve ser compartilhada como singleton:
```js
shared: {
  ...shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto'
  }),

  '@daruix/hub-auth': {
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto'
  }
}
```
Módulos e permissões
O backend retorna o usuário com permissões e módulos disponíveis:
```ts
usuario.permissoes
usuario.modulos
```
Exemplo de permissão:
```txt
financeiro.ver
obra.criar
admin.ver
```
Exemplo de uso:
```ts
this.authStore.hasPermission('financeiro.ver')
```
Desenvolvimento com MFEs
Para rodar localmente:
Suba o backend do Hub.
Suba o Shell.
Suba o MFE desejado na porta configurada.
Confirme se o `remoteEntry` está acessível.
Faça login no Shell.
Acesse o módulo remoto pelo menu ou rota.
Repositórios relacionados
`daruix-hub-auth`
`mfe-memorando-remessa`
`daruix-ds`
`daruix-hub-bff`
