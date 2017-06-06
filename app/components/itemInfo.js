import React, { Component } from 'react';

export default class ItemInfo extends Component {

  constructor() {
    super()
    this.state = {
      selected: false
    }
  }

  showDescription() {
    this.setState({
      selected: !this.state.selected
    })
  }

  render() {
    return (
      <div>
        <img src={item.thumbnail} />
        <p>{item.name}</p>
        <p>{item.priceData.formattedValue}</p>
      </div>
    )
  }
}
