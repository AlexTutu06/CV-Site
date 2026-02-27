function NavItem({ items }) {
  if (!items) return null;
  return (
    <a href={items.tinta} className="nav-link">
      <span className="nav-indicator"></span>
      <span className="nav-text">{items.eticheta}</span>
    </a>
  );
}
export default NavItem;