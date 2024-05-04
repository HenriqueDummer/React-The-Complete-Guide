const NavBar = ({
  onProjectClick,
  projectsList,
  setSelectedProjectId,
  selectedProjectId,
  setIsAddingProject,
}) => {
  function handleSelectProjectId(index) {
    setIsAddingProject(false)
    setSelectedProjectId(index);
  }

  function handleAddProjectClick() {
    setSelectedProjectId(undefined)
    onProjectClick("open")
  }

  return (
    <nav className="w-[32rem] px-10 pt-32">
      <h2 className="text-2xl font-bold text-slate-200">YOUR PROJECTS</h2>
      <button
        className="bg-stone-800 text-lg py-2 px-4 my-8 rounded-lg text-gray-400"
        onClick={() => handleAddProjectClick()}
      >
        + Add Project
      </button>
      <ul className="">
        {projectsList.map((project, index) => (
          <li
            className={`rounded-lg text-lg transition-all duration-300 my-2 text-gray-500 font-semibold w-full ${
              project.id === selectedProjectId ? "bg-stone-900 text-gray-300" : ""
            }`}
            key={index}
          >
            <button
              className="w-full text-left px-2 py-2"
              onClick={() => handleSelectProjectId(project.id)}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
