deploy:
	yarn build
	git add .
	git commit -m "New deployment"
	git push

