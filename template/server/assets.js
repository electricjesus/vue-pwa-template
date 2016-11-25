const fs = require('fs');

const _logo = function(size = 48) {
  const imagemagick = require('imagemagick-native')
  return imagemagick.convert({
      srcData: fs.readFileSync('logo.png'),
      format: 'PNG', height: size, width: size, quality: 100
  });
};

const favicon = require('serve-favicon')(_logo())

const compression = require('compression')({threshold: 0})

const manifest = function(req, res) {  
  res.send(require("./manifest.js"))
}

const logo = function(req, res) {
  const { size } = req.params
  const buffer = _logo(size);
  res.send(buffer)
}

module.exports = {
  favicon, compression, logo, manifest
}