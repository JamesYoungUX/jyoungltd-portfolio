import React from 'react';

const CloudinaryDebug = () => {
  const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

  return (
    <div className="p-6 rounded-md" style={{ background: 'var(--bg-secondary)' }}>
      <h3 className="text-xl font-medium mb-4" style={{ color: 'var(--text-primary)' }}>
        Cloudinary Configuration Debug
      </h3>
      
      <div className="space-y-2">
        <p style={{ color: 'var(--text-secondary)' }}>
          <strong>Cloud Name:</strong> {cloudName || 'NOT SET'}
        </p>
        <p style={{ color: 'var(--text-secondary)' }}>
          <strong>Upload Preset:</strong> {uploadPreset || 'NOT SET'}
        </p>
        
        {!cloudName && (
          <p style={{ color: '#ef4444' }}>
            ❌ Cloud Name is missing from .env file
          </p>
        )}
        
        {!uploadPreset && (
          <p style={{ color: '#ef4444' }}>
            ❌ Upload Preset is missing from .env file
          </p>
        )}
        
        {cloudName && uploadPreset && (
          <p style={{ color: '#10b981' }}>
            ✅ Configuration looks good!
          </p>
        )}
      </div>
      
      <div className="mt-4 p-4 rounded" style={{ background: 'var(--bg-tertiary)' }}>
        <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
          <strong>Expected .env format:</strong><br/>
          REACT_APP_CLOUDINARY_CLOUD_NAME=your_cloud_name<br/>
          REACT_APP_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
        </p>
      </div>
    </div>
  );
};

export default CloudinaryDebug; 