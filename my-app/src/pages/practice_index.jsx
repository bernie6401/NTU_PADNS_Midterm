import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export function RootIndex() {
  return <h1>Home</h1>;
}
