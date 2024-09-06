import './archivedTimes.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);

    return [
        seconds.toString().padStart(2, '0'),
        milliseconds.toString().padStart(2, '0')
    ].join(':');
}

export default function ArchivedTimes({ times }) {
    return (
        <div className="container">
            <div className="archived-times">
                {times.map((time, index) => (
                    <div key={index} className="archived-time">
                        <span className="archived-time-text">
                            <FontAwesomeIcon icon={faTrash} className='trash'/>
                            {formatTime(time)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}