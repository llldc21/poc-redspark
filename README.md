# Comandos - DB
```json
"migration:create": "ts-node ./node_modules/typeorm/cli.js migration:create",
"migration:generate": "ts-node ./node_modules/typeorm/cli.js migration:generate --dataSource src/database/datasource.ts",
"migration:run": "ts-node ./node_modules/typeorm/cli.js migration:run -d src/database/datasource.ts",
"migration:revert": "ts-node ./node_modules/typeorm/cli.js migration:revert -d src/database/datasource.ts",
```

Para que alguns comandos funcionem é necessario informar o caminho onde a migration deve ser salva. No nosso caso o caminho sempre será `src/database/migrations/` + o nome da migration: `CreateUserTable`, ficando assim: `src/database/migrations/CreateUserTable`.
Esses complementos dos comandos só serão uteis para os comandos: `migration:create` e `migration:generate`.