# Building the Mandara UI code
FROM node:10.16.0 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Transporting the build artifact in dist/ to host with Nginx webserver 
FROM nginx:stable-alpine
WORKDIR /app
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx-ninemiles.conf /etc/nginx/conf.d/
COPY --from=builder /app/dist/NineMiles-Angular /app/
