## Introduction

Reproduction for https://github.com/prisma/prisma/issues/4649


## Version Information

```
Environment variables loaded from prisma/.env
@prisma/cli          : 2.14.0-dev.32
@prisma/client       : 2.14.0-dev.32
Current platform     : debian-openssl-1.1.x
Query Engine         : query-engine 89e8d3132416be34203077ff70fdc0abb7ff9747 (at node_modules/@prisma/engines/query-engine-debian-openssl-1.1.x)
Migration Engine     : migration-engine-cli 89e8d3132416be34203077ff70fdc0abb7ff9747 (at node_modules/@prisma/engines/migration-engine-debian-openssl-1.1.x)
Introspection Engine : introspection-core 89e8d3132416be34203077ff70fdc0abb7ff9747 (at node_modules/@prisma/engines/introspection-engine-debian-openssl-1.1.x)
Format Binary        : prisma-fmt 89e8d3132416be34203077ff70fdc0abb7ff9747 (at node_modules/@prisma/engines/prisma-fmt-debian-openssl-1.1.x)
Studio               : 0.331.0
```


## Reproduction Steps


1. Clone this repository and install the dependencies
2. Change the credentials in `prisma/.env` file
3. Bootstrap the database using `npx prisma db push --preview-feature`
4. Run `yarn start` to reproduce and to see the logs.
