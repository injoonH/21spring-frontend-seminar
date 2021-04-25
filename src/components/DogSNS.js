import React, { useEffect, useState } from 'react';

const DogSNS = () => {
  const breeds = ['shiba', 'terrier', 'retriever', 'husky', 'chihuahua', 'beagle'];
  const [dogs, setDogs] = useState([]);
  const [breed, setBreed] = useState(breeds[0]);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/5`)
      .then(res => res.json())
      .then(result => {
        setDogs(result.message)
      })
  }, [breed])

  return (
    <div>
      {breeds.map(breed =>
        <button key={breed} onClick={() => setBreed(breed)}>{breed}</button>
      )}
      <div className='dogsns-list'>
        {dogs.length !== 0 &&
          dogs.map(url =>
            <div className='dogsns-row' key={url}>
              <img src={url} alt="Dog" width="300" />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default DogSNS;
