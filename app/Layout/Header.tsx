import { Outlet } from "react-router";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="container">
      <div className="header">
        <nav>
          <ul>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/Projects'}><li>Projects</li></Link>
          <Link to={'/About'}><li>About me</li></Link>
          </ul>
        </nav>

        <Outlet />
      </div>
      <div className="background"></div>
    </div>
  );
}
