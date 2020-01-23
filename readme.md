How to Setup a VueJS App with Snowpack
======================================

> With Snowpack you can build modern web apps (using React, Vue, etc.) without a bundler (like Webpack, Parcel, Rollup). No more waiting for your bundler to rebuild your site every time you hit save. Instead, every change is reflected in the browser instantly. &mdash; snowpack.dev

### About

We'll use this repository to go over how to setup a simple VueJS application that utilizes Snowpack instead of a bundler (like webpack).
To simplify the process further we'll also use a package called http-vue-loader to allow us to utilize `.vue` single-file components within our application.

### Branches

<dl>
  <dt>Master</dt>
  <dd>The master branch holds the starting application without snowpack setup.</dd>
  <dt>Finished Application</dt>
  <dd>The finished_application branch holds the ending application with snowpack setup.</dd>
</dl>

### Links

- [Snowpack](https://snowpack.dev) - Converts our dependencies into web modules.
- [Http Vue Loader](https://github.com/FranckFreiburger/http-vue-loader) - Allows us to load `.vue` files in-browser.
- [Serve](https://github.com/zeit/serve) - Static site / SPA file server
