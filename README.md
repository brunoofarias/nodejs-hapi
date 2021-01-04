# NodeJS - Hapi | OpenCircle Test

Dependencias para rodar o projeto
  - NodeJS v14^
  - MySQL 

### Tecnologias
  - [JavaScript](https://www.javascript.com/)
  - [NodeJS](https://nodejs.org/en/)

### Instalação

```
  > mkidir nodejs-hapi && cd nodejs-hapi
  > git init
  > git remote add origin https://github.com/brunoofarias/nodejs-hapi.git
  > git pull origin master
  > npm install
```
### Configurações
Na pasta docs/ você encontrará o arquivo book_rent.sql. Esse arquivo refere-se ao banco de dados da aplicação e deve ser importado antes da execução do projeto.

> [Para importar via workbench](https://help.umbler.com/hc/pt-br/articles/202385865-MySQL-Importando-Exportando-um-banco-de-dados)

> [Para importar por linha de comando](https://professor-falken.com/pt/programacion/mysql/como-exportar-e-importar-una-base-de-datos-mysql-desde-la-linea-de-comandos/)

Em seguida deve-se criar um arquivo chamado ".env", seguido o padrão especificado no .env.example preenchendo as duas credenciais de acesso ao MySQL
  
* Obs: É importante configurar um arquivo chamado ".env" seguindo o exemplo do arquivo ".env.example" antes de rodar o projeto.

### Para rodar o projeto
```
   > npm run dev // Dev
   > node src/index.js // Prod
```

### Endpoints
Na pasta /docs, você encontrará a collection do Postman contendo os exemplos de como realizar as requests.
[Documentação da API](https://documenter.getpostman.com/view/3579440/TVt2eQQ9)

### Contribuir com o projeto

* Para contribuir com o projeto, é necessário estar com o código fonte atualizado com a branch **Master** 
* Criar uma branch a partir da master `git checkout -b nomeDaBranch ` - ex: listaDeUsuarios
* Desenvolver a funcionalidade nessa branch criada
* Efetuar os commits `git add .` e `git commit -m 'descrição do que foi feito'`
* Subir para o repositório a sua branch `git push origin nomeDaBranch`
* Abrir um Pull request para a master, descrevendo o que foi alterado
