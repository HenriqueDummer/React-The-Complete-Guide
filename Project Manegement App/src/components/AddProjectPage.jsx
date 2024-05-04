import { useRef } from "react";

const AddProjectPage = ({ onAddProject, onProjectClick, setSelectedProjectId }) => {
  const title = useRef();
  const desc = useRef();
  const due = useRef();

  const handleClose = (event) => {
    event.preventDefault();
    onProjectClick();
  };

  const saveProject = (event) => {
    event.preventDefault();

    const newProject = {
      title: title.current.value,
      description: desc.current.value,
      dueDate: due.current.value,
      tasks: [],
      id: Math.random(),
    };

    if (title.current.value && due.current.value) {
      onAddProject((prev) => [...prev, newProject]);
      setSelectedProjectId(newProject.id)
      onProjectClick();
    }
  };
  return (
    <section className="px-28 pt-40 h-full">
      <form className=" " action="">
        <div className="flex justify-end">
          <button
            className="py-3 px-6 font-semibold rounded-lg "
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="py-3 px-6 font-semibold rounded-lg bg-zinc-950 text-white"
            onClick={saveProject}
          >
            Save
          </button>
        </div>
        <p className="py-4">
          <label
            className="text-lg font-semibold text-gray-600"
            htmlFor="title"
            required
          >
            TITLE
          </label>
          <input
            className="w-full py-2 px-4 border border-solid border-slate-300 outline-gray-800 rounded-md py-1 px-2"
            ref={title}
            id="title"
            type="text"
          />
        </p>
        <p className="py-4">
          <label className="text-lg font-semibold text-gray-600" htmlFor="desc">
            DESCRIPTION
          </label>
          <input
            className="w-full py-2 px-4 border border-solid border-slate-300 outline-gray-800 rounded-md py-1 px-2"
            ref={desc}
            id="desc"
            type="text"
          />
        </p>
        <p className="py-4">
          <label
            className="text-lg font-semibold text-gray-600"
            htmlFor="due"
            required
          >
            DUE DATE
          </label>
          <input
            className="w-full py-2 px-4 border border-solid border-slate-300 outline-gray-800 rounded-md py-1 px-2"
            ref={due}
            id="due"
            type="date"
          />
        </p>
      </form>
    </section>
  );
};

export default AddProjectPage;
