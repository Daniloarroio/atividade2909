# Estuda+

Landing page responsiva para organização dos estudos. O frontend usa HTML, CSS e JavaScript; o servidor e a hospedagem usam Node.js e Express.

## Executar localmente

1. Instale Node.js 18 ou superior.
2. No terminal, dentro da pasta do projeto, execute `npm install`.
3. Inicie o servidor com `npm start`.
4. Acesse [http://localhost:3000](http://localhost:3000). A rota `/health` retorna o estado do servidor.

## Publicar no GitHub

Crie um repositório vazio no GitHub e execute na pasta do projeto (substitua `SEU-USUARIO` e `SEU-REPOSITORIO`):

```bash
git init
git add .
git commit -m "Cria site Estuda+ com Express"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

## Publicar no Render

1. Entre em [render.com](https://render.com) e conecte sua conta do GitHub.
2. Selecione **New + → Web Service** e escolha o repositório publicado.
3. Use **Node** como runtime, `npm install` como comando de build e `npm start` como comando de início. O arquivo `render.yaml` já registra essa configuração para Blueprint.
4. Clique em **Create Web Service**. Aguarde o deploy ficar pronto e abra a URL pública `https://...onrender.com` indicada no painel.
5. Confira a página inicial e `https://...onrender.com/health`. O endereço público só é criado pelo Render após conectar o repositório e concluir o deploy.

O Render injeta a variável `PORT` automaticamente; o servidor escuta nessa porta e em `0.0.0.0`.
