'use client';

import { useEffect } from 'react';
import './skills.css';

export default function Skills() {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    addAnimation();

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller-inner');
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicateItem = item.cloneNode(true);
          duplicateItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicateItem);
        });
      });
    }
  }, []);

  return (
    <div className='container skills'>
      <h2>My Skills</h2>
      <div class='scroller' data-direction='left'>
        <ul class='tag-list scroller-inner'>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>UI/UX</li>
          <li>SQL</li>
          <li>React</li>
          <li>NextJS</li>
          <li>MongoDB</li>
          <li>NodeJs</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>Firebase</li>
          <li>Postgresql</li>
          <li>VSCode</li>
          <li>GIT</li>
        </ul>
      </div>
    </div>
  );
}
