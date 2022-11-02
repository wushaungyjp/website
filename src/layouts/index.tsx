import React from 'react';
import { Outlet } from 'react-router-dom'
export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="flex align-center justify-center">
        <h1 className="f24">路由练习</h1>
        <Outlet/>
      </div>
    );
  }
}
