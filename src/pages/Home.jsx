import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/employeeList">
        <h2>Employee List</h2>
      </Link>
    </>
  );
};

export default Home;
