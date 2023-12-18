FROM node:18.17.0 as developement
WORKDIR /home/node/app
COPY package.json .
COPY package-lock.json .
COPY . .
CMD ["npm", "run", "dev"]

FROM nginx:latest as production
WORKDIR /home/node/app
COPY --from=developement /home/node/app .
RUN npm run build
