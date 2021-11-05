import React, { useState, useEffect } from 'react';

const DogFetch = () => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/dogs/random?n=1')
      .then(data => data.json())
      .then(result => {
        if (result.status === 'success')
          setImageURL(result.message);
      });
  }, []);

  return (
    <div>
      {imageURL !== "" && <img src={imageURL} alt="Dog" width="600" />}
    </div>
  );
}

export default DogFetch;
