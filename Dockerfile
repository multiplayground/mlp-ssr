FROM keymetrics/pm2:10-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install --production --silent
CMD ["pm2-runtime", "start", "server.js"]