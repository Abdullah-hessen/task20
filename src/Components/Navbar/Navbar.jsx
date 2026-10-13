import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src="../../../public/logo.png" alt="logo" />
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">pages</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40px"
        height="40px"
        viewBox="0 0 16 16"
      >
        <path d="M0 0h16v16H0z" fill="none" />
        <path
          fill="currentColor"
          d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 1 1 0 1h-11a.5.5 0 0 1-.5-.5"
        />
      </svg>
    </div>
  );
}
