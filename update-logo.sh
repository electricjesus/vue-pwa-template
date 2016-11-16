#!/bin/bash
# requires 'convert' from imagemagick
command_exists () {
    type "$1" &> /dev/null ;
}

if command_exists convert ; then
    for size in 48 120 144 152 192 384
    do
        convert logo.png -resize $size public/logo-$size.png
    done
fi