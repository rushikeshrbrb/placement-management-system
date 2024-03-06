import React from 'react';
import { Card, Alert, Container, Button } from 'react-bootstrap'; // Assuming you're using Bootstrap for styling

export default function AptitudeModule() {
  return (
    <Container>
    <center>
      <h3>Aptitude Test</h3><hr />
    </center>
      <div>
        <Card className="text-left">
          <Card.Header className="bg-info text-white"><b>#Question :</b> </Card.Header>
          <Card.Body>
            <Card.Title>
             
            </Card.Title>
            <Card.Text className='align-left'>
              

            </Card.Text>

          </Card.Body>
          <Card.Footer className="text-dark text-white">
          
          
         
                <Button variant="warning" style={{ marginRight: '10px' }}><b>← Previous Question</b></Button>
             
                <Button variant="info" ><b>Next Question  →</b></Button>
            
          </Card.Footer>
        </Card>
        <br />
      </div>

  </Container>
  );
}
