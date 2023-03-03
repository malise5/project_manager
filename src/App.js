import Header from "./Header";
import ProjectNewForm from "./ProjectNewForm";
import ProjectList from "./ProjectList";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className={theme ? "App" : "App light"}>
      <Header theme={theme} changeTheme={changeTheme} />
      <ProjectNewForm />
      <ProjectList />
    </div>
  );
}
