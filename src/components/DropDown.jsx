import { useContext, useRef } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const DropDown = () => {
  const { showDropDown } = useContext(FeedbackContext);
  const fileInputRef = useRef(null);

  const handleUploadButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      style={{
        borderRadius: 4,
        backgroundColor: '#fff',
        color: '#000',
        // display: showDropDown ? undefined : 'none',
        position: 'absolute',
        top: 60,
        right: 60,
        zIndex: 1,
        boxShadow: '0 3px 15px 1px #333',
        fontSize: 14,
        padding: 10,
        display: 'none'
      }}
    >
      {/* <div style={{ color: '#aaa' }}>
        <p>Settings</p>
      </div>
      <div
        style={{
          marginBlock: 10,
          width: '100%',
          borderBottom: 'none',
          borderTop: '1px solid #bbb',
        }}
      ></div> */}
      <div>
        <button
          style={{
            display: 'block',
            backgroundColor: 'transparent',
            border: '1px solid #bbb',
            borderRadius: 4,
            padding: '5px 3px',
            cursor: 'pointer',
          }}
          onClick={handleUploadButtonClick}
        >
          Upload Image
        </button>
      </div>
    </div>
  );
};

export default DropDown;
