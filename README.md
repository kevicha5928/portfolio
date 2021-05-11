[Website here](https://kevicha5928.github.io/portfolio)

# Project structure 🏗

There are two special root folders in `src`: `App` and `shared` (described below). All other root folders in `src` (in our case only `Project`) should follow the structure of the routes. We can call these folders modules.

The main rule to follow: **Files from one module can only import from ancestor folders within the same module or from `src/shared`.** This makes the codebase easier to understand, and if you're fiddling with code in one module, you will never introduce a bug in another module.

# How to update

make changes
push changes and run the following to deploy to gh-pages
`npm run deploy`
