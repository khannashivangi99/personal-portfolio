#!/bin/bash
python3.6 manage.py collectstatic --clear --noinput # clearstatic files
python3.6 manage.py collectstatic --noinput  # collect static files
# Prepare log files and start outputting logs to stdout
echo Starting nginx 
# Start Gunicorn processes
echo Starting Gunicorn.
exec gunicorn --bind 0.0.0.0:80 blog.wsgi --workers 3
exec service nginx start