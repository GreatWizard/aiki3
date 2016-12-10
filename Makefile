# help: help        Display callable targets.
help:
	@echo "HELP:"
	@echo
	@sed -n '/^# help:/{s/# help: /    /;p}' $(lastword $(MAKEFILE_LIST)) | LC_ALL=C sort
	@echo


# help: install     Install dependencies
install:
	gem install jekyll bundler

# help: update      Update dependencies
update:
	bundle install

# help: serve (s)   Launch server
serve:
	jekyll serve

s: serve

# help: build (b)   Build project
build:
	jekyll build  --config=_config.yml,_config_prod.yml

b: build

