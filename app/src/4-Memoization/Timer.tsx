import React, { useState, useRef, useMemo, useCallback } from 'react';
import TimerDisplay from './components/TimerDisplay';
import History from './components/History';
import Statistics from './components/Statistics';

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [history, setHistory] = useState([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const highlightRef = useRef<HTMLDivElement | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const memoizedHistory = useMemo(() => history, [history]);

  const handleStart = () => {
    // Start Timer
    startTimeRef.current = Date.now();
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);
    intervalRef.current = interval;
    setIsRunning(true);
    // Save Start Time to history
  };

  const handlePause = () => {
    // Stop Timer
    setIsRunning(false);
    setHistory(prevHistory => [...prevHistory, { action: 'pause', time: seconds, currentPause: startTimeRef.current }] );
    clearInterval(intervalRef.current);
    // Save Elapsed Time to history
  };

  const handleReset = () => {
    // Reset Timer
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setSeconds(0);
    // Save Reset Action to history
  };

  const handleHighlight = () => {
    // Highlight Timer Display
      highlightRef.current.style.transition = 'background-color 0.3s';
      highlightRef.current.style.backgroundColor = 'red';
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Timer</h1>

      <div ref={ highlightRef } className="highlight" style={{ border: '3px solid black', padding: '20px' }}>
        <TimerDisplay seconds={ seconds } />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '20px' }}>
        <button onClick={ handleStart } disabled={ isRunning }>Start</button>
        <button onClick={ handlePause } disabled={ !isRunning }>Pause</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleHighlight }>Highlight ✨</button>
      </div>

      <br />

      <div>
        <Statistics records={ memoizedHistory } />
        <History records={ memoizedHistory } />
      </div>
    </div>
  );
}

export default Timer;
