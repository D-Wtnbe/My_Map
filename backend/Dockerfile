FROM python:3.9.2-buster

RUN mkdir /var/www
# workdirの指定
WORKDIR /var/www

# 依存Pythonライブラリ一覧コピー
COPY requirements.txt ./

# 依存Pythonライブラリインストール
RUN pip install --no-cache-dir -r requirements.txt

WORKDIR /var/www/src

CMD ["uwsgi","--ini","/var/www/uwsgi.ini"]