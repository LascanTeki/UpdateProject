import { Outlet } from "react-router";
import { useState } from "react";
import { Link } from "react-router";
import '../app.scss'

interface ContentProps {
  className?: string;
}

export default function Content({ className }: ContentProps) {

  const [ContentClass, setContentClass] = useState("");

  return (
    <div className="container">
      <div className={`content ${ContentClass}`}>
        <nav>
          <ul>
          <Link to={'/'}><li>Home</li></Link>
          <Link to={'/Projects'}><li>Projects</li></Link>
          <Link to={'/About'}><li>About me</li></Link>
          </ul>
        </nav>

        <Outlet context={{ setContentClass }} />
      </div>
      <div className="background"></div>
    </div>
  );
}
