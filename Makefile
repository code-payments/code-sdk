.PHONY: clean-cache
clean-cache:
	@rm -rf ./node_modules
	@rm -rf ./packages/views/node_modules/client
	@rm -rf ./packages/views/node_modules/currency
	@rm -rf ./packages/views/node_modules/elements
	@rm -rf ./packages/views/node_modules/events
	@rm -rf ./packages/views/node_modules/flags
	@rm -rf ./packages/views/node_modules/intents
	@rm -rf ./packages/views/node_modules/keys
	@rm -rf ./packages/views/node_modules/kikcode
	@rm -rf ./packages/views/node_modules/mnemonic
	@rm -rf ./packages/views/node_modules/programs
	@rm -rf ./packages/views/node_modules/proxy
	@rm -rf ./packages/views/node_modules/rpc
	@rm -rf ./packages/views/node_modules/views
	@rm -rf ./packages/views/node_modules/web

.PHONY: build-sdk
build-sdk:
	npm install --workspaces
	cd packages/keys && npm run build && cd ../..
	cd packages/mnemonic && npm run build && cd ../..
	cd packages/flags && npm run build && cd ../..
	cd packages/currency && npm run build && cd ../..
	cd packages/rpc && npm run build && cd ../..
	cd packages/kikcode && npm run build && cd ../..
	cd packages/programs && npm run build && cd ../..
	cd packages/intents && npm run build && cd ../..
	cd packages/events && npm run build && cd ../..
	cd packages/client && npm run build && cd ../..
	cd packages/elements && npm run build && cd ../..
	cd packages/views && npm run build && cd ../..
	cd packages/web && npm run build && cd ../..
	cd packages/proxy && npm run build && cd ../..

.PHONY: build
build: build-sdk