import React, { useEffect, useState } from 'react';
import LikeButton from './LikeButton';

const DogSNS = () => {
  const breeds = ['shiba', 'terrier', 'retriever', 'husky', 'chihuahua', 'beagle'];
  const [dogs, setDogs] = useState([]);
  const [breed, setBreed] = useState(breeds[0]);
  const picNum = 5;
  const [likes, setLikes] = useState(new Array(picNum).fill(false));
  const [totLikes, setTotLikes] = useState(0);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/${picNum}`)
      .then(res => res.json())
      .then(result => {
        setDogs(result.message);
        setLikes(l => l.fill(false));
        setTotLikes(0);
      })
  }, [breed]);

  return (
    <div>
      {breeds.map(breed =>
        <button key={breed} onClick={() => setBreed(breed)}>{breed}</button>
      )}
      <h3>Total Likes: {totLikes}</h3>
      <div className='dogsns-list'>
        {dogs.length !== 0 &&
          dogs.map((url, idx) =>
            <div className='dogsns-row' key={url}>
              <img src={url} alt="Dog" width="300" />
              <LikeButton isLiked={likes[idx]} onClick={() => {
                setLikes(l => {
                  l[idx] = !l[idx];
                  return l;
                })
                setTotLikes(() => likes[idx] ? totLikes + 1 : totLikes - 1);
              }}/>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default DogSNS;
