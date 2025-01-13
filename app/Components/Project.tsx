
import { Link } from "react-router";

interface ProjectData {
    id: number;
    title: string;
    link: string;
  }

interface Prop {
    data: ProjectData | undefined;
  }

export default function Project(props: Prop) {

    return (
        <div>
          {props.data ? (
            <>
              <p>ID: {props.data.id}</p>
              <p>Title: {props.data.title}</p>
              <p>
                Link:{" "}
                <a href={props.data.link} target="_blank" rel="noopener noreferrer">
                  {props.data.link}
                </a>
              </p>
            </>
          ) : (
            <p>No project data available.</p>
          )}
        </div>
      );
  }