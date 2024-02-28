.PHONY: clean-cache
clean-cache:
	@rm -rf ./node_modules
	@rm -rf ./packages/client/node_modules
	@rm -rf ./packages/currency/node_modules
	@rm -rf ./packages/elements/node_modules
	@rm -rf ./packages/events/node_modules
	@rm -rf ./packages/flags/node_modules
	@rm -rf ./packages/intents/node_modules
	@rm -rf ./packages/keys/node_modules
	@rm -rf ./packages/kikcode/node_modules
	@rm -rf ./packages/mnemonic/node_modules
	@rm -rf ./packages/programs/node_modules
	@rm -rf ./packages/proxy/node_modules
	@rm -rf ./packages/rpc/node_modules
	@rm -rf ./packages/views/node_modules
	@rm -rf ./packages/web/node_modules

.PHONY: clean-dist
clean-dist:
	@rm -rf ./packages/client/dist
	@rm -rf ./packages/currency/dist
	@rm -rf ./packages/elements/dist
	@rm -rf ./packages/events/dist
	@rm -rf ./packages/flags/dist
	@rm -rf ./packages/intents/dist
	@rm -rf ./packages/keys/dist
	@rm -rf ./packages/kikcode/dist
	@rm -rf ./packages/mnemonic/dist
	@rm -rf ./packages/programs/dist
	@rm -rf ./packages/proxy/dist
	@rm -rf ./packages/rpc/dist
	@rm -rf ./packages/views/dist
	@rm -rf ./packages/web/dist


.PHONY: build-sdk
build-sdk: clean-dist
	npm install --workspaces
	cd packages/keys && npm run build && cd ../..
	cd packages/mnemonic && npm run build && cd ../..
	cd packages/currency && npm run build && cd ../..
	cd packages/flags && npm run build && cd ../..
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

.PHONY: clean
clean: clean-cache clean-dist