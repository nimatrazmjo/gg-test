FROM node:alpine as base

WORKDIR /app

COPY package.json package-lock.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 4000

CMD ["npm", "start"];


FROM base

COPY package.json package-lock.json ./

USER node

RUN npm install --production

COPY --chown=node:node . .

EXPOSE 4000