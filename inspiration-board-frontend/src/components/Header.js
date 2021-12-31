import "./Header.css";
import logo from "./logo.png";

console.log(logo);

const Header = () => {
  return <img className="logo" src={logo} alt="logo" />;
};

export default Header;
