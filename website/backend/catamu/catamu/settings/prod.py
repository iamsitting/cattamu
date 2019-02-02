from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

SSL_ON = False

ALLOWED_HOSTS = ['*']

# Database
# https://docs.djangoproject.com/en/2.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, '../prod_db.sqlite3'),
    }
}

if SSL_ON:
  SESSION_COOKIE_SECURE = True
  SESSION_COOKIE_HTTPONLY = True
  SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
  SECURE_SSL_REDIRECT = True
