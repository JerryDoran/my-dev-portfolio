'use client';

import { useEffect, useState } from 'react';
import SectionTitle from '../section-title/SectionTitle';
import './portfolio.css';
import { projects } from '@/data/projectData';
import { filterListData } from '@/data/filterData';
import PortfolioCard from './PortfolioCard';

export default function Portfolio({ reference }) {
  const [portfolio, setPortfolio] = useState(projects);
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(filterListData);

  useEffect(() => {
    setData(portfolio);
    // setFilters(filters);
  }, [portfolio]);

  function handleFilterData(category) {
    const newFilters = filters.map((filter) => {
      filter.active = false;
      if (filter.name.toLowerCase() === category.toLowerCase()) {
        filter.active = true;
      }
      return filter;
    });

    if (category === 'all') {
      setData(portfolio);
      return;
    }

    const filteredPortfolio = portfolio.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
    setData(filteredPortfolio);

    // setFilters(newFilters);
  }

  return (
    <section id='portfolio' className='portfolio' ref={reference}>
      <div className='container'>
        <SectionTitle title='Portfolio' subtitle='My Work' />
        <div className='row'>
          <div className='col-lg-12 d-flex justify-content-center'>
            <ul id='portfolio-filters'>
              {filters?.map((filter) => (
                <li
                  onClick={() => handleFilterData(filter.name)}
                  key={filter.id}
                  className={filter.active ? 'filter-active' : null}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
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
