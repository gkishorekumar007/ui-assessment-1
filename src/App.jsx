import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/employeeList" exact>
          <EmployeeList />
        </Route>
        <Route path="/employeeList/employeeDetails/:employeeId">
          <EmployeeDetails />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
