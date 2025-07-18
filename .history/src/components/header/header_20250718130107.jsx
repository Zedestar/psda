function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="text-3xl">PSDA</div>{" "}
      <ul className="flex justify-center space-x-10 flex-center">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Announcements</li>
        <li>Contribution</li>
        <li>Register</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}

export default Header;
