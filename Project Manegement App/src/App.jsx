import { useState } from "react";

import NavBar from "./components/NavBar";
import AddProjectPage from "./components/AddProjectPage";
import ProjectPage from "./components/ProjectPage";
import NoProjectSelectPage from "./components/NoProjectSelectPage";

function App() {
  const [projectsList, setProjectsList] = useState([
    {
      title: "Learning React",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum magnam veritatis repudiandae nesciunt vitae accusantium? Voluptatibus ab, quae necessitatibus autem nulla aut officia? Perspiciatis impedit voluptate neque, temporibus a porro!",
      dueDate: "23-09-24",
      tasks: ["Exemplo 1", "Exemplo 2"],
      id: 1312
    },
    {
      title: "Mastering React",
      description: "Voluptatibus ab, quae necessitatibus autem nulla aut officia? Perspiciatis impedit voluptate neque, temporibus a porro!",
      dueDate: "2-19-28",
      tasks: ["  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rerum nisi quibusdam beatae eveniet aspernatur sit, recusandae voluptatibus? Natus optio beatae itaque asperiores laboriosam eaque neque commodi sapiente quam repudiandae! 1", "Exemplo 2"],
      id: 3123331
    },
  ]);


  const [selectedProjectId, setSelectedProjectId] = useState(undefined);
  const [isAddingProject, setIsAddingProject] = useState();

  function handleProjectClick(command) {
    setIsAddingProject(command === "open" ? true : false);
  }
  console.log(projectsList)

  return (
    <div className="flex bg-zinc-950 w-full h-screen">
      <NavBar
        onProjectClick={handleProjectClick}
        projectsList={projectsList}
        setSelectedProjectId={setSelectedProjectId}
        selectedProjectId={selectedProjectId}
        setIsAddingProject={setIsAddingProject}
      />
      <main className="w-full bg-white mt-14 rounded-tl-2xl">
        {isAddingProject && (
          <AddProjectPage
            onProjectClick={handleProjectClick}
            onAddProject={setProjectsList}
            setSelectedProjectId={setSelectedProjectId}
          />
        )}
        {!isAddingProject &&
          selectedProjectId != undefined &&
          projectsList.map((project, index) => (
            <ProjectPage
              key={index}
              projectsList={projectsList}
              setSelectedProjectId={setSelectedProjectId}
              selectedProjectId={selectedProjectId}
              setProjectsList={setProjectsList}
              index={index}
            />
          ))}
        {(!isAddingProject && selectedProjectId === undefined) &&
          <NoProjectSelectPage 
            setIsAddingProject={setIsAddingProject}
          />
        }
      </main>
    </div>
  );
}

export default App;
