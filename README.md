# Projeto TypeScript com Webpack e Servidor de Desenvolvimento

## Descrição do Projeto

* Este projeto fornece um ambiente de desenvolvimento básico, usando TypeScript, Webpack e servidores para facilitar o desenvolvimento e visualização de projetos.
* Pode ser usado para criar e visualizar projetos rapidamente, evitando a configuração inicial demorada.

### Recursos e Funcionalidades

- **Compilação de TypeScript:** Utiliza o TypeScript para compilar código TypeScript em JavaScript compatível com o navegador.

- **Empacotamento com Webpack:** Utiliza o Webpack para empacotar o código, facilitando a gestão de dependências e melhorando o carregamento no navegador.

- **Servidores de Desenvolvimento:** Oferece duas opções de servidores para facilitar o desenvolvimento local:
  - **http-server:** Um servidor HTTP leve para servir arquivos estáticos.
  - **webpack-dev-server:** Um servidor de desenvolvimento integrado ao Webpack, proporcionando atualizações automáticas.

## Passo 1: Inicialização do Projeto

### Criação do package.json

```
npm init -y
```

## Passo 2: Instalação do TypeScript e Configuração

### Instalação do TypeScript

```
npm install --save-dev typescript
```

#### Configuração do tsconfig.json
Crie um arquivo tsconfig.json na raiz do projeto com as seguintes configurações:
```
{
    "compilerOptions": {
      "target": "ES6",
      "module": "commonjs",
      "strict": true,
      "noEmit": false,
      "incremental": true,
      "outDir": "./dist"
    },
    "include": ["src/**/*.ts"],
    "exclude": ["node_modules"]
}
```

## Passo 3: Configuração do Webpack
```
npm install --save-dev webpack webpack-cli ts-loader webpack-dev-server
```
### Criação do webpack.config.js
Crie um arquivo webpack.config.js na raiz do projeto com as seguintes configurações:
```
// webpack.config.js
const path = require("path");

let libraryName = 'PacktDataStructuresAlgorithms';
let outPutFile =  `${libraryName}.js`
let pathToLib = './src/my-lib/index.ts'

module.exports = {
  entry: pathToLib,
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, "applications"),
    port: 8080,
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "applications"),
    filename: outPutFile,
    library: libraryName,
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
};
```
## Passo 4: Scripts no package.json
```
"scripts": {
    "serve": "http-server -c-1",
    "build:ts": "tsc -p ./ --rootDir ./src",
    "webpack": "webpack --env build",
    "start:dev": "npm run build:ts && npm run webpack && npm run serve",
    "start:node": "npm run build:ts && node dist/data-structures/index.js",
    "start:browser": "npm run build:ts && npm run webpack && npm run webpack-server",
    "webpack-server": "webpack serve",
    "start:prod": "npm run build:ts && npm run webpack && node dist/data-structures/index.js",
    "clean": "rm -rf ./dist"
}
```

## Passo 5: Uso - Compilação e Empacotamento

### Compilar o Código TypeScript
```
npm run build:ts
```
 ### Empacotar o código usando Webpack.
 ```
npm run webpack
```
### Iniciar o servidor HTTP. Visualizar o projeto no navegador em [http://localhost:8080](http://localhost:8080).
```
`npm run serve`
```
### compilar, empacotar e iniciar o servidor de desenvolvimento integrado ao Webpack. Acesse o projeto em [http://localhost:8080](http://localhost:8080).
`npm start` ou `npm run start:dev`

### Iniciar o Projeto (Node.js): para compilar o código TypeScript e executar diretamente no Node.js.
`npm run start:node`

### Iniciar o Projeto (Browser): para compilar, empacotar, abrir automaticamente o navegador e acessar [http://localhost:8080](http://localhost:8080).
`npm run start:browser` 

### Executar Compilar, empacotar e iniciar o servidor de desenvolvimento integrado ao Webpack. Acesse o projeto em [http://localhost:8080](http://localhost:8080).
```
npm run start:webpack-server
```
### Iniciar o Projeto (Produção): para compilar, empacotar e iniciar o servidor Node.js com o arquivo de entrypoint
`npm run start:prod`

### Limpar o Diretório Dist
```
npm run clean
```

### Notas Importantes

- Certifique-se de ajustar o arquivo `tsconfig.json` conforme necessário para atender às especificidades do seu projeto.
- Personalize o arquivo `webpack.config.js` conforme necessário para incluir/excluir funcionalidades específicas.

