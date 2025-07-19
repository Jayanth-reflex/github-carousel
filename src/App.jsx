import Carousel from './components/Carousel';
import './App.css';

function App() {
  return (
    <div>
      <h1 className="carousel-title">
        <span>🚀</span> Jayanth’s <span style={{color:'#F7A41D'}}>GitHub Repositories</span> <span>✨</span>
      </h1>
      <Carousel />
    </div>
  );
}

export default App;