FROM node:18

WORKDIR /nodejs-project

COPY . .

RUN npm i

EXPOSE 3000

CMD ["npm","start"]