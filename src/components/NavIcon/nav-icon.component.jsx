import './nav-icon.css';

const NavIcon = (props) => {
  return (
    <div className="nav-icon">
      {props.children}
      <span style={{ fontSize: 20 }}>{props.label}</span>
    </div>
  );
};

export default NavIcon;