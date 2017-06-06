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
        <img src={this.props.item.thumbnail} />
        <p>{this.props.item.name}</p>
        <p>{this.props.item.priceData.formattedValue}</p>
      </div>
    )
  }
}
