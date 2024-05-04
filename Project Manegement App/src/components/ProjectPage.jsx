import { useRef, useState } from "react";

const ProjectPage = ({
  projectsList,
  selectedProjectId,
  index,
  setProjectsList,
  setSelectedProjectId
}) => {
  const taskRef = useRef();
  const project = projectsList.find((project) => project.id === selectedProjectId);
  const selectedProjectIndex = projectsList.findIndex(
    (project) => project.id === selectedProjectId
  );
  const tasksList = project.tasks;

  function handleAddTask() {
    const newTask = taskRef.current.value;
    if (newTask.trim() != "") {
      setProjectsList((prevProjectsList) => {
        const newProjectsList = [...prevProjectsList];
        newProjectsList[selectedProjectIndex].tasks.push(newTask);
        taskRef.current.value = "";
        return newProjectsList;
      });
    }
  }

  function handleDeleteTask(deletedTaskIndex) {
    setProjectsList((prevProjectsList) => {
      let updatedProjectsList = [...prevProjectsList];
      updatedProjectsList[selectedProjectIndex].tasks = updatedProjectsList[
        selectedProjectIndex
      ].tasks.filter((task, index) => index !== deletedTaskIndex);
      return updatedProjectsList;
    });
  }

  function handleDeleteProject() {
    setProjectsList((prevProjectsLIst) => {
      let updatedProjectsList = [...prevProjectsLIst];
      updatedProjectsList = updatedProjectsList.filter(
        (project, index) => project.id !== selectedProjectId
      );
      setSelectedProjectId(undefined);
      return updatedProjectsList;
    });
  }

  return (
    <>
      {selectedProjectIndex === index && (
        <section className="pt-32 px-36">
          <header>
            <div className="flex w-full justify-between items-center">
              <h1 className="text-4xl font-bold text-stone-800">
                {project.title}
              </h1>
              <button
                className="text-lg hover:text-red-600"
                onClick={handleDeleteProject}
              >
                Delete
              </button>
            </div>
            <p className="text-xl font-semibold text-stone-500 my-1">
              {project.dueDate}
            </p>
            <p className="text-lg my-2">{project.description}</p>
            <div className="w-full h-[2px] bg-slate-300 my-6"></div>
          </header>
          <section className="">
            <h3 className="mt-3 mb-1 text-2xl font-bold text-stone-700">
              Tasks
            </h3>
            <p className="my-2">
              <input
                className="w-80 border border-solid border-slate-300 outline-gray-800 rounded-md py-1 px-2"
                ref={taskRef}
                id="task"
                type="text"
              />
              <button
                className="ml-2 hover:bg-gray-800 hover:text-white transition-all text-stone-700 px-4 py-2 rounded-lg"
                onClick={handleAddTask}
              >
                Add Task
              </button>
            </p>
            {project.tasks[0] && 
            <ul className="mt-8 max-h-[26rem] max-w-4xl rounded-xl max-h-32 overflow-y-auto border border-solid border-gray-300 px-4">
              {tasksList &&
                tasksList.map((task, index) => (
                  <li
                    className=" flex w-full justify-between items-center py-4"
                    key={index}
                  >
                    <p className="font-semibold">{task}</p>
                    <button
                      className="font-semibold hover:text-red-600 py-1 px-2"
                      onClick={() => handleDeleteTask(index)}
                    >
                      Clear
                    </button>
                  </li>
                ))}
            </ul>}
          </section>
        </section>
      )}
    </>
  );
};

export default ProjectPage;
