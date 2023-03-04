import Header from "./Header";
import { useState } from "react";
import ProjectsContainer from "./ProjectsContainer";

export default function App() {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className={theme ? "App" : "App light"}>
      <Header theme={theme} changeTheme={changeTheme} />
      <ProjectsContainer />
    </div>
  );
}
