let mix = require("laravel-mix").mix

mix.webpackConfig({
  "resolve": {
    "alias": {
      "bootstrap": "bootstrap-sass/assets/javascripts/bootstrap"
    }
  }
})

mix.setPublicPath("dist")

mix.js("src/js/main.js", "dist/js/main.js").extract([
  "jquery",
  "bootstrap/collapse"
])

mix.sass("src/css/main.scss", "dist/css/main.css")
