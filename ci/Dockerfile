FROM node:12-alpine
COPY build build
COPY ci/app.js app.js
RUN yarn add express
EXPOSE 8000
CMD ["node", "app.js"]
