FROM node:24

# Create app directory inside docker image
WORKDIR /frontend


COPY  .  .

RUN npm install -g http-server


EXPOSE 8181

CMD ["http-server","-p","8181" ]