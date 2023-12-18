DEV_COMP_FILE=docker-compose.dev.yml

dev:
	docker-compose -f $(DEV_COMP_FILE) up -d --build

watch:
	docker-compose -f $(DEV_COMP_FILE) up --build

prod:
	docker-compose up --build

down:
	docker-compose -f $(DEV_COMP_FILE) down
	docker rmi $$(docker images -q)

redev: down dev

.PHONY: dev watch prod down redev
