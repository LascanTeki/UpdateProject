import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import '../app.scss'
import DarkModeToggle from "../Components/DarkModeToggle";

interface ContentProps {
  className?: string;
}

export default function Content({ className }: ContentProps) {
  const [ContentClass, setContentClass] = useState("");
  const location = useLocation();

  // Reset class when navigating to a new page
  useEffect(() => {
    setContentClass("");
  }, [location.pathname]);

  return (
    <div className="container">
      <header className="lay-header">
        <DarkModeToggle />
      </header>
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