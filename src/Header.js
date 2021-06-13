import logo from './logo192.png';

function Header() {
  return (
    <header className="page-header">
      <div className="side-menu">
        <img src={logo} className="avatar" alt="avatar"></img>
        <ul className="menu-bar">
          <li className="menu-item">
            <a className="link">Menu 1</a>
          </li>
          <li className="menu-item">
            <a className="link">Menu 2</a>
          </li>
          <li className="menu-item">
            <a className="link">Menu 3</a>
          </li>
        </ul>
      </div>
      <ul className="menu-bar">
        <li className="menu-item">
          <a className="link">Menu 1</a>
        </li>
        <li className="menu-item">
          <a className="link">Menu 2</a>
        </li>
        <li className="menu-item">
          <a className="link">Menu 3</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;