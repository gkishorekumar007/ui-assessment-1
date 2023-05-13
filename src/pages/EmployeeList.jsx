import { Link } from "react-router-dom/cjs/react-router-dom.min";

const EmployeeList = () => {
  const employeeList = [
    {
      id: 1,
      firstName: "kishore",
      lastName: "kumar",
      emailId: "gkk@yopmail.com",
    },
    { id: 2, firstName: "vijay", lastName: "kumar", emailId: "vk@yopmail.com" },
    {
      id: 3,
      firstName: "glenn",
      lastName: "nevils",
      emailId: "gn@yopmail.com",
    },
  ];
  return (
    <>
      <table width={"100%"} border={"30px solid"}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email ID</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>
                <Link to={`/employeeList/employeeDetails/${employee.id}`}>
                  {employee.firstName} {employee.lastName}
                </Link>
              </td>
              <td>{employee.emailId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
