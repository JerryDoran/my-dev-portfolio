import './section-title.css';

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className='section-title'>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}
