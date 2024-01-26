import { useAppContext } from "../context/AppContext";

function Header() {
  const { title } = useAppContext();

  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
