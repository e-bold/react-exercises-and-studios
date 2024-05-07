import data from '../data.json'
import { useState } from 'react';

function MyProjects (){
    const [index, setIndex] = useState(0);

    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else
        {
           setIndex(0);
        }
       }
     
       let projects = data.projects;
       let project = projects[index];
     
       return (
         <div>
           <button onClick={handleClick}>
             Next
           </button>
           <h2>{project.park} in {project.state}
           </h2>
           <img src={project.photoUrl} alt={project.alt} />
         </div>
       );
    
}

export default MyProjects