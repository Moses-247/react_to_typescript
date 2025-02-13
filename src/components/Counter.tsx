// Importing React library and Component class
import React, { Component } from 'react';

// Defining the type of state the component will use
interface CounterState {
  count: number;
}

// Counter class component with state type annotation
class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  // Increment method to update state
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method to display the component
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Exporting the Counter component
export default Counter;
