import React from 'react';
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
        404 404 404
      </div>
    );
  }
}
