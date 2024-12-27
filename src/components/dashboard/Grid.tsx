import Table from "react-bootstrap/Table";

const Grid = () => {
  const columns = [
    "#",
    "First Name",
    "Last Name",
    "Username",
    "Email",
    "Phone",
    "City",
  ];

  // Generate 100 rows of mock data
  const rows = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    firstName: `FirstName${index + 1}`,
    lastName: `LastName${index + 1}`,
    username: `@user${index + 1}`,
    email: `user${index + 1}@example.com`,
    phone: `123-456-789${index % 10}`,
    city: `City${index + 1}`,
  }));

  return (
    <Table striped bordered hover>
      <thead className="grid-header">
        <tr>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.username}</td>
            <td>{row.email}</td>
            <td>{row.phone}</td>
            <td>{row.city}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Grid;
