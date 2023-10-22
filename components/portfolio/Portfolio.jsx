'use client';

import { useEffect, useState } from 'react';
import SectionTitle from '../section-title/SectionTitle';
import './portfolio.css';
import { projects } from '@/data/projectData';
import { filterListData } from '@/data/projectData';
import PortfolioCard from './PortfolioCard';

export default function Portfolio({ reference }) {
  const [portfolio, setPortfolio] = useState(projects);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(filterListData);

  useEffect(() => {
    setData(portfolio);
  }, [portfolio]);

  return (
    <section id='portfolio' className='portfolio' ref={reference}>
      <div className='container'>
        <SectionTitle title='Portfolio' subtitle='My Work' />
        <div className='row'>
          <div className='col-lg-12 d-flex justify-content-center'>
            <ul id='portfolio-filters'></ul>
          </div>
        </div>
        <div className='row portfolio-container'>
          {data &&
            data.length > 0 &&
            data.map((item) => <PortfolioCard key={item.slug} item={item} />)}
        </div>
      </div>
    </section>
  );
}
