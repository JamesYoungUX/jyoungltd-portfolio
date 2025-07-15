import React, { useState } from 'react';
import { uploadImage } from '../utils/cloudinary';

const ImageUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [error, setError] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const result = await uploadImage(file, 'portfolio');
      setUploadedImage(result);
    } catch (err) {
      setError(`Upload failed: ${err.message}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 rounded-md bg-secondary">
      <h3 className="text-xl font-medium mb-4 text-primary">
        Image Upload
      </h3>
      <label htmlFor="image-upload" className="block mb-2 font-medium text-primary">
        Select an image to upload:
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        disabled={uploading}
        className="mb-4"
      />
      {uploading && (
        <p className="text-secondary">Uploading...</p>
      )}
      {error && (
        <div className="mt-4">
          <p className="upload-error">{error}</p>
        </div>
      )}
      {uploadedImage && (
        <div className="mt-4">
          <p className="text-secondary">Upload successful!</p>
          <img 
            src={uploadedImage.secure_url} 
            alt="Uploaded preview" 
            className="mt-2 rounded"
            style={{ maxWidth: '200px' }}
          />
          <p className="mt-2 text-sm text-tertiary">
            Public ID: {uploadedImage.public_id}
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload; 