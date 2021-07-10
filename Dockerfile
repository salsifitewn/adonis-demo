FROM node:current-alpine3.11

WORKDIR /app

# Copy package.json & package-lock.json to the root of the api dir
COPY ./package.json ./yarn.lock ./

# Add node_modules to the envionmental path variable so we can run binaries easily
# ENV PATH /usr/src/services/api/node_modules/.bin:$PATH

RUN yarn --frozen-lockfile

# Copy everything to the root of the API service docker volume, and expose port to the outside world
COPY --chown=node:node . .

RUN yarn build
WORKDIR /app/build
# Install the good ol' NPM modules and get Adonis CLI in the game
RUN yarn install --production --frozen-lockfile && \
  yarn cache clean

# Create an .env file by copying the .env.example file
COPY ../.env.example .env

# We'll use PM2 as a process manager for our Node server
RUN npm i -g pm2

# Let all incoming connections use the port below
EXPOSE 3333

CMD [ "pm2-runtime", "yarn", "--interpreter", "sh", "--name", "api", "--raw", "--", "start" ]
