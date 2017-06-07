import React, { Component } from 'react';

export default class ItemInfo extends Component {

  render() {
    const { item } = this.props

    return (
      <div>
        <a href={item.url}><img src={item.thumbnail} style={{height: 250, width: 120}}/></a>
        <b><p style={{fontSize: 16}}>{item.designerData.name}</p></b>
        <p style={{fontSize: 12}}>{item.name}</p>
        <p style={{fontSize: 12}}>{item.priceData.formattedValue}</p>
      </div>
    )
  }
}
