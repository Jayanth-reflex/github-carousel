import React, { useEffect, useState } from 'react';
import './Carousel.scss';

const GITHUB_USER = 'Jayanth-reflex';

export default function Carousel() {
  const [repos, setRepos] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos`)
      .then(res => res.json())
      .then(data => setRepos(data.slice(0, 8)));
  }, []);

  return (
    <div
      className="carousel"
      style={{
        transform: 'perspective(1000px) rotateX(70deg)',
        animationPlayState: isHovered ? 'paused' : 'running',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {repos.map((repo, i) => (
        <div className={`card c${i+1}`} key={repo.id}>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div
              className="img"
              style={{
                backgroundImage: `url(https://picsum.photos/300/180.webp?random=${i+1})`,
                backgroundSize: 'cover'
              }}
            />
            <p className="repo-name">{repo.name}</p>
          </a>
          <span className="repo-desc">{repo.description || 'No description'}</span>
        </div>
      ))}
      {repos.map((repo, i) => (
        <div className={`cardb cb${i+1}`} key={`b${repo.id}`}></div>
      ))}
    </div>
  );
}