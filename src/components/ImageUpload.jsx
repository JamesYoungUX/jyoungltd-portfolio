import React, { useState } from 'react';
import { uploadImage } from '../utils/cloudinary';

const ImageUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState(null);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    setDebugInfo(null);

    try {
      console.log('Starting upload for file:', file.name);
      
      const result = await uploadImage(file, 'portfolio');
      setUploadedImage(result);
      console.log('Upload successful:', result);
    } catch (err) {
      console.error('Upload error details:', err);
      setError(`Upload failed: ${err.message}`);
      setDebugInfo({
        message: err.message,
        stack: err.stack
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 rounded-md" style={{ background: 'var(--bg-secondary)' }}>
      <h3 className="text-xl font-medium mb-4" style={{ color: 'var(--text-primary)' }}>
        Image Upload Test
      </h3>
      
      <input
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        disabled={uploading}
        className="mb-4"
      />
      
      {uploading && (
        <p style={{ color: 'var(--text-secondary)' }}>Uploading...</p>
      )}
      
      {error && (
        <div className="mt-4">
          <p style={{ color: '#ef4444' }}>{error}</p>
          {debugInfo && (
            <details className="mt-2">
              <summary style={{ color: 'var(--text-tertiary)', cursor: 'pointer' }}>
                Debug Info
              </summary>
              <pre className="mt-2 text-xs p-2 rounded" style={{ 
                background: 'var(--bg-tertiary)', 
                color: 'var(--text-tertiary)',
                overflow: 'auto'
              }}>
                {JSON.stringify(debugInfo, null, 2)}
              </pre>
            </details>
          )}
        </div>
      )}
      
      {uploadedImage && (
        <div className="mt-4">
          <p style={{ color: 'var(--text-secondary)' }}>Upload successful!</p>
          <img 
            src={uploadedImage.secure_url} 
            alt="Uploaded" 
            className="mt-2 rounded"
            style={{ maxWidth: '200px' }}
          />
          <p className="mt-2 text-sm" style={{ color: 'var(--text-tertiary)' }}>
            Public ID: {uploadedImage.public_id}
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload; 