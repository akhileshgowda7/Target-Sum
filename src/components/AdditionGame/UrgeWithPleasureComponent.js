import { Text } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const UrgeWithPleasureComponent = (props) => (
  <CountdownCircleTimer
    isPlaying={props.stop}
    duration={props.time}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
    onComplete={() => {
      let timer = props.timer;
      timer = true;
      props.endTimer(timer);
      alert(`Alert Game over your score is - ${props.level}`);
      // let level = props.level;
      // level = 0;
      // props.setLevel(0);
      // return { shouldRepeat: true, delay: 1.5 }
    }}
  >
    {({ remainingTime }) => <Text>{remainingTime}</Text>}
  </CountdownCircleTimer>
);

export default UrgeWithPleasureComponent;
