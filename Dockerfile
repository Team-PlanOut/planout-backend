FROM node:14.17.3 AS builder
COPY . .
RUN yarn install
RUN yarn build

FROM node:14-alpine
WORKDIR .
COPY --from=builder node_modules ./node_modules
COPY --from=builder dist ./dist
COPY package.json yarn.lock tsconfig.json ./
CMD ["/bin/sh", "-c", "node -v"]
