FROM python:3.11.3

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /code
WORKDIR /code
RUN pip install --upgrade pip \
    && apt-get update
COPY requirements.txt /code/

RUN pip install -r requirements.txt
COPY . /code/