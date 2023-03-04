export default function Header({ changeTheme, theme }) {
  const toggle = () => {
    changeTheme();
  };

  return (
    <div className="header">
      <h1>
        <span className="logo">{"//"}</span>
        Projects Showcase
      </h1>
      <nav>
        <button onClick={toggle}>{theme ? "LightMode" : "DarkMode"}</button>
      </nav>
    </div>
  );
}
