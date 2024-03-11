import React, { useState, useEffect } from "react";
import { Card, Carousel, Col, Row, Stack } from "react-bootstrap";

function TheIceAge() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const Fetch = async () => {
      const r = await fetch(
        "http://www.omdbapi.com/?apikey=97c0c760&s=the+ice+Age"
      );
      const data = await r.json();
      setData(data.Search);
    };
    Fetch();
  }, []);
  return (
    <>
        <Row lg={6} md={4} sm={2} className="mb-5 d-flex text-center px-1">
        {data ? (
          data.map((TheIceAge) => (
            <Col className="m-1 p-2" key={TheIceAge.imdbID} 
            >   
          <Card>
            <Card.Body className="d-flex flex-column"
                >
                <Card.Title className="text-dark">{TheIceAge.Title}</Card.Title>
              <Card.Img
                className="img-fluid"
                src={TheIceAge.Poster}
                />
                <Card.Text className="text-dark mt-2">It's a {TheIceAge.Type} of</Card.Text>
                <Card.Footer className="text-dark">{TheIceAge.Year}</Card.Footer>
                </Card.Body>
                </Card> 
               </Col>
            ))
            ) : (
              <div
              className="spinner-border text-white mx-auto"
              role="status"
              ></div>
              )}
                  </Row>
    </>
  );
}

export default TheIceAge;
