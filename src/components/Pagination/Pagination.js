import React from 'react';
import { Pagination, Row, Col } from 'react-bootstrap';
import { useStateValue } from '../../Store/Context';
import {
  SET_ACTIVE_PAGE, SET_CURRENT_DATA, INCREMENT_PAGE, DECREMENT_PAGE,
} from '../../constants';

const PaginationComponent = () => {
  const [{ data, activePage }, dispatch] = useStateValue();

  const length = Math.ceil(data.length / 15);

  return (
    <Row>
      <Col>
        <div className="d-flex justify-content-center">
          {data.length ? (
            <Pagination className="pt-3">
              <Pagination.First
                disabled={activePage === 1}
                onClick={() => {
                  if (activePage > 1) {
                    dispatch({
                      type: SET_ACTIVE_PAGE,
                      payload: 1,
                    });
                    dispatch({
                      type: SET_CURRENT_DATA,
                      payload: data.slice(0, 15),
                    });
                  }
                }}
              />
              <Pagination.Prev
                disabled={activePage === 1}
                onClick={() => {
                  if (activePage > 1) {
                    dispatch({
                      type: INCREMENT_PAGE,
                    });
                    dispatch({
                      type: SET_CURRENT_DATA,
                      payload: data.slice(15 * (activePage - 1), (15 * (activePage)) + 15),
                    });
                  }
                }}
              />
              {activePage !== 1 ? (
                <Pagination.Item onClick={() => {
                  dispatch({
                    type: DECREMENT_PAGE,
                  });
                  dispatch({
                    type: SET_CURRENT_DATA,
                    payload: data.slice(15 * (activePage), (15 * (activePage)) + 15),
                  });
                }}
                >
                  {activePage - 1}
                </Pagination.Item>
              ) : null}
              <Pagination.Item active>
                {activePage}
              </Pagination.Item>
              {activePage !== length ? (
                <Pagination.Item onClick={() => {
                  dispatch({
                    type: INCREMENT_PAGE,
                  });
                  dispatch({
                    type: SET_CURRENT_DATA,
                    payload: data.slice(15 * (activePage), (15 * (activePage)) + 15),
                  });
                }}
                >
                  {activePage + 1}
                </Pagination.Item>
              ) : null}
              <Pagination.Next
                disabled={activePage === length}
                onClick={() => {
                  if (activePage < length) {
                    dispatch({
                      type: INCREMENT_PAGE,
                    });

                    dispatch({
                      type: SET_CURRENT_DATA,
                      payload: data.slice(15 * (activePage), (15 * (activePage)) + 15),
                    });
                  }
                }}
              />
              <Pagination.Last
                disabled={activePage === length}
                onClick={() => {
                  if (activePage < length) {
                    dispatch({
                      type: SET_ACTIVE_PAGE,
                      payload: length,
                    });
                    dispatch({
                      type: SET_CURRENT_DATA,
                      payload: data.slice(15 * (activePage), (15 * (activePage)) + 15),
                    });
                  }
                }}
              />
            </Pagination>
          ) : null}
        </div>
      </Col>
    </Row>
  );
};

export default PaginationComponent;
