#!/bin/sh

sh $PWD/script/clean.sh
echo "=========="
yarn run tsoa routes
echo "=========="
yarn run tsc --experimentalDecorators
