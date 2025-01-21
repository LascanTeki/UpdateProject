import { Link } from "react-router";

// Define the ProjectData type
interface ProjectData {
  id: number;
  logo: string;
  title: string;
  link: string;
}

interface Prop {
  data: ProjectData | undefined;
}

export default function Project(props: Prop) {
  
  return (
    <div className="data">
      {props.data ? (
        <>
          <img src={`/Ressources/${props.data.logo}`} alt={props.data.title}/>
        </>
      ) : (
        <p>No project data available.</p>
      )}
    </div>
  );
}
