# Leaping Tiger Wireframes

## Installing Node

It's common for web apps to use NodeJS to build front-end assets. Follow these steps to get that set up. You should only have to do this if you don't already have NodeJS installed.

### Homebrew (macOS)

If you have Homebrew installed, use the following command:

```sh
brew install node
```

Afterwards you should have NodeJS and NPM installed. You can test this with:

```sh
node -v
npm -v
```

### Non-Homebrew

Download and install NodeJS from <https://nodejs.org/en>.

## Installing Yarn

This project uses Yarn (in addition to NPM) to manage dependencies. It sounds complex, but as far as these things go, it's a simple setup. Install Yarn with:

```sh
npm install -g yarn
```

## Setting up the project

Set up the project by cloning the repository to a code folder:

```sh
git clone git@github.com:assertchris/leaping-tiger-wireframes.git
```

Once that's finished, go into that folder and install the JS dependencies:

```sh
yarn install
```

If this is the first time you're installing things, you'll also need to build the front-end assets...

## Building front-end assets

There are three pre-defined commands:

```sh
npm run dev
npm run watch
npm run prod
```

`dev` is used to convert the SASS and ES6 code into CSS and older JS syntax (to support the widest range of browsers). This means you'll be able to use modern Javascript and SASS to add to the wirefreames. It takes about 1.7 seconds to run, as I write this.

`watch` does the `dev` build, but it also continues to watch for file changes. If you change any of the SASS or ES6 files, a partial `dev` build will take place, building only the bits that need to be changed. It's much faster, so I recommend you leave this running while working.

`prod` creates minified CSS and JS files, so you'll want to run this just before releasing a new versio of the wireframes.

## Note about includes

You absolutely do not have to keep the include file system. I've only used it to be able to separate the code in a way that Github will support. Just place the contents of an include inside the element with a corresponding #id (or check out `src/js/main.js` to see how I'm doing that automatically).
