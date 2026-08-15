FROM node:latest AS builder

WORKDIR /app

# Por esto:
RUN npm install

# Copy files
COPY package*.json ./
RUN npm ci

# Copy code
COPY . .
RUN npm run build

# --- Serve---
FROM alpine:latest

RUN apk add --no-cache nginx

COPY nginx.conf /etc/nginx/http.d/default.conf

# Copy dist
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]