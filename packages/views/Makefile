build-sdk:
	npm install

	npm run sdk-payment-button:build
	npm run sdk-payment-modal-desktop:build
	npm run sdk-payment-modal-mobile:build
	npm run sdk-payment-page-desktop:build
	npm run sdk-payment-page-mobile:build

	npm run sdk-login-button:build
	npm run sdk-login-modal-desktop:build
	npm run sdk-login-modal-mobile:build
	npm run sdk-login-page-desktop:build
	npm run sdk-login-page-mobile:build

	npm run sdk-tip-button:build
	npm run sdk-tip-modal-desktop:build
	npm run sdk-tip-modal-mobile:build
	npm run sdk-tip-page-desktop:build
	npm run sdk-tip-page-mobile:build

.PHONY: copy-sdk
copy-sdk:
	@rm -rf ./apps/sdk/dist/

	@mkdir -p ./apps/dist/v1/elements/payment-request-button/
	@mkdir -p ./apps/dist/v1/elements/payment-request-modal-desktop/
	@mkdir -p ./apps/dist/v1/elements/payment-request-modal-mobile/
	@mkdir -p ./apps/dist/v1/elements/payment-request-page-desktop/
	@mkdir -p ./apps/dist/v1/elements/payment-request-page-mobile/

	@mkdir -p ./apps/dist/v1/elements/login-request-button/
	@mkdir -p ./apps/dist/v1/elements/login-request-modal-desktop/
	@mkdir -p ./apps/dist/v1/elements/login-request-modal-mobile/
	@mkdir -p ./apps/dist/v1/elements/login-request-page-desktop/
	@mkdir -p ./apps/dist/v1/elements/login-request-page-mobile/

	@mkdir -p ./apps/dist/v1/elements/tip-request-button/
	@mkdir -p ./apps/dist/v1/elements/tip-request-modal-desktop/
	@mkdir -p ./apps/dist/v1/elements/tip-request-modal-mobile/
	@mkdir -p ./apps/dist/v1/elements/tip-request-page-desktop/
	@mkdir -p ./apps/dist/v1/elements/tip-request-page-mobile/

	@cp -r ./apps/payment-request-button/dist/* ./apps/dist/v1/elements/payment-request-button/
	@cp -r ./apps/payment-request-modal-desktop/dist/* ./apps/dist/v1/elements/payment-request-modal-desktop/
	@cp -r ./apps/payment-request-modal-mobile/dist/* ./apps/dist/v1/elements/payment-request-modal-mobile/
	@cp -r ./apps/payment-request-page-desktop/dist/* ./apps/dist/v1/elements/payment-request-page-desktop/
	@cp -r ./apps/payment-request-page-mobile/dist/* ./apps/dist/v1/elements/payment-request-page-mobile/

	@cp -r ./apps/login-request-button/dist/* ./apps/dist/v1/elements/login-request-button/
	@cp -r ./apps/login-request-modal-desktop/dist/* ./apps/dist/v1/elements/login-request-modal-desktop/
	@cp -r ./apps/login-request-modal-mobile/dist/* ./apps/dist/v1/elements/login-request-modal-mobile/
	@cp -r ./apps/login-request-page-desktop/dist/* ./apps/dist/v1/elements/login-request-page-desktop/
	@cp -r ./apps/login-request-page-mobile/dist/* ./apps/dist/v1/elements/login-request-page-mobile/

	@cp -r ./apps/tip-request-button/dist/* ./apps/dist/v1/elements/tip-request-button/
	@cp -r ./apps/tip-request-modal-desktop/dist/* ./apps/dist/v1/elements/tip-request-modal-desktop/
	@cp -r ./apps/tip-request-modal-mobile/dist/* ./apps/dist/v1/elements/tip-request-modal-mobile/
	@cp -r ./apps/tip-request-page-desktop/dist/* ./apps/dist/v1/elements/tip-request-page-desktop/
	@cp -r ./apps/tip-request-page-mobile/dist/* ./apps/dist/v1/elements/tip-request-page-mobile/

.PHONY: build
build: build-sdk copy-sdk