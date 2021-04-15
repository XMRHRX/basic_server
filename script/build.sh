#!/bin/sh

sh $PWD/script/clean.sh
echo "=========="
yarn run tsoa routes
if [ "${1}" == 'swagger' ];then
  echo "[@]Create Swagger"
  yarn run tsoa spec
fi
echo "=========="
yarn run tsc
