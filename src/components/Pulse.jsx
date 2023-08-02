import pulse from '../images/pulse-multiple.svg';

const Pulse = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '30vh',
        alignItems: 'center',
      }}
    >
      <img width={80} height={80} src={pulse} alt='' />
    </div>
  );
};

export default Pulse;
