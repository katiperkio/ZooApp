const Header = ({ displayAnimalsHandler }) => {
  return (
    <header>
      <h1>Zoo App</h1>
      <nav>
        <button
          className="navbtn"
          onClick={() => displayAnimalsHandler("animals")}
        >
          Animals
        </button>
        <button
          className="navbtn"
          onClick={() => displayAnimalsHandler("birds")}
        >
          Birds
        </button>
        <button className="navbtn" onClick={() => displayAnimalsHandler("all")}>
          All
        </button>
      </nav>
    </header>
  );
};

export default Header;
