const package = require('../package.json')
const pwa = require('./pwa.json')
const { extend } = require('lodash')

const template = {
    "name": "pwa",
    "short_name": "a vue.js template for PWAs",
    "start_url": ".",
    "description": "This app was generated via Vue CLI and electricjesus/pwa template",
    "background_color": "#FFFFFF",
    "theme_color": "#FFFFFF",
    "dir": "auto",
    "lang": "en",
    "display": "standalone",
    "icons": [
      { "src": "logo-72.png",         "sizes": "72x72",          "type": "image/png"      }, 
      { "src": "logo-96.png",         "sizes": "96x96",          "type": "image/png"      }, 
      { "src": "logo-128.png",        "sizes": "128x128",        "type": "image/png"      }, 
      { "src": "logo-144.png",        "sizes": "144x144",        "type": "image/png"      }, 
      { "src": "logo-152.png",        "sizes": "152x152",        "type": "image/png"      }, 
      { "src": "logo-192.png",        "sizes": "192x192",        "type": "image/png"      }, 
      { "src": "logo-384.png",        "sizes": "384x384",        "type": "image/png"      }, 
      { "src": "logo-512.png",        "sizes": "512x512",        "type": "image/png"      }
    ],
    "orientation": "portrait",
    "prefer_related_applications": false,
    "related_applications": [{
        "platform": "web"
    }]
}

const config = {
    name:               package.name,                               // pretty self-explanatory
    short_name:         pwa.short_name,                           // name to show on home screens
    description:        package.description,                        // short name is displayed at the home screen
    start_url:          './?utm_source=web_app_manifest',           // for simplicity sake, let's just stick with root
    display:            pwa.display           || 'standalone',    // app display mode
    theme_color:        pwa.theme_color       || '#FFFFFF',       // launcher and app switcher theme color
    background_color:   pwa.background_color  || '#FFFFFF',       // splash background color
    dir:                pwa.dir               || 'auto',
    lang:               pwa.lang              || 'en',
    orientation:        pwa.orientation       || 'portrait'       // lock to which orientation
}

module.exports = extend({}, template, config)