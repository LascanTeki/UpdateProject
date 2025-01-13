import Project from "../Components/Project";
import list from "../Ressources/Projectdata";

export default function Projects() {

  return (
    <div>
      <h1>Projects</h1>
      {list.map((list) => (
               <Project data={list} />
                ))} 
      
      <div>{}</div>
    </div>
  );
}
