import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import { useStateValue } from '../../Store/Context';

const TableComponent = () => {
  const [{ currData }] = useStateValue();

  return (
    <Row>
      <Col>
        <Table striped bordered hover responsive>
          <thead>
            <tr className="text-center">
              <td>Full name</td>
              <td>Gender</td>
              <td>Age</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {!currData.length ? (
              <tr>
                <td colSpan="4" className="text-center">Fetching User...</td>
              </tr>
            ) : currData.map(({
              gender, dob: { age }, email, name: { first, last }, login: { uuid },
            }) => (
              <tr key={uuid} className="text-center">
                <td>
                  {first}
                  {' '}
                  {last}
                </td>
                <td>{gender}</td>
                <td>{age}</td>
                <td>{email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default TableComponent;
