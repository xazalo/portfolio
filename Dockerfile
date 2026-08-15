FROM alpine:latest

RUN apk add --no-cache nginx

COPY nginx.conf /etc/nginx/http.d/default.conf
COPY dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]