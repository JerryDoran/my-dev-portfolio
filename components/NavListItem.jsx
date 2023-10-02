import './navListItem.css';

export default function NavListItems({ navItem, handleNavClick }) {
  return (
    <li>
      <a
        href='#'
        className={`nav-link ${navItem.active ? 'active' : null}`}
        onClick={() => handleNavClick(navItem._id)}
      >
        {navItem.name}
      </a>
    </li>
  );
}
