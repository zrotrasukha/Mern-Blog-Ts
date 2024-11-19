import { Link } from "react-router-dom";
type Props = {
  className?: string, 
}
export const Header: React.FC<Props> = ({className}) => {
  
  return (
    <div>
      <header className={ `flex mt-2 justify-between ${className}` }>
        <Link to="" className="logo font-bold">
          MyBlog
        </Link>
        <nav className="flex gap-3">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
    </div>
  );
};
