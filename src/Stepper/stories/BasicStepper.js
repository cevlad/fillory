import React from 'react';
import Box from '../../Box/Box';
import Button from '../../Button';
import Step from '../Step';
import Stepper from '../Stepper';

class BasicStepper extends React.Component {
  state = {
    value: 1,
    steps: ['Place Order', 'Pay Success', 'Shipment', 'Order Complete']
  };

  handleClick = value => {
    this.setState({ value });
  };

  render() {
    const { value, steps } = this.state;
    return (
      <div>
        <Stepper
          value={value}
          onChange={this.handleClick}
          style={{ marginBottom: '20px' }}
        >
          {steps.map(title => (
            <Step title={title} key={title} />
          ))}
        </Stepper>
        <Box
          style={{
            padding: '40px',
            textAlign: 'center',
            color: '#44566c',
            fontSize: '14px',
            marginBottom: '20px'
          }}
        >
          {steps[value - 1]}
          {value === 5 && 'Done'}
        </Box>
        <Button
          onClick={() => this.handleClick(value - 1)}
          disabled={value === 1}
          style={{ marginRight: '10px' }}
        >
          Prev
        </Button>
        <Button
          onClick={() => this.handleClick(value + 1)}
          disabled={value === 5}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default BasicStepper;
