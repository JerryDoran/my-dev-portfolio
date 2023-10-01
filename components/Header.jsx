import NavListItems from '@/components/NavListItems';
import './header.css';

export default function Header() {
  return (
    <header id='header'>
      <div className='container'>
        <h1>
          <a href='/'>Jerry Doran</a>
        </h1>
        <h2>
          As a skilled <span>full-stack developer</span>, I am dedicated to
          turning ideas into innovative web applications. Explore my latest
          projects and articles, showcasing my expertise in building inspiring
          business solutions.
        </h2>
        <nav id='navbar' className='navbar'>
          <ul className=''>
            <NavListItems />
          </ul>
        </nav>
      </div>
    </header>
  );
}
