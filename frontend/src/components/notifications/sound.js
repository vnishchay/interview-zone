import useSound from 'use-sound';

const BoopButton = () => {
    const [play] = useSound('notify.mp3');
    return (
        <div style={{ height: 'auto', width: 'auto' }}>
            <button onClick={play}>Boop!</button>
        </div>
    )
};

export default BoopButton; 