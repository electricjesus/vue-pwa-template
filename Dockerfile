FROM node:6

# update npm to latest first
RUN npm install -g npm/npm

# we would always expect docker builds to be production
ENV NODE_ENV production

# project files
ADD . /app
RUN npm install

# @TODO: use upstart or supervisor
ENTRYPOINT ["npm", "run"]
CMD ["start"]