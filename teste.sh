git add .
git commit -m "teste deploy"
git push origin master
git push heroku master
heroku ps:scale web=1
heroku open