FROM node:20

RUN mkdir -p /home/app

WORKDIR /home/app/src

COPY . /home/app

EXPOSE 3000

CMD ["node", "index.js"]
