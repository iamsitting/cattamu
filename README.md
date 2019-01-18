# About
This repository holds software (mostly scripts) related to cattamu.

# Webscraper
This is an application that automates the cumbersome process of updating the website's announcement and event schedule. This is used until a full CRUD operation is implemented on the website.

## Usage
``` bash
python webscraper/console.py [mode] [filename]
```
Where:
1. `mode` can be `'ann'`, `'wbs'`, or `'tnm'`
2. `filename` is the relative path of the csv file containing the info you want on the website.

You also need to define some contants in a secrets.py file
``` python
# for admin login, contact me
ADMIN_USER = ''
ADMIN_PASSWORD = ''
# admin login url
TARGET_LOGIN = ''
# admin dashboard urls for add new entries
TARGET_NEW_ANN = '' 
TARGET_NEW_TNM = ''
TARGET_NEW_WBS = ''
# DO NOT commit this file!
```

## Other Notes
This application uses selenium and the Chrome webdriver. This means that results may vary from machine to machine.
This application should be maintained as the website's frontend is modified. Hopefully this application does not remain for too long...

