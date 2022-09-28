import { Outlet, Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h2>Hii, This is your home page</h2>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/head_tail">Head_tail</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}