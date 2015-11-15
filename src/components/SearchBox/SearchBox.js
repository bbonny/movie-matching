import React, { Component } from 'react';
import Input from 'react-bootstrap/lib/Input';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import styles from './SearchBox.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class SearchBox extends Component {

  render() {
    return (
      <div className="SearchBox">
        <Row className="show-grid">
          <Col xs={3} md={4}></Col>
          <Col xs={6} md={4}>
            <Input
              type="text"
              placeholder="Enter text"
              hasFeedback
              ref="input"
              groupClassName="group-class"
              labelClassName="label-class" />
          </Col>
          <Col xs={3} md={4}></Col>
        </Row>
      </div>
    );
  }

}

export default SearchBox;
