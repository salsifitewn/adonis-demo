# Adonis-demo

## Installation

<https://docs.adonisjs.com/guides/installation>

`yarn create adonis-ts-app adonis-demo`

## Additionnal Packages

### Front

- TailwindCSS
  `npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`
  `npx tailwindcss init -p`

- daisyUI
  `npm i daisyui --save`

## TODO

Alpine.js

## Adonis CLI history

```bash
node ace make:view partials/navbar
```

```sh
node ace <cmd>
Available commands
  build                  Compile project from Typescript to Javascript. Also compiles the frontend assets if using webpack encore
  configure [invoke]     Configure a given AdonisJS package
  repl                   Start a new REPL session
  serve                  Start the AdonisJS HTTP server, along with the file watcher. Also starts the webpack dev server when webpack encore is installed

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
  make:prldfile          Make a new preload file
  make:provider          Make a new provider class
  make:validator         Make a new validator
  make:view              Make a new view template

Global Flags
  -h, --help boolean
  -v, --version boolean
```

## Documentation

- <https://github.com/edge-js/syntax> : templating
- <https://daisyui.com/docs/use>
- <https://www.cbsofyalioglu.com/code/adonisjs5-tailwind/>
