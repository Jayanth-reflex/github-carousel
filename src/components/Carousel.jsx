import React, { useEffect, useState, useRef } from 'react';
import './Carousel.scss';

const GITHUB_USER = 'Jayanth-reflex';

export default function Carousel() {
  const [repos, setRepos] = useState([]);
  const [isInteracting, setIsInteracting] = useState(false);
  const [rotation, setRotation] = useState({ x: 70, z: 0 });
  const animationRef = useRef();
  const lastZ = useRef(0);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos`)
      .then(res => res.json())
      .then(data => setRepos(data.slice(0, 8)));
  }, []);

  // Animate rotation when not interacting
  useEffect(() => {
    if (!isInteracting) {
      let frame;
      const animate = () => {
        setRotation(r => ({ ...r, z: r.z + 0.2 }));
        frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(frame);
    }
  }, [isInteracting]);

  // Mouse move handler
  const handleMouseMove = e => {
    setIsInteracting(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width - 0.5) * 2; // -1 to 1
    const percentY = (y / rect.height - 0.5) * 2; // -1 to 1
    setRotation({
      x: 70 + percentY * 20,
      z: percentX * 60
    });
  };

  // Mouse leave handler
  const handleMouseLeave = () => {
    setIsInteracting(false);
  };

  return (
    <div
      className="carousel"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateZ(${rotation.z}deg)`,
        animationPlayState: isInteracting ? 'paused' : 'running',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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