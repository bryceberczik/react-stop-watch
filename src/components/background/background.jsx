import './background.css';
import Stopwatch from '../stopwatch/stopWatch';
import Controls from '../controls/controls';
import ArchivedTimes from '../archived-times/archivedTimes';
export default function Background() {

    return(
        <div className='div-container'>
        <h1>React Stop Watch</h1>

        <div className="background-container">
            <Stopwatch />
            <div className="controls">

            <Controls />

            </div>

            <ArchivedTimes />

        </div>
        </div>
    )
}