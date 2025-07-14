#!/bin/bash

echo "🚀 Building React portfolio for production..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Your build files are ready in the 'build/' directory"
    echo ""
    echo "📋 Next steps to deploy to your Ubuntu server:"
    echo ""
    echo "1. Upload files to your server:"
echo "   scp -r build/* user@yourserver:/home/jyoungltd/public_html/"
echo "   scp .htaccess user@yourserver:/home/jyoungltd/public_html/"
echo ""
echo "2. Upload Apache config:"
echo "   scp jyoungltd.com.conf user@yourserver:/etc/apache2/sites-available/"
    echo ""
    echo "3. On your Ubuntu server, run:"
    echo "   sudo a2enmod rewrite"
    echo "   sudo a2enmod expires"
    echo "   sudo a2enmod headers"
    echo "   sudo a2enmod deflate"
    echo "   sudo a2ensite jyoungltd.com.conf"
    echo "   sudo apache2ctl configtest"
    echo "   sudo systemctl reload apache2"
    echo ""
    echo "4. Set up SSL (optional but recommended):"
    echo "   sudo certbot --apache -d jyoungltd.com -d www.jyoungltd.com"
    echo ""
    echo "🌐 Your portfolio will be live at: https://jyoungltd.com"
else
    echo "❌ Build failed! Please check for errors above."
    exit 1
fi 