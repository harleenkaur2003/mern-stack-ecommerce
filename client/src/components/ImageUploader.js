import React, { useState } from 'react';
import axios from 'axios';

function ImageUploader({ onUploadSuccess }) {
  const [image, setImage] = useState('');
  const [uploading, setUploading] = useState(false);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);
    try {
      const { data } = await axios.post('http://localhost:8000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setImage(data.imagePath);
      if (onUploadSuccess) {
        onUploadSuccess(data.imagePath);
      }
    } catch (error) {
      console.error('Upload failed:', error);
    }
    setUploading(false);
  };

  return (
    React.createElement('div', null,
      React.createElement('label', null, 'Choose product image:'),
      React.createElement('input', {
        type: 'file',
        onChange: uploadFileHandler
      }),
      uploading && React.createElement('p', null, 'Uploading...'),
      image && React.createElement('img', {
        src: `http://localhost:8000${image}`,
        alt: 'preview',
        width: '150'
      })
    )
  );
}

export default ImageUploader;