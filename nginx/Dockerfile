FROM nginx
RUN ls /etc/nginx/conf.d/
RUN rm -rf /etc/nginx/conf.d/*
COPY *.conf /etc/nginx/conf.d/
RUN ls /etc/nginx/conf.d/