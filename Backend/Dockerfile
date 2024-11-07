From python:3.9-slim

WORKDIR /Linkapp

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY ..

EXPOSE 8000

CMD["python","manage.py","runserver","0.0.0.0:8000"]