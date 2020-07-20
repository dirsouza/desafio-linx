# Desafio Linx
Projeto desenvolvido para conceito de avaliação pela [Linx](https://www.linx.com.br/).

Para esse projeto, as principias tecnologias utilizadas foram:

|             |Link                                           |
|-------------|-----------------------------------------------|
|Docker       |https://docs.docker.com/engine/install/ubuntu/ |
|NestJS       |https://nestjs.com/                            |
|TypeORM      |https://typeorm.io/#/                          |
|MySQL        |https://www.mysql.com/                         |
|Redis        |https://redis.io/                              |

> Os projetos foram desenvolvidos em ambiente dockerizado, as instruções a seguir, levam em consideração que, o [Docker](https://docs.docker.com/engine/install/ubuntu/
) e [Docker Compose](https://docs.docker.com/compose/install/) já encontram-se devidamente instalados.

#### Docker
- Build dos projetos:
    ```bash
    docker-compose up --build
    ```

Ao executar o comando de `build`, aguarde até que todos os serviços estejam online, são:
1. api-recomendacao;
2. api-catalogo;
3. db-script;
4. db-mysql; e
5. cache-redis.

É importante observar que o serviço `db-script` é o responsável por executar as _migrations_ das tabelas e a leitura do _catalog.json_ para inserção no banco de dados.

Os seguintes _logs_ deverão serem observados no terminal:
* db-script:
   * Connected to `tcp://db-mysql:3306` - significa que o serviço conseguiu se conectar ao banco de dados, e irá executar as `migrations` e em seguinda, irá fazer a leitura do `catalog.json` para inserção no banco de dados. O serviço irá emitir os seguintes _logs_:
      * Scripts de execução do tipo `query` - significa que as `migrations` foram executadas;
      * `Starting seed execution... Please wait!` - siginifica que está sendo feito a leitura do `catalog.json` e inserção no banco de dados; e
      * `Execution of the finished seed!` - siginifica que as inserções foram executadas.

Após a execução ou mesmo durante a execução dos passados acima, os serviços das API's já deverão estar acessiveis nos links abaixo:
* API Catalogo:
   * Serviço: [http://localhost:3000]()
   * Documentação: [http://localhost:3000/api-catalogo]()

* API Recomendações:
   * Serviço: [http://localhost:3001]()
   * Documentação: [http://localhost:3001/api-recomendacao]()

> As portas dos serviços para acesso fora do container estão no arquivo `.env`, verifique antes de executar o `build` se alguma das portas irá conflitar com algum serviço já existente, caso sim, altere a porta relacionado ao serviço que conflita.
>
> Para a execução correta dos serviços desse projeto, é importe que somente os dados no arquivo `.env` sofram qualquer alteração.
