FROM node:22-bullseye-slim
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../node_modules
COPY . .
RUN npm run build
EXPOSE 4173
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]
