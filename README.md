## Pernambucanas Pfins

### Informações do projeto:

-   **Linguagem**:

    -   [Vue 3](https://vuejs.org/)
    -   Versão 3.2.47

-   **Framework**:

    -   [Nuxt 3](https://nuxt.com/)
    -   Versão 3.4.3

-   **Estilização**:

    -   [Uno CSS](https://unocss.dev/)
    -   Versão 0.51.12

-   **Node e Node Package Manager**:

    -   [Node](https://nodejs.org/dist/v18.16.0/)
    -   Versão 18.16.0 (o node já inclui o NPM na instalação)

-   **URL de acesso front-end**:

    -   Produção:
    -   Homologação:
    -   Desenvolvimento:

-   **URL de acesso back-end API**:

    -   Produção: [https://dummyjson.com](https://dummyjson.com)
    -   Homologação: [https://dummyjson.com](https://dummyjson.com)
    -   Desenvolvimento: [https://dummyjson.com](https://dummyjson.com)

-   **URL de acesso Swagger**:

    -   Produção: [https://dummyjson.com/docs](https://dummyjson.com/docs)
    -   Homologação: [https://dummyjson.com/docs](https://dummyjson.com/docs)
    -   Desenvolvimento: [https://dummyjson.com/docs](https://dummyjson.com/docs)

-   **Versão do projeto**:
    -   Produção:
    -   Homologação:
    -   Desenvolvimento:

### Comandos

```bash
# rodar o projeto localmente com a API de desenvolvimento
npm run dev

# rodar o projeto localmente com a API de homologação (Necessário configurar o servidor backend para liberar o CORS)
npm run hml

# rodar o projeto localmente com a API de produção (Necessário configurar o servidor backend para liberar o CORS)
npm run prd

# realizar o deploy com a API de desenvolvimento para servidores estáticos
npm run generate-dev

# realizar o deploy com a API de homologação para servidores estáticos
npm run generate-hml

# realizar o deploy com a API de produção para servidores estáticos
npm run generate-prd

# visualizar o que foi gerado para deploy em servidores estáticos localmente
npm run preview

# remove os arquivos padrões gerados pelo nuxt para deploy e caches, são eles: .nuxt, .output, node_modules/.vite, node_modules/.cache
npm run clean

# Checa se o código está seguindo o prettier e corrige com base no .prettierc e corrige
npm run lint:prettier

# Checa o código em busca de erros com base no .eslintrc
npm run lint:check

# roda os comandos de lint:prettier e lint:check e tenta corrigir os erros
npm run lint:fix

# fazer o commit seguindo o padrão do projeto, utilizando o commitizen, apenas sendo necessário fazer o git push após utiliza-lo
npm run commit

# mesmo principio do de cima porém com push automatico
npm run commit-push
```
