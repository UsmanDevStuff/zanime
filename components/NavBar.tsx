const NavBar = () => {
  return (
    <div className="container p-3">
      <nav className="flex flex-row justify-evenly">
        <a className="text-lg font-bold" href="/">
          ZAnime
        </a>
        <a href="/home">Home</a>
      </nav>
    </div>
  );
};

export default NavBar;
