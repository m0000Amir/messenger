FROM node:16-alpine

WORKDIR /var/www

COPY . .

RUN npm i

RUN npm run build

EXPOSE 3000

CMD ["node", "server.js"]


