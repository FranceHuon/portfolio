import React from 'react';
import Button from 'react-bootstrap/Button';

function ButtonContact() {
    const buttonStyle ={
        color: '#000000',
        backgroundColor: '#EDE7DB',
        border: '#EDE7DB',
        fontFamily: 'Poppins',
    }

  return (
    <>
      <div className="mb-2">
        <Button style={{ buttonStyle }} size="lg">
          EMAIL
        </Button>{' '}
      </div>
    </>
  );
}

export default ButtonContact;