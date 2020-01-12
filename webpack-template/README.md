## What is in the Starting project

* Preprocessor for SCSS
* Resource minifiers
* Compression graphics



## What you need to do

Install [NodeJS](https://nodejs.org/en/)  
Install plugin for [Editorconfig](http://editorconfig.org) editor 

## Project start

Clone a project  
Open this folder in the console and install dependencies

```bash
npm install
npm install webpack
npm install webpack-cli
```


## Available commands
`Use with npm run
`webpack` - run a project for development, proxy server and file watcher  
`dev` - webpack --mode development
`build`  - webpack --mode production



## Project structure

```
webpack-template/
├── /dist/                 # The build result. (never edited).
├── /node_modules/         # Node modules. (never edited).
├── /src/                  # Source files.
│   ├── /_include/         # HTML markup that is inserted into other files.
│   ├── /fonts/            # Fonts.
│   ├── /images/           # Source images.
│   ├── /js/               # js scripts.
│   ├── /sass/             # See below for the folder structure.
└── .editorconfig          # Configuration for Editor.(optional)
└── .gitignore             # Specifies intentionally untracked files to ignore
└── webpack.config.js      # Configuration for Gulp.
└── package.json           # NPM packages.
```