import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MovingText from './components/MovingText';
import MainLinks from './components/MainLinks';
import VideoBackground from './components/VideoBackground';

function App() {
  const [bg1, setBg1] = useState(0);
  const [bg2, setBg2] = useState(0);
  const [bg3, setBg3] = useState(1);

  function handleMouseEnter(e: React.MouseEvent<HTMLLIElement>) {
    if (e.target.id === 'developer') {
      setBg1(0.7);
    } else if (e.target.id === 'photographer') {
      setBg2(0.7);
    } else if (e.target.id === 'pilot') {
      setBg3(0.7);
    }
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLLIElement>) {
    if (e.target.id === 'developer') {
      setBg1(0);
    } else if (e.target.id === 'photographer') {
      setBg2(0);
    } else if (e.target.id === 'pilot') {
      setBg3(0);
    }
  }

  function handleClick(
    e: React.MouseEvent<HTMLSpanElement> | React.MouseEvent<HTMLLIElement>
  ) {
    alert('Coming Soon!');
  }

  return (
    <>
      <NavBar onClick={handleClick} />
      <div className='container'>
        <p className='intro'>
          Hi, my name is
          <br />
          Stephen Kalogridis. I'm a
        </p>
        <MainLinks
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />

        <div className='background' id='developer-bg' style={{ opacity: bg1 }}>
          <MovingText />
        </div>
        <div
          className='background'
          id='photographer-bg'
          style={{ opacity: bg2 }}
        ></div>
        <div className='background' id='pilot-bg' style={{ opacity: bg3 }}>
          <video playsInline autoPlay muted loop>
            <source src={'./assets/drone/Drone-Loop.mp4'} type='video/mp4' />
          </video>
        </div>
      </div>
    </>
  );
}

export default App;
