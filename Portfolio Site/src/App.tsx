import { useState } from 'react';
import cracked from './assets/images/mobile/Mobile-47.jpg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const [bg1, setBg1] = useState(0);
  const [bg2, setBg2] = useState(0);
  const [bg3, setBg3] = useState(0);

  // mouseover link word
  // change opacity of bg div with similar id

  function handleMouseEnter(e: React.MouseEvent<HTMLSpanElement>) {
    if (e.target.id === 'developer') {
      setBg1(1);
    } else if (e.target.id === 'photographer') {
      setBg2(1);
    } else if (e.target.id === 'pilot') {
      setBg3(1);
    }
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLSpanElement>) {
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
          My name is <span className='name'>Stephen Kalogridis</span>.
          <br />I{' '}
          <span
            id='developer'
            className='link'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            Make Websites
          </span>
          ,{' '}
          <span
            id='photographer'
            className='link'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            Take Photos
          </span>
          , and{' '}
          <span
            id='pilot'
            className='link'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            Fly Drones
          </span>
          .
        </p>
        <div
          className='background'
          id='developer-bg'
          style={{ opacity: bg1 }}
        ></div>
        <div
          className='background'
          id='photographer-bg'
          style={{ opacity: bg2 }}
        ></div>
        <div
          className='background'
          id='pilot-bg'
          style={{ opacity: bg3 }}
        ></div>
      </div>
    </>
  );
}

export default App;
