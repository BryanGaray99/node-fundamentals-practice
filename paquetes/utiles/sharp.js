const sharp = require('sharp');

sharp('apuntes.png')
    .resize(80)
    .toFile('resized.png');