# Nuxt Learning Note

> Because of SSR , I start to learn Nuxt.js.  
In the past , I used to use Bootstrap4 makeing RWD, so How to add Bootstrap4 on plugin of Nuxt projects that is this note talking about.


## Steps
1. Install bootstrap,jquery, popper.js   
```
npm install --save bootstrap jquery popper.js
```
2. Modify `nuxt.config.js`
```
const webpack = require('webpack')

module.exports = {
  build: {
    vendor: ['jquery', 'bootstrap'],
    plugins: [
      // set shortcuts as global for bootstrap
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  // include bootstrap css
  css: ['bootstrap/dist/css/bootstrap.css'],
  // include bootstrap js on startup
  plugins: ['~plugins/bootstrap.js']
}
```
3. Add bootstrap.js on plugins folder
```
// Include bootstrap JS only 
if (process.browser) {
  require('bootstrap')
}
```
4. Now you can use bootstrap4 on your Nuxt Project.
## Learning key point
In the start , Bootstrap didn't use jQuery to do animation ,toggle ,tooltips.
I found every website said Add bootstrap.js on plugins folder useing BROWSER_BUILD,but BROWSER_BUILD has been deprecated,**change to process.browser, everything is working perfectly.**
## Reference 
- [[Nuxt] 起步走（Getting Started）](https://pjchender.github.io/2018/05/03/nuxt-%E8%B5%B7%E6%AD%A5%E8%B5%B0%EF%BC%88getting-started%EF%BC%89/)
- [Nuxt issue](https://github.com/nuxt/nuxt.js/issues/178#issuecomment-395727915)

