import { useEffect } from 'react';

export default function MovingText() {
  const letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  function randomLetter() {
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
  }

  function randomString(num: number) {
    // run a while loop to make a string that's length is 1000 chars long
    let string = '';
    while (string.length < num) {
      string += randomLetter();
    }
    return string;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      document.querySelector('.letterMess').innerHTML = randomString(10000);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className='letterMess'>{randomString(10000)}</div>;
}
