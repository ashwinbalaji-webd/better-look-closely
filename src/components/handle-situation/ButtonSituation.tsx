import Refresh from '../../assets/graphics/button-situation/refresh.png';
import { useGame } from '../../context';

type Props = {
  label?: 'Try again' | 'Next level';
  color?: string;
};

const ButtonSituation = ({ label = 'Try again', color = '#fca311' }: Props) => {
  const {
    state: { situation, phase },
    setIsGaming,
    setTimer,
  } = useGame();
  const handleClick = () => {
    if (situation === 'passed' || situation === 'rejected') {
      setIsGaming('start');
      setTimer(phase * 100 + 40000);
    }
  };
  return (
    <div className="handle-situation__button-container">
      <button
        onClick={handleClick}
        className="handle-situation__button"
        style={{ backgroundColor: color }}
      >
        <img
          className="handle-situation__button-img"
          alt="refresh"
          src={Refresh}
        />
        <span className="handle-situation__button-text">{label}</span>
      </button>
    </div>
  );
};

export default ButtonSituation;
