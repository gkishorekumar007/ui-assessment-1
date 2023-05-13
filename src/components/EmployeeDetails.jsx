import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  const params = useParams();
  const employeeDetails = [
    {
      id: 1,
      firstName: "kishore",
      lastName: "kumar",
      age: 28,
      dateOfBirth: "01 / 01 / 1995",
      emailId: "gkk@yopmail.com",
      department: "Engineering",
      address: "Vizag, AP",
    },
    {
      id: 2,
      firstName: "vijay",
      lastName: "kumar",
      age: 29,
      dateOfBirth: "02 / 02 / 1994",
      emailId: "vk@yopmail.com",
      department: "Engineering",
      address: "Hyderbad, Telangana",
    },
    {
      id: 3,
      firstName: "glenn",
      lastName: "nevils",
      age: 30,
      dateOfBirth: "03 / 03 / 1993",
      emailId: "gn@yopmail.com",
      department: "Engineering",
      address: "Kansas City, USA",
    },
  ];
  console.log(params);
  return (
    <>
      {Object.entries(
        ...employeeDetails.filter(
          (employee) => employee.id === Number(params.employeeId)
        )
      ).map(([key, value]) => (
        <div key={key}>
          <strong>{key}: </strong> {value}
        </div>
      ))}
    </>
  );
};

export default EmployeeDetails;
