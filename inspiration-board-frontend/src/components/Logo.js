import "./Logo.css";
import logo from "./logo.png";

console.log(logo);

const Logo = () => {
  return <img className="logo" src={logo} alt="logo" />;
};

export default Logo;
