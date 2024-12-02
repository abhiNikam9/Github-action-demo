# Stage 1: Build
FROM node:18 as build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY package*.json ./

RUN npm install --only=production

CMD ["npm", "run", "start:prod"]
