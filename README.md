#MetaGuide

###Projeto desenvolvido no Hackathon - Hack the Journey

Para rodar o projeto siga as instruções abaixo
- Para clonar o repositório digite no seu terminal
```
git clone https://gitlab.com/fipmagdev/hack-the-journey.git
```
Ou se preferir clone com uma chave SSH
```
git clone git@gitlab.com:fipmagdev/hack-the-journey.git
```
####Baixando as dependencias
Na root do projeto, abra um terminal para cada diretório,
dentro de cada diretório (mobile, API e server) digite
baixar as dependencias necessarias para rodar o projeto.
```
npm install
```
####Back-end
no diretório /server digite o seguinte comando 
para criar um arquivo .env e conectar o servidor ao banco de dados
``` 
npx prisma migrate dev 
```
após isto para iniciar o back-end digite
```
npm run dev
```

####API
para inicializar a API, no diretório /API digite
``` 
npm run dev
```


###Configurando OAuth
Crie uma conta em https://console.cloud.google.com/getting-started
- Crie um novo projeto
- Vá para aba de Credenciais
- Configure a tela de consentimento, selecione as opções externo, dê nome ao seu projeto
 e adicione ao escopo "email" e "userinfo", salve e continue
- Volte para o painel e publique o app
- Vá para credenciais e crie uma nova credencial, selecione a opção 'criar Id do cliente OAuth',
- Em Origens JavaScript Autorizadas botar : https://auth.expo.io
- Em URIs de redirecionamento autorizados, bote :  https://auth.expo.io/@<seu-nome-de-usuario>/mobile
- Termine de criar a credencial
- Vá para o diretório mobile e procure o arquivo app.json
- No app.json adicione “scheme”:”mobile”,
- Logue na sua conta do expo pelo terminal


####Mobile-app
Antes de rodar o app, certifique-se de ter um aparelho android conectado a sua rede wifi, ou um emulador aberto.
Dentro do diretório /mobile procure a pasta /services e configure o api.ts passando o endereço do servidor e a porta do back-end e da api
 Com emulador aberto, no terminal digite 

```
expo start

ou

expo start -a
```
