import React, { useEffect, useState } from 'react';
import LikeButton from './LikeButton';

const DogRow = (props) => {
  const { url, isLiked, handleClick } = props;

  return (
    <div className='dogsns-row' key={url}>
      <img src={url} alt="Dog" width="300" />
      <LikeButton
        isLiked={isLiked}
        onClick={handleClick}
      />
    </div>
  );
}

const DogSNS = () => {
  const breeds = ['shiba', 'terrier', 'retriever', 'husky', 'chihuahua', 'beagle'];
  const [dogs, setDogs] = useState([]);
  const [likes, setLikes] = useState([]);
  const [breed, setBreed] = useState(breeds[0]);

  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/5`)
      .then(res => res.json())
      .then(result => {
        setLikes(result.message.map(_ => false));
        setDogs(result.message);
      })
  }, [breed])

  return (
    <div>
      {breeds.map(breed =>
        <button key={breed} onClick={() => setBreed(breed)}>{breed}</button>
      )}

      <h1>Number of likes: {likes.filter(like => like).length}</h1>
      <div className='dogsns-list'>
        {dogs.length !== 0 &&
          dogs.map((url, index) =>
            <DogRow
              url={url}
              isLiked={likes[index]}
              handleClick={() =>
                setLikes(likes.map((like, likeIndex) => index === likeIndex ? !like : like))
              }
            />

          )
        }
      </div>
    </div>
  )
}

export default DogSNS;
