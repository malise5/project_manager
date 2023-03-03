export default function Header({ changeTheme, theme }) {
  return (
    <div className="header">
      <h1>
        <span className="logo">{"//"}</span>
        Projects Showcase
      </h1>
      <nav>
        <button onClick={changeTheme}>
          {theme ? "LightMode" : "DarkMode"}
        </button>
      </nav>
    </div>
  );
}
