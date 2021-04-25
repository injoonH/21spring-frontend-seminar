import React, { useState, useEffect } from 'react';
import './DogsByBreed.css';

const DogsByBreed = () => {
  const breeds = ['shiba', 'terrier', 'retriever', 'husky', 'chihuahua', 'beagle'];
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/shiba/images/random/5`)
      .then(res => res.json())
      .then(result => {
        setDogs(result.message)
      })
  }, [])

  return (
    <div>
      {breeds.map(breed =>
        <button key={breed}>{breed}</button>
      )}
      <div className='dogs-list'>
        {dogs.length !== 0 &&
          dogs.map(url =>
            <img src={url} key={url} alt="Dog" width="300" />)
        }
      </div>
    </div>
  )
}

export default DogsByBreed;
