import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';


const Try = () => {

 
  // const [time, setTime] = useState(0);
  // const [isRunning, setIsRunning] = useState(false);

  // useEffect(() => {
  //   let intervalId;
  //   if (isRunning) {
  //     intervalId = setInterval(() => {
  //       setTime(prevTime => prevTime + 10);
  //     }, 10);
  //   }
  //   return () => clearInterval(intervalId);
  // }, [isRunning]);

  // const handleStartStop = () => {
  //   setIsRunning(prevIsRunning => !prevIsRunning);
  // };

  // const handleReset = () => {
  //   setIsRunning(false);
  //   setTime(0);
  // };

  // const formatTime = () => {
  //   const totalSeconds = Math.floor(time / 1000);
  //   const minutes = Math.floor(totalSeconds / 60)
  //     .toString()
  //     .padStart(2, '0');
  //   const seconds = (totalSeconds % 60).toString().padStart(2, '0');
  //   const milliseconds = Math.floor((time % 1000) / 10)
  //     .toString()
  //     .padStart(2, '0');
  //   return `${minutes}:${seconds}.${milliseconds}`;
  // };

  const [time, setTime] = useState(0);

  useEffect(() => {
    const idInterval = setInterval( () => {
      setTime((t) => t + 10)
    }, 10 )

  return () => clearInterval(idInterval);
  }, [])

  const formatTime = () => {
    const totalSeconds = Math.floor(time / 1000);
    const minutes = Math.floor(totalSeconds / 60)
      .toString()
      .padStart(2, '0');
    const seconds = (totalSeconds % 60).toString().padStart(2, '0');
    const milliseconds = Math.floor((time % 1000) / 10)
      .toString()
      .padStart(2, '0');
    // return `${minutes}:${seconds}.${milliseconds}`;

    console.log( 100 % 1000 )
    console.log( 1100 % 1000 )
    console.log( 15000 % 1000 / 10)
    console.log( 200000 % 1000 / 10)
    console.log( 230000 % 1000 / 10)

    return `${milliseconds}`;
  };

  return (
    <Container>
      Time: {time}
      <h1>{formatTime()}</h1>

      {/* <h1>{formatTime()}</h1>
      <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button> */}


    </Container>
  );
}

export default Try