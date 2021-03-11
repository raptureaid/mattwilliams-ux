FROM raptureaid/php-prod-base:7.4.3

# Install packages
RUN apt-get update \
    # pecl PHP extensions
    && pecl install \
        xdebug-2.8.1 \
    # enable PHP extensions
    && docker-php-ext-enable \
        xdebug \
    # clean apt repo caches that don't need to be part of the image
    && apt-get clean \
    # clean directories that don't need to be part of the image
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Copy 'xdebug.ini' file into place for xdebug
COPY ./xdebug.ini /usr/local/etc/php/conf.d/xdebug.ini