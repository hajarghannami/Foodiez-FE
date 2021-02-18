// Styling
import { ThemeButton, Logo, NavProduct } from "../styles";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <div className="navbar-nav ml-auto">
        <a className="nav-item" style={{ padding: "0.25em 1em" }}>
          <NavProduct to="/categories"> Categories </NavProduct>
          <NavProduct to="/recipes"> Recipes </NavProduct>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
