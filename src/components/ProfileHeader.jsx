function ProfileHeader({ items }) {
  if (!items) return null;
  return (
    <div className="profile-header">
      <img src={items.img} alt={items.name} className="profile-pic" />
      <div className="profile-info">
        <h1 style={{ fontSize: '2.9rem', margin: '0' }}>{items.name}</h1>
        <h2 style={{ fontSize: '1.2rem'}}>{items.role}</h2>
        <p className="description">{items.description}</p>
      </div>
    </div>
  );
}
export default ProfileHeader;