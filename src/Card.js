// Card.js
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const facts = [
  'Palestine is located in the Middle East.',
  'Jerusalem is one of the oldest cities in the world and is located in Palestine.',
  'The Dead Sea, one of the saltiest bodies of water, is bordered by Palestine.'
];

function CardComponent({ fact }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Random Fact About Palestine</Card.Title>
        <Card.Text>{fact}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}

export default function CardContainer() {
  return (
    <div style={{ display: 'flex' }}>
      {facts.map((fact, index) => (
        <CardComponent key={index} fact={fact} />
      ))}
    </div>
  );
}

