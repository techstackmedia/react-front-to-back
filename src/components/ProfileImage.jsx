import React, { useContext, useRef, useState } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import 'react-image-crop/dist/ReactCrop.css';
import axios from 'axios';

const ProfileImage = () => {
  const { handleClickDropdown } = useContext(FeedbackContext);
  const { showDropDown } = useContext(FeedbackContext);
  const fileInputRef = useRef(null);
  const defaultImage =
    'https://res.cloudinary.com/bizstak/image/upload/v1693404269/tnkudco8ke5u4wds4wsc.jpg';
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current.click(); // Trigger the hidden file input's click event
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.includes('image')) {
      const formData = new FormData();
      formData.append('profileImage', file);

      try {
        const response = await axios.post(
          '/feedback/upload-profile-image',
          formData
        );
        setUploadedImageUrl(response.data.profileImage);
        localStorage.setItem('image', response.data.profileImage); // Set local storage only on successful upload
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    } else {
      console.error('Invalid image file');
    }
  };

  const storedImage = localStorage.getItem('image');
  const profileImage = storedImage || defaultImage;

  return (
    <div onClick={handleClickDropdown}>
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
