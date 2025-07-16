import React, { useState } from "react";

const Favorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const onToggle = () => {
    setIsFavorite((current) => !current);
  };
  return (
    <button
      type="button"
      className={`sprite__smilefresh--after button__favorite-item${isFavorite ? " js-active" : ""}`}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? "관심상품 해제하기" : "관심상품 등록하기"}
      onClick={onToggle}
    ></button>
  );
};

export default Favorite;
