FROM php:7.0.30-apache
RUN docker-php-ext-install mysqli
RUN apt-get update && apt-get install -y && apt-get install wget -y
RUN wget https://raw.githubusercontent.com/bernie6401/NTU_PADNS_Midterm/master/php_ini/php.ini -P /usr/local/etc/php
# RUN apt-get update && apt-get install -y \
#     # For php gd ext
#     libfreetype6-dev \
#     libjpeg62-turbo-dev \
#     libpng-dev \
#     # For php zip ext
#     zlib1g-dev \
#     libzip-dev
# RUN docker-php-ext-install mysqli pdo pdo_mysql zip
# RUN docker-php-ext-configure gd --with-freetype-dir --with-jpeg-dir
# RUN docker-php-ext-install gd