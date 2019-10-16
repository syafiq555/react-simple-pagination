import React, { useEffect } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import './App.css';
import NavBar from './components/Navbar/Navbar';
import Pagination from './components/Pagination/Pagination';
import { useStateValue } from './Store/Context';
import { SET_DATA, SET_CURRENT_DATA } from './constants';
import Table from './components/Table/Table';
import User from './api/users';

const user = new User();

const App = () => {
  const { 1: dispatch } = useStateValue();

  useEffect(() => {
    const fetchData = async () => {
      const response = await user.get();
      const json = await response.json();
      if (json.error) alert('Error in fetching data');
      else {
        dispatch({
          type: SET_DATA,
          payload: json.results,
        });
        dispatch({
          type: SET_CURRENT_DATA,
          payload: json.results.slice(0, 15),
        });
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      <Container className="pt-5">
        <Row>
          <Col>
            <h3>List of People</h3>
          </Col>
        </Row>
        <Pagination />
        <Table />
      </Container>
    </>
  );
};

export default App;
