import Image from 'next/image';

/* eslint-disable @next/next/no-img-element */
export default function PortfolioCard({ item }) {
  return (
    <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
      <div className='portfolio-wrapper'>
        <div className='image-container'>
          <Image
            src={item.img.src}
            alt={item.title}
            // width={400}
            // height={250}
            fill
            className='portfolio-image'
          />
        </div>

        {/* <img
          src={item.img.src}
          alt={item.title}
          className='img-fluid'
          height={300}
        /> */}
        <div className='portfolio-info'>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <div className='portfolio-links'>
            {/* <a href='#' className='details'>
              <i className='bx bx-plus'></i>
              details
            </a> */}
            <a
              href={item.demoLink}
              rel='noopener noreferrer'
              target='_blank'
              className='link'
            >
              <i className='bx bx-link'></i>
              demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
