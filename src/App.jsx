import { useState } from "react";
import { NewProject } from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import { ProjectSideBar } from "./components/ProjectSideBar.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    selectedProjects: [],
  });

  function handleStateAddProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar />
      {/* <NewProject /> */}
      <NoProjectSelected />
    </main>
  );
}

export default App;
