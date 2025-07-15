/* global process */
// Cloudinary configuration for browser
const CLOUDINARY_CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

/**
 * Upload an image file to Cloudinary.
 * @param {File} file - The image file to upload.
 * @param {string} [folder='portfolio'] - The Cloudinary folder to upload to.
 * @returns {Promise<Object>} The Cloudinary upload response data.
 * @throws {Error} If the upload fails.
 */
export const uploadImage = async (file, folder = 'portfolio') => {
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
};

/**
 * Get an optimized Cloudinary image URL with standard transformations.
 * @param {string} publicId - The Cloudinary public ID of the image.
 * @param {Object} [options={}] - Transformation options (e.g., width, height, quality).
 * @returns {string} The optimized image URL.
 */
export const getOptimizedImageUrl = (publicId, options = {}) => {
  const defaultOptions = {
    q: 'auto',
    f: 'auto',
    w: 'auto',
    h: 'auto',
    c: 'scale',
    ...options
  };
  // Build transformation string in Cloudinary's slash-based syntax
  const transformationString = Object.entries(defaultOptions)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformationString}/${publicId}`;
};

/**
 * Get responsive Cloudinary image URLs for different sizes.
 * @param {string} publicId - The Cloudinary public ID of the image.
 * @param {number[]} [sizes=[400, 800, 1200]] - Array of widths for responsive images.
 * @returns {Array<{width: number, url: string}>} Array of objects with width and URL.
 */
export const getResponsiveImageUrls = (publicId, sizes = [400, 800, 1200]) => {
  return sizes.map(size => ({
    width: size,
    url: `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/w_${size},q_auto,f_auto,c_scale/${publicId}`
  }));
};

/**
 * Get a Cloudinary image URL with custom transformations.
 * @param {string} publicId - The Cloudinary public ID of the image.
 * @param {Object} [transformations={}] - Key-value pairs for Cloudinary transformations.
 * @returns {string} The transformed image URL.
 */
export const transformImageUrl = (publicId, transformations = {}) => {
  // Build transformation string in Cloudinary's slash-based syntax
  const transformationString = Object.entries(transformations)
    .map(([key, value]) => `${key}_${value}`)
    .join(',');
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/${transformationString}/${publicId}`;
}; 