# trabalho-integrador
Trabalho Integrador entre as disciplinas de Engenharia de Software I, Banco de Dados I e Programação II

1. Os requisitos estão contidos dentro da pasta Engenharia de Software I/
2. O modelo conceitual está dentro da pasta Banco de Dados I/Modelo Conceitual/
3. O modelo logico relacional está dentro da pasta Banco de Dados I/Modelo Logico Relacional/
4. O modelo físico está dentro da pasta Banco de Dados I/Modelo Físico/
5. A aplicação está em /code

## Como utilizar?

No diretório raíz, rode os seguintes comandos:

### `npm install`

Instala as dependencias do backend e do frontend.

### `npm start`
Monta a build e inicia os servidores

## Importante!
Para que o sistema funcione corretamente, você deve ter o Postgres instalado na sua máquina, fazer o login com o seu usuário postgres e importar o arquivo SQL com `\i bd.sql`, que criará o banco e as tabelas necessárias e alguns valores iniciais. Certifique-se de que o arquivo /backend/db.js está com os valores corretos de acordo com seu usuário/senha.