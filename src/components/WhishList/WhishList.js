import React, { Component } from 'react';
import Input from 'react-bootstrap/lib/Input';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import $ from 'jquery';

import SCSmallEntry from '../SCSmallEntry';

class WhishList extends Component {
  static getInitialState() {
    return {
      value: '',
      results: []
    };
  }

  getResults = (q) => {
    $.get(
      `/api/whish`,
      (results) => {
        this.setState({
          results: results
        });
      }
    );
  }

  handleChange = () => {
    this.getResults(this.refs.input.getValue());
    this.setState({
      value: this.refs.input.getValue()
    });
  }

  renderResults = (results) => {
    var list = [];
    results.forEach(result => {
      list.push(<Row><SCSmallEntry result={result} /></Row>);
    });
    return list;
  }

  render() {
    var results = '';
    if (this.state && this.state.results) {
      results = this.renderResults(this.state.results);
    }
    return (
      <div className="SearchBox">
        <Row className="show-grid">
          <Col xs={3} md={3}></Col>
          <Col xs={6} md={6}>
            <Input
              type="text"
              placeholder="Enter text"
              hasFeedback
              ref="input"
              groupClassName="group-class"
              labelClassName="label-class"
              onChange={this.handleChange} />
          </Col>
        </Row>
        <Row>
          <Col xs={3} md={3}></Col>
          <Col xs={6} md={6}>
            {results}
          </Col>
        </Row>
      </div>
    );
  }

}

export default WhishList;
