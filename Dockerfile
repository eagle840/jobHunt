FROM node:16.17-slim
WORKDIR /app
COPY package.json /app
RUN npm install
EXPOSE 3000
COPY . /app
CMD ["npm", "start"]