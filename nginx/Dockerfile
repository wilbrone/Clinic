#  Create a new image from the base nginx image.
FROM nginx
# Overwrite nginx's default configuration file with our own.
COPY default.conf /etc/nginx/conf.d/

# Proxy SSL certificates
COPY ./ssl/ /etc/ssl/certs/nginx/

RUN rm -rf /usr/share/nginx/html/*
COPY dist/ /usr/share/nginx/html

# Expose the port the app runs in
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]