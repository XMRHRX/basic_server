yarn add: 
	tsc
	module-alias

for tsconfig.json: 


for module-alias(https: //www.npmjs.com/package/module-alias):
set "import 'module-alias/register';" to entry \*.js
and set the \_moduleAliases, ex: 
"\_moduleAliases":  {
"@src": "src"
}
