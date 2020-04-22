FROM nginx
RUN rm /etc/nginx/conf.d/*
COPY express.conf /etc/nginx/conf.d/express.conf
RUN cat /etc/nginx/conf.d/express.conf