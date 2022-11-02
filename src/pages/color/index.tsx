import React from 'react';
import './index.scss';
export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        {
          prefix: 'color-primary-',
          arr: [0, 1, 2, 3, 4]
        },
        {
          prefix: 'color-secondary-1-',
          arr: [0, 1, 2, 3, 4]
        },
        {
          prefix: 'color-secondary-2-',
          arr: [0, 1, 2, 3, 4]
        }
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="font-color">
          {
            this.state.arr.map((item, index) => {
              return item.arr.map((item1, index1) => {
                return <div key={index1} className={item.prefix + item1}>字体颜色</div>
              })
            })
          }
        </div>
      </div>
    );
  }
}
