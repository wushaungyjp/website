import React from 'react';
// 12312312123
export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleData: { color: 'red', 'fontSize': "16px" },
      isHead: true,
      className: 'title'
    };
  }

  render() {
    return (
      <div
        className={`${this.state.className} ${this.state.isHead ? 'head' : ''}`}
        style={this.state.styleData}
      >
        第一步
      </div>
    );
  }
}
