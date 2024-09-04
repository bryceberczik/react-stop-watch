import './background.css'
import Stopwatch from '../stopwatch/stopWatch'
import Controls from '../controls/controls'
export default function Background() {

    return(
        <div className='div-container'>
        <h1>React Stop Watch</h1>

        <div className="background-container">
            <Stopwatch />
            <div className="controls">

            <Controls />

            </div>
        </div>
        </div>
    )
}