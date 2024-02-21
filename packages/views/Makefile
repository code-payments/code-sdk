build-sdk:
	npm install

	npm run sdk-payment-button:build
	npm run sdk-payment-modal-desktop:build
	npm run sdk-payment-modal-mobile:build

	npm run sdk-login-button:build
	npm run sdk-login-modal-desktop:build
	npm run sdk-login-modal-mobile:build

.PHONY: copy-sdk
copy-sdk:
	@rm -rf ./apps/sdk/dist/

	@mkdir -p ./apps/dist/v1/elements/payment-request-button/
	@mkdir -p ./apps/dist/v1/elements/payment-request-modal-desktop/
	@mkdir -p ./apps/dist/v1/elements/payment-request-modal-mobile/
	@cp -r ./apps/payment-request-button/dist/* ./apps/dist/v1/elements/payment-request-button/
	@cp -r ./apps/payment-request-modal-desktop/dist/* ./apps/dist/v1/elements/payment-request-modal-desktop/
	@cp -r ./apps/payment-request-modal-mobile/dist/* ./apps/dist/v1/elements/payment-request-modal-mobile/

	@mkdir -p ./apps/dist/v1/elements/login-request-button/
	@mkdir -p ./apps/dist/v1/elements/login-request-modal-desktop/
	@mkdir -p ./apps/dist/v1/elements/login-request-modal-mobile/
	@cp -r ./apps/login-request-button/dist/* ./apps/dist/v1/elements/login-request-button/
	@cp -r ./apps/login-request-modal-desktop/dist/* ./apps/dist/v1/elements/login-request-modal-desktop/
	@cp -r ./apps/login-request-modal-mobile/dist/* ./apps/dist/v1/elements/login-request-modal-mobile/

.PHONY: build
build: build-sdk copy-sdk