export default function ServiceCard({ service }) {
  return (
    <div className='col-lg-4 col-md-6 d-flex align-items-stretch mt-4'>
      <div className='icon-box'>
        <div className='icon'>
          <i className={service.icon}></i>
        </div>
        <h4>
          <a href='#'>{service.name}</a>
        </h4>
        <p>{service.description}</p>
      </div>
    </div>
  );
}
