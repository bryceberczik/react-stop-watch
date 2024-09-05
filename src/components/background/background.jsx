import './background.css';
import Stopwatch from '../stopwatch/stopWatch';
import { useState, useEffect } from 'react'; 
import Controls from '../controls/controls';
import ArchivedTimes from '../archived-times/archivedTimes';
export default function Background() {

    const  [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isActive && isPaused === false) {

            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        } else {
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handlePauseResume = () => {
        if (isActive) {
            setIsPaused(!isPaused);
        } else {
            setIsActive(true);
            setIsPaused(false);
        }
    }

    const handleReset = () => {

        setTime(0);
        setIsActive(false);
    }

    return(
        <div className='div-container'>
        <h1>React Stop Watch</h1>

        <div className="background-container">
            <Stopwatch 
            
            time={time}
            />
            <div className="controls">

            <Controls
            
            active={isActive}
            paused={isPaused}
            handlePauseResume={handlePauseResume}
            handleReset={handleReset}
            />

            </div>

            <ArchivedTimes />

        </div>
        </div>
    )
}