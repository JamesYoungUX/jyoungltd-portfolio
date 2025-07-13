# Cloudinary Setup Guide

## 1. Create a Cloudinary Account
- Go to [cloudinary.com](https://cloudinary.com) and sign up for a free account
- You'll get 25GB storage and 25GB bandwidth per month

## 2. Get Your Credentials
After signing up, go to your Dashboard and find:
- **Cloud Name** (shown in the URL: `https://cloudinary.com/console`)
- **API Key** (in the Dashboard)
- **API Secret** (in the Dashboard)

## 3. Create Upload Preset
1. Go to Settings → Upload
2. Scroll to "Upload presets"
3. Click "Add upload preset"
4. Set "Signing Mode" to "Unsigned"
5. Save and note the preset name

## 4. Create Environment File
Create a `.env` file in your project root with:

```
REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name
REACT_APP_CLOUDINARY_API_KEY=your_api_key
REACT_APP_CLOUDINARY_API_SECRET=your_api_secret
REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
```

## 5. Restart Your Development Server
After adding the environment variables, restart your React app.

## Usage Examples

### Upload an Image
```javascript
import { uploadImage } from './utils/cloudinary';

const handleUpload = async (file) => {
  const result = await uploadImage(file, 'case-studies');
  console.log('Uploaded:', result.secure_url);
};
```

### Get Optimized Image URL
```javascript
import { getOptimizedImageUrl } from './utils/cloudinary';

const imageUrl = getOptimizedImageUrl('portfolio/case-study-1', {
  width: 800,
  quality: 'auto'
});
``` 