import React, { Component } from 'react';
import $ from 'jquery';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';

class SCSmallEntry extends Component {
  addToWishList = (id) => {
    $.post('/api/whish?movie_id=' + this.props.result.id);
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={8} md={8}>
            <a href={this.props.result.url} target='_BLANK'>
             {this.props.result.label} ({this.props.result.description})
            </a>
          </Col>
          <Col xs={4} md={4}>
            <Button onClick={this.addToWishList}>
              To Whish List
            </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default SCSmallEntry;
