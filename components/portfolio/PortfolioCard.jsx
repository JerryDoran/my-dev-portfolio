/* eslint-disable @next/next/no-img-element */
export default function PortfolioCard({ item }) {
  console.log(item);
  return (
    <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
      <div className='portfolio-wrapper'>
        <img src={item.img.src} alt={item.title} className='img-fluid' />
        <div className='portfolio-info'>
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <div className='portfolio-links'>
            <a href='#'>
              <i className='bx bx-plus'></i>
            </a>
            <a href='#'>
              <i className='bx bx-link'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
