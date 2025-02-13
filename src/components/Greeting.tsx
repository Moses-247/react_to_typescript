// Importing React library
import React from 'react';

// Defining the type of props the component will receive
interface GreetingProps {
  name: string;
}

// Greeting functional component with props type annotation
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Exporting the Greeting component
export default Greeting;
