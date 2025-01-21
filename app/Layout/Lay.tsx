import { Outlet } from "react-router";
import { useState } from "react";
import { Link } from "react-router";
import '../app.scss'

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {

  const [headerClass, setHeaderClass] = useState("");

  return (
    <div className="container">
      <div className={`header ${headerClass}`}>
        <nav>
          <ul>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/Projects'}><li>Projects</li></Link>
          <Link to={'/About'}><li>About me</li></Link>
          </ul>
        </nav>

        <Outlet context={{ setHeaderClass }} />
      </div>
      <div className="background"></div>
    </div>
  );
}
