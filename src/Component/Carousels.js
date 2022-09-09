import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';


class Carousels extends Component {
  render() {
    return (
      <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://sbooks.net/wp-content/uploads/2021/10/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      
    </Carousel>
      </div>
    )
  }
}

export default Carousels