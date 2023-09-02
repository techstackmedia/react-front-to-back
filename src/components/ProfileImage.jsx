import React, { useContext, useEffect, useRef, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import 'react-image-crop/dist/ReactCrop.css';
// import axios from 'axios';

const ProfileImage = () => {
  const { handleClickDropdown, showDropDown } = useContext(FeedbackContext);
  const fileInputRef = useRef(null);
  const defaultImage =
    'https://res.cloudinary.com/bizstak/image/upload/v1693404269/tnkudco8ke5u4wds4wsc.jpg';
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [error, setError] = useState('');
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('animate');
    const animationTimeout = setTimeout(() => {
      setAnimationClass('');
    }, 3000);

    return () => clearTimeout(animationTimeout);
  }, [uploadedImageUrl]);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click(); // Trigger the hidden file input's click event
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.includes('image')) {
      const formData = new FormData();
      formData.append('profileImage', file);

      try {
        const response = await fetch('/feedback/upload-profile-image', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUploadedImageUrl(data.profileImage);
        localStorage.setItem('image', data.profileImage); // Set local storage only on successful upload
        setError('');
      } catch (error) {
        setError('Error uploading image:', error.message);
      }
    } else {
      setError('Invalid image file');
    }
  };

  const storedImage = localStorage.getItem('image');
  const profileImage = storedImage || defaultImage;

  return (
    <div onClick={handleClickDropdown}>
      {uploadedImageUrl ? (
        <div className={`upload-confirmation ${animationClass}`}>
          <div className='confirmation-icon'>&#10003;</div>
          <h2>
            <img
              src={uploadedImageUrl}
              alt='profile'
              width={100}
              height={100}
              style={{ border: '1px solid #000' }}
            />
          </h2>
          <p>Image Upload was successfully.</p>
        </div>
      ) : null}
      <img
        style={{
          borderRadius: '50%',
          width: 38,
          height: 38,
          overflow: 'hidden',
          border: '1px solid #fff',
        }}
        src={profileImage}
        width={38}
        height={38}
        alt='profile'
      />
      <input
        type='file'
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button
        style={{
          display: showDropDown ? undefined : 'none',
          backgroundColor: '#fff',
          border: '1px solid #bbb',
          borderRadius: 4,
          padding: '5px 3px',
          cursor: 'pointer',
          width: 97,
          position: 'absolute',
          right: 60,
          top: 60,
          outline: '3px solid #fff',
          // boxShadow: '0 3px 15px 1px #333',
        }}
        onClick={handleUploadButtonClick}
      >
        Upload Image
      </button>
    </div>
  );
};

export default ProfileImage;
