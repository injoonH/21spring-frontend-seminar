import React, { useState, useEffect } from 'react';
import './DogsByBreed.css';

const DogsByBreed = () => {
  const breeds = ['shiba', 'terrier', 'retriever', 'husky', 'chihuahua', 'beagle'];
  const [dogs, setDogs] = useState([]);
  const [breed, setBreed] = useState(breeds[2]);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/5`)
      .then(res => res.json())
      .then(result => {
        setDogs(result.message)
      })
  }, [breed])

  return (
    <div>
      {breeds.map(_breed =>
        <button key={_breed} onClick={() => setBreed(_breed)}>{_breed}</button>)
      }
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
