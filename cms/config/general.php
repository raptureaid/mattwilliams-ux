<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

$isDev = App::env('ENVIRONMENT') === 'dev';
$isProd = App::env('ENVIRONMENT') === 'production';

return [
  // Global settings
  '*' => [
    // Craft config from .env variables
    'aliases' => [
      '@web' => App::env('PRIMARY_SITE_URL'),
      '@webroot' => App::env('WEB_ROOT_PATH'),
    ],
    'allowUpdates' => (bool)App::env('ALLOW_UPDATES'),
    'allowAdminChanges' => (bool)App::env('ALLOW_ADMIN_CHANGES') ?: $isDev,
    'backupOnUpdate' => (bool)App::env('BACKUP_ON_UPDATE'),
    'cpTrigger' => App::env('CP_TRIGGER') ?: 'admin',
    'devMode' => (bool)App::env('DEV_MODE') ?: $isDev,
    'enableTemplateCaching' => (bool)App::env('ENABLE_TEMPLATE_CACHING'),
    'resourceBasePath' => App::env('WEB_ROOT_PATH').'/cpresources',
    'securityKey' => App::env('SECURITY_KEY'),

    // Craft config from constants
    'cacheDuration' => false,
    'defaultSearchTermOptions' => [
      'subLeft' => true,
      'subRight' => true,
    ],
    'defaultTokenDuration' => 'P2W',
    'defaultWeekStartDay' => 0,
    'disallowRobots' => !$isProd,
    'enableCsrfProtection' => true,
    'errorTemplatePrefix' => 'errors/',
    'generateTransformsBeforePageLoad' => true,
    'maxCachedCloudImageSize' => 3000,
    'maxUploadFileSize' => '100M',
    'omitScriptNameInUrls' => true,
    'preventUserEnumeration' => true,
    'usePathInfo' => true,

    // Sites
    'siteName' => [
      'default' => App::env('PRIMARY_SITE_NAME')
    ],
    'siteUrl' => [
      'default' => App::env('PRIMARY_SITE_URL')
    ],
  ],
  // Dev environment settings
  'dev' => [],

  // Staging environment settings
  'staging' => [],

  // Production environment settings
  'production' => [],
];
