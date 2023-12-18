FROM node:18.17.0 as developement
WORKDIR /home/node/app
COPY package.json .
COPY package-lock.json .
COPY . .
CMD ["npm", "run", "dev"]

FROM node:18.17.0 as production
WORKDIR /home/node/app
COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm install && npm run build
CMD ["node", "dist/src/main"]
