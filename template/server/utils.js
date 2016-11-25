const express = require('express')

module.exports = {

  createRenderer (bundle) {
    // https://github.com/vuejs/vue/blob/next/packages/vue-server-renderer/README.md#why-use-bundlerenderer
    return require('vue-server-renderer').createBundleRenderer(bundle, {
      cache: require('lru-cache')({
        max: 1000,
        maxAge: 1000 * 60 * 15
      })
    })
  },

  parseIndex (template) {
    const contentMarker = '<!-- APP -->'
    const i = template.indexOf(contentMarker)
    return {
      head: template.slice(0, i),
      tail: template.slice(i + contentMarker.length)
    }
  },

  serve (path, cache) {
    const config = {
      maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
    }
    return express.static(resolve(path), config)
  }
}
