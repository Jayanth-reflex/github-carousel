import React from 'react';
import './Carousel.scss';

const cards = Array.from({ length: 8 }, (_, i) => ({
  index: i + 1,
  title: `Image ${8 - i}`,
  desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac sapien leo. Proin rutrum magna eu aliquam vulputate. Nullam suscipit.'
}));

export default function Carousel() {
  return (
    <div className="carousel">
      {cards.map(card => (
        <div className={`card c${card.index}`} key={card.index}>
          <div
            className="img"
            style={{
              backgroundImage: `url(https://picsum.photos/300/300.webp?random=${card.index})`,
              backgroundSize: '190px 190px'
            }}
          />
          <p>{card.title}</p>
          <span>{card.desc}</span>
        </div>
      ))}
      {cards.map(card => (
        <div className={`cardb cb${card.index}`} key={`b${card.index}`}></div>
      ))}
    </div>
  );
}