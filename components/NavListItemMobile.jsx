import './navListItemMobile.css';

export default function NavListItemMobile({ navItem, handleNavClick }) {
  return (
    <li>
      <a
        href={`#${navItem.target}`}
        className={`nav-link ${navItem.active ? 'active' : null}`}
        onClick={() => handleNavClick(navItem._id, navItem.target)}
      >
        <i className={navItem.icon}></i>
        {/* <span>{navItem.name}</span> */}
      </a>
    </li>
  );
}
