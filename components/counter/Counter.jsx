import { counterData } from '@/data/counterData';
import './counter.css';
import CounterItem from './CounterItem';
import { useState } from 'react';

export default function Counter({active}) {
  const [counters, setCounters] = useState(counterData);
  return (
    <div className='container counts'>
      <div className='row counters'>
        {active && counters.map((counter) => (
          <CounterItem key={counter._id} item={counter} />
        ))}
      </div>
    </div>
  );
}
