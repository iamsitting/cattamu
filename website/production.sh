#!/bin/bash

source ../env/bin/activate
#sudo service gunicorn stop
git stash
git pull
pip install -r backend/requirements.txt
backend/catamu/manage.py makemigrations
backend/catamu/manage.py migrate
cd frontend
npm install
npm run django
../backend/catamu/manage.py runserver
#sudo service gunicorn start