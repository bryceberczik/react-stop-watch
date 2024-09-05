import './archivedTimes.css';

export default function ArchivedTimes({ times }) {
    return (
        <div className="container">
            <div className="archived-times">
                {times.map((time, index) => (
                    <div key={index} className="archived-time">
                        {new Date(time).toISOString().substring(11, 19)}
                    </div>
                ))}
            </div>
        </div>
    );
}