import React from 'react';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

const LikeButton = ({ isLiked, onClick }) => {
  return (
    <button onClick={onClick(this)} style={{ background: 'none', outline: 0, border: 'none', color: 'red', cursor: 'pointer' }}>
      {isLiked ? <MdFavorite size={32} /> : <MdFavoriteBorder size={32} />}
    </button>
  )
}

export default LikeButton;
