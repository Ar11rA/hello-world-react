import React from 'react'
export default class NewApp extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.display = this.display.bind(this)
  // }
  display(msg) {
    alert(msg)
  }
  render() {
    let arr = ['Hi', 'Hi', 'Hi']
    let arrNew = arr.map((item, index) => {
      return (<div key={index} onClick={this.display.bind(this, 'Yo')}>
        Z:{item + ' 5'}
      </div>)
    })
    return (<div>{arrNew}</div>)
  }
}