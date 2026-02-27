function SocialLink({ items }) {
  if (!items || !items.iconita) return null;
  
  const Icon = items.iconita; 

  return (
    <a href={items.url} target="_blank" rel="noreferrer" className="social-icon">
      <Icon size={25} />
    </a>
  );
}
export default SocialLink;