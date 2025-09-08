# Installation Guide

## 1. System Requirements

Ensure your server environment meets the following requirements before installation:

### 1.1 Core Requirements

- WordPress 6.8 or higher (Recommended)
- PHP 8.2 or higher (Recommended)
- MySQL 8.4 or higher (Recommended)
- WEBP Support enabled
- PHP Zip_Archive Module enabled

### 1.2 PHP Configuration Requirements

| Setting | Minimum Value | Recommended Value |
|---------|---------------|------------------|
| PHP version | 7.4 | 8.2 or higher |
| memory_limit | 256M | 512M |
| max_execution_time | 400 | 600 |
| upload_max_filesize | 40M | 64M |
| post_max_size | 64M | 264M |
| max_input_vars | 300 | 4000 |
| max_input_time | 300 | 400 |
| Server Memory | 256M | 1024M |

### 1.3 Runtime Configuration

- `allow_url_fopen`: ON
- `allow_url_include`: ON

## 2. PHP Configuration Setup

If you have direct access to your server's PHP configuration, update the relevant values in your `php.ini` file. If you don't have access to modify server PHP settings directly, you can try setting these values through your `.htaccess` file:

```apache
php_value max_input_vars 4000
php_value max_execution_time 600
php_value memory_limit 512M
php_value max_input_time 400
php_value upload_max_filesize 64M
php_value post_max_size 264M
```

> **Important**: Some hosting providers do not allow PHP settings to be modified via `.htaccess`. If you experience issues after making these changes, access your server via FTP and remove these modifications from your `.htaccess` file.

## 3. WordPress Installation

This theme requires WordPress to be installed before proceeding. If you need assistance with WordPress installation, please refer to the official documentation:

- [WordPress Installation Guide](https://wordpress.org/support/article/how-to-install-wordpress/) - Comprehensive instructions for installing WordPress on your server
- [First Steps With WordPress](https://wordpress.org/support/article/first-steps-with-wordpress/) - Essential information covering a wide range of topics for new WordPress users

### 3.1 WordPress Setup Video Tutorial

The following video provides a visual guide to WordPress installation and initial setup:

<div class="sec-content cdx-video">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XlMjNDUzwfY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## 4. Theme Installation

After successfully installing WordPress and ensuring your server meets all the requirements, follow these steps to install the theme:

1. Log in to your WordPress admin dashboard
2. Navigate to **Appearance → Themes**
3. Click **Add New**
4. Click **Upload Theme**
5. Choose the theme zip file and click **Install Now**
6. After installation completes, click **Activate**

## 5. Plugin Requirements

This theme requires or recommends the following plugins for optimal functionality:

- **Required**: Transova Essential (Premium core plugin included with your purchase)
- **Required**: Codestar Framework (Premium options builder plugin included with your purchase)
- **Required**: Elementor Page Builder
- **Required**: One Click Demo Import
- **Required**: Contact Form 7
- **Recommended**: WooCommerce (if you plan to use e-commerce features)

When you activate the theme, you’ll be prompted to install and activate the above plugins.

## 6. Theme Setup

After activating the theme, follow the setup wizard that will guide you through:

1. Plugin installation
2. Demo content import options
3. Theme customization

## 7. Troubleshooting

If you encounter issues during installation:

### 7.1 PHP Configuration Issues

If you receive errors related to PHP limits, verify your server meets the requirements specified in section 1.2. Contact your hosting provider if you need assistance increasing these limits.

### 7.2 Memory Limit Errors

If you experience "Allowed memory size exhausted" errors:

1. Increase the `memory_limit` setting as described in section 2
2. If using WooCommerce or WPML, consider increasing to 512M or higher

### 7.3 Plugin Compatibility

If you experience conflicts with other plugins, try deactivating them temporarily to identify the source of the conflict.

## 8. Support Resources

If you need further assistance with theme installation or configuration:

- Visit our documentation at [theme-documentation-url]
- Submit a support ticket at [support-url]
- Check our knowledge base at [kb-url]

---

*Last updated: 2025-06-29 | Current version: 2.4.1*