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

  // Fill up to 8 cards, even if there are fewer repos
  const cards = Array.from({ length: 8 }, (_, i) => repos[i] || null);

  return (
    <div className="carousel">
      {cards.map((repo, i) => (
        <div className={`card c${i+1}`} key={repo ? repo.id : i}>
          <a
            href={repo ? repo.html_url : '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
            tabIndex={repo ? 0 : -1}
            aria-disabled={!repo}
            style={{ pointerEvents: repo ? 'auto' : 'none' }}
          >
            <div className="img" />
            <p>
              {repo ? repo.name : 'No Repo'}
            </p>
          </a>
          <span>{repo ? (repo.description || 'No description') : ''}</span>
        </div>
      ))}
      {cards.map((_, i) => (
        <div className={`cardb cb${i+1}`} key={`b${i}`} />
      ))}
    </div>
  );
}