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
    const { item } = this.props

    return (
      <div>
        <a href={item.url}><img src={item.thumbnail} /></a>
        <p>{item.designerData.name}</p>
        <p>{item.name}</p>
        <p>{item.priceData.formattedValue}</p>
      </div>
    )
  }
}
