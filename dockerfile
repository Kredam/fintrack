# using alpine(linux distro) for the smallest size
# version that is present in my local machine
FROM node:16.14.2-alpine as build
RUN mkdir -p /app/fintrack
WORKDIR /app/fintrack
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
COPY --from=build /app/fintrack/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]

