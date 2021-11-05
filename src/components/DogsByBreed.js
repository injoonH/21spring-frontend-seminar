import React, { useState, useEffect } from 'react';
import './DogsByBreed.css';

const DogsByBreed = () => {
  const breeds = ['shiba', 'terrier', 'retriever', 'husky', 'chihuahua', 'beagle'];
  const [dogs, setDogs] = useState([]);
  const [curBreed, setCurBreed] = useState(breeds[0]);
  const picNum = 5;

  useEffect(() => {
    fetch(`http://localhost:3000/dogs/?breed=${curBreed}&n=${picNum}`)
      .then(res => res.json())
      .then(result => {
        setDogs(result.message)
      })
  }, [curBreed]);

  return (
    <div>
      {breeds.map(breed =>
        <button key={breed} onClick={() => setCurBreed(breed)}>{breed}</button>
      )}
      <div className='dogs-list'>
        {dogs.length !== 0 &&
          dogs.map(url =>
            <img src={url} key={url} alt="Dog" width="300" />)
        }
      </div>
    </div>
  );
}

export default DogsByBreed;
