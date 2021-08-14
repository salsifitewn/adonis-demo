# Adonis-V5-demo

## Installation

<https://docs.adonisjs.com/guides/installation>

`yarn create adonis-ts-app adonis-demo`

## Additional Packages

### Front

- TailwindCSS  
  `yarn install -D tailwindcss@latest postcss@latest autoprefixer@latest`  
  `npx tailwindcss init -p`

- daisyUI  
  `yarn i daisyui --save`

- Alpine.js
  `yarn add alpinejs`

### Back

- japa test
  `yarn add -D japa execa get-port`  
  `node -r @adonisjs/assembler/build/register japaFile.ts\n`

- setup database
  `yarn @adonisjs/lucid`
  `node ace configure @adonisjs/lucid`

- create auth
  `yarn add i @adonisjs/auth`
  `node ace configure @adonisjs/auth`
  `yarn add phc-argon2`

## TODO

- lint-staged
- create first controller

## Adonis CLI history

```bash
node ace make:view partials/navbar
node ace make:middleware ApiVersion
node ace make:controller Api/api
node ace make:view posts/create
```

REPl
(await models.Natural.all()).map(m=>m.toJSON())

```sh
node ace <cmd>
Available commands
  build                  Compile project from Typescript to Javascript. Also compiles the frontend assets if using webpack encore
  configure [invoke]     Configure a given AdonisJS package
  repl                   Start a new REPL session
  serve                  Start the AdonisJS HTTP server, along with the file watcher. Also starts the webpack dev server when webpack encore is installed

db
  db:seed                Execute database seeder files

dump
  dump:rcfile            Dump contents of .adonisrc.json file along with defaults

generate
  generate:key           Generate a new APP_KEY secret
  generate:manifest      Generate ace commands manifest file. Manifest file speeds up commands lookup

list
  list:routes            List application routes

make
  make:command           Make a new ace command
  make:controller        Make a new HTTP controller
  make:exception         Make a new custom exception class
  make:listener          Make a new event listener class
  make:middleware        Make a new middleware
  make:migration         Make a new migration file
  make:model             Make a new Lucid model
  make:prldfile          Make a new preload file
  make:provider          Make a new provider class
  make:seeder            Make a new Seeder file
  make:validator         Make a new validator
  make:view              Make a new view template

migration
  migration:rollback     Rollback migrations to a given batch number
  migration:run          Run pending migrations
  migration:status       Check migrations current status.

Global Flags
  -h, --help boolean
  -v, --version boolean
```

```bash
# auth
➜ node ace configure @adonisjs/auth
❯ Select provider for finding users · lucid
❯ Select which guard you need for authentication (select using space) · web, api
❯ Enter model name to be used for authentication · User
❯ Create migration for the users table? (y/N) · yes
❯ Select the provider for storing API tokens · database
❯ Create migration for the api_tokens table? (y/N) · yes
SKIP:   app/Models/User.ts file already exists
CREATE: contracts/auth.ts
CREATE: config/auth.ts
SKIP:   app/Middleware/Auth.ts file already exists
SKIP:   app/Middleware/SilentAuth.ts file already exists
UPDATE: .adonisrc.json { providers += "@adonisjs/auth" }
CREATE: ace-manifest.json file
```

## Resources

- <https://docs.adonisjs.com/guides>
- <https://github.com/edge-js/syntax> : templating
- <https://daisyui.com/docs/use>
- <https://www.cbsofyalioglu.com/code/adonisjs5-tailwind/>
- <https://ivanprats.dev/blog/set-up-tailwindcss-in-new-adonis5/>
- <https://github.com/adonisjs-community/awesome-adonisjs>
- <https://alpinejs.dev/>
- <https://docs.adonisjs.com/cookbooks/testing-adonisjs-apps>
- <https://docs.adonisjs.com/guides/database/introduction>
- <https://docs.adonisjs.com/guides/auth/introduction>
- <https://www.youtube.com/watch?v=bSvw887ptKI> crash-course
- <https://medium.com/mestredev/versioning-your-rest-api-with-laravel-646bcc1f70a4> : Api versionning
- <https://knexjs.org/> : database migrations
- <https://github.com/adonisjs/core/issues/1246> : duplicate route name, even with different prefix
- <https://github.com/thetutlage/japa#running-multiple-test-files>
- <https://www.rubydoc.info/github/stympy/faker/Faker>
- <https://visionmedia.github.io/superagent/#basic-authentication> : test auth
- <https://docs.adonisjs.com/reference/views/globals/stringify>
- <https://codepen.io/trovster/pen/oNjGGMq> :draggrable
- <https://learnvue.co/2020/01/how-to-add-drag-and-drop-to-your-vuejs-project/> :draggrable
- <https://stackoverflow.com/questions/3579079/how-can-you-represent-inheritance-in-a-database> : table inheritance
- <https://github.com/adonisjs/core/discussions/1544#discussioncomment-59621> : global scope
- <https://stackoverflow.com/questions/21396524/what-is-the-difference-between-assert-expect-and-should-in-chai/21405128> :chai assertion
- <https://www.chaijs.com/api/assert/>

## side notes

## Licence

MIT
