import './counter-item.css';
import CountUp from 'react-countup';

export default function CounterItem({ item }) {
  return (
    <div className='col-lg-3 col-md-6 col-sm-12 gy-5'>
      <div className='count-box'>
        <i className={item.icon}></i>
        <CountUp end={item.end} duration={item.duration} />
        <p>{item.name}</p>
      </div>
    </div>
  );
}
