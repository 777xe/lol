install:
	npm install
start:
	npx babel-node ./src/bin/main.js
nickname:
	npx babel-node ./src/bin/nameGen.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
