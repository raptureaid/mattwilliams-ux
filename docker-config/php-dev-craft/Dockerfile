FROM raptureaid/php-dev-base

# Install packages
RUN apt-get update \
    # apt Debian packages
    && apt-get install -y \
        gifsicle \
        jpegoptim \
        mariadb-client \
        nano \
        optipng \
        webp \
    # install PHP extensions
    && docker-php-ext-install \
        pdo_mysql \
    # install Composer
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin/ --filename=composer \
    # clean apt repo caches that don't need to be part of the image
    && apt-get clean \
    # clean directories that don't need to be part of the image
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /var/www/project

# Create storage directory and make writeable
RUN mkdir -p /var/www/project/cms/storage && \
    mkdir -p /var/www/project/cms/storage/runtime && \
    chown -R www-data:www-data /var/www/project/cms/storage

# Create cpresources directory and make writeable
RUN mkdir -p /var/www/project/cms/web/cpresources && \
    chown -R www-data:www-data /var/www/project/cms/web/cpresources

WORKDIR /var/www/project/cms