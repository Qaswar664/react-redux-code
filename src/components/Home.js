import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mobile from '../assets/mobile.jpeg'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Home(props) {
  console.log('home ',props);
  return (
    <div>

      <Navbar className='bg-dark'>
        <Container>
          <Navbar.Brand className='text-white'>React Redux</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <span className='text-white bg-danger rounded-circle'>{props.data.length}</span>
            {/* <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> */}

            {/* <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="cart-wrapper">
        <Card className='m-5' style={{ width: '18rem', height: '23rem' }}>
          <Card.Img variant="top" src={mobile} className="w-50 h-50 mx-auto mt-4" />
          <Card.Body>
            <Card.Title>I-Phone</Card.Title>

            <span>
              Price: $1000.00
            </span>
            <Button onClick={()=>props.addToCartHandler({price:1000,name:'i-phone11'})}
             className='d-block mx-auto mt-3' variant="primary">Add to Cart</Button>
            <Button onClick={()=>props.removeToCartHandler()}
             className='d-block mx-auto mt-3' variant="primary">Remove to Cart</Button>

          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
export default Home