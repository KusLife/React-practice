import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../../context";
import MyBtn from "../Buttons/MyBtn";

export default function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContex)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      <MyBtn onClick={logout} >Quit</MyBtn>
      <div className="navbar__links">
        <Link to={'/posts'}>Posts</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
