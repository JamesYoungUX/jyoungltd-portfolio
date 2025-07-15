// Cloudinary configuration for browser
const CLOUDINARY_CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

// Upload image to Cloudinary
export const uploadImage = async (file, folder = 'portfolio') => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', folder);

    const uploadUrl = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

    const response = await fetch(uploadUrl, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Upload failed: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

// Get optimized image URL
export const getOptimizedImageUrl = (publicId, options = {}) => {
  const defaultOptions = {
    quality: 'auto',
    fetch_format: 'auto',
    width: 'auto',
    height: 'auto',
    crop: 'scale',
    ...options
  };

  const params = new URLSearchParams();
  Object.entries(defaultOptions).forEach(([key, value]) => {
    params.append(key, value);
  });

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${params.toString()}/${publicId}`;
};

// Get responsive image URLs for different sizes
export const getResponsiveImageUrls = (publicId, sizes = [400, 800, 1200]) => {
  return sizes.map(size => ({
    width: size,
    url: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_${size},q_auto,f_auto,c_scale/${publicId}`
  }));
};

// Transform image URL with specific parameters
export const transformImageUrl = (publicId, transformations = {}) => {
  const params = new URLSearchParams();
  Object.entries(transformations).forEach(([key, value]) => {
    params.append(key, value);
  });

  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${params.toString()}/${publicId}`;
}; 