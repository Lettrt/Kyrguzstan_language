FROM python:3.11.3

RUN apt-get update \
    && pip install --upgrate pip \
    && pip install -r ../requirements.txt
    && mkdir code

WORKDIR code

COPY . code
