// Sidebar.jsx
import React from 'react';
import ProfileHeader from './ProfileHeader';
import NavItem from './NavItem';
import SocialLink from './SocialLink';

function Sidebar({ items }) {
  if (!items) return null;

  return (
    <aside className="left-column">
      <ProfileHeader items={items.profile} />

      <nav className="nav-menu">
        {items.navigation?.map((obj, index) => (
          <NavItem key={index} items={obj} />
        ))}
      </nav>

      <a href="./CV.pdf" target="_blank" className="cv-button">
        View Full CV
      </a>

      <div className="social-links">
        {items.socials?.map((obj, index) => (
          <SocialLink key={index} items={obj} />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;