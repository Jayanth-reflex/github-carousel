import React, { useEffect, useState } from 'react';
import './Carousel.scss';

const GITHUB_USER = 'Jayanth-reflex';

export default function Carousel() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos`)
      .then(res => res.json())
      .then(data => setRepos(data.slice(0, 8)));
  }, []);

  return (
    <div className="carousel">
      {repos.map((repo, i) => (
        <div className={`card c${i+1}`} key={repo.id}>
          <div
            className="img"
            style={{
              backgroundImage: `url(https://picsum.photos/300/300.webp?random=${i+1})`,
              backgroundSize: '190px 190px'
            }}
          />
          <p>{repo.name}</p>
          <span>{repo.description || 'No description'}</span>
        </div>
      ))}
      {repos.map((repo, i) => (
        <div className={`cardb cb${i+1}`} key={`b${repo.id}`}></div>
      ))}
    </div>
  );
} 