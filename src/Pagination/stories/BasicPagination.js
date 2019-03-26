import React, { Component } from 'react';
import Pagination from '../Pagination';

class BasicPagination extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: 1,
      total: 10
    };
  }

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { value, total } = this.state;

    return (
      <div>
        <Pagination
          value={value}
          total={total}
          maxItems={7}
          onChange={this.handleChange}
        />
        <Pagination
          value={value}
          total={total}
          maxItems={5}
          showDoubleArrows
          onChange={this.handleChange}
        />
        <Pagination
          value={value}
          total={total}
          maxItems={3}
          showDoubleArrows
          onChange={this.handleChange}
        />
        <Pagination
          value={value}
          total={total}
          maxItems={1}
          showDoubleArrows
          onChange={this.handleChange}
        />
        <Pagination
          value={value}
          total={total}
          maxItems={1}
          onChange={this.handleChange}
        />
        <Pagination
          value={value}
          total={total}
          maxItems={1}
          showNumbers={false}
          onChange={this.handleChange}
        />
        <Pagination
          value={value}
          total={total}
          maxItems={1}
          showArrows={false}
          onChange={this.handleChange}
        />
        <span style={{ marginLeft: '20px' }}>Current page: {value}</span>
      </div>
    );
  }
}

export default BasicPagination;
