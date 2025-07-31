FROM node:24
WORKDIR /frontend
COPY  .  .
RUN npm install -g http-server
EXPOSE 8181
CMD ["http-server","-p","8181" ]