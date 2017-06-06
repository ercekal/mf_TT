import React, { Component } from 'react';

export default class ItemInfo extends Component {

  constructor() {
    super()
    this.state = {
      hover: true
    }
  }

  mouseOver() {
    this.setState({
      hover: false
    })
  }

  mouseOut() {
    this.setState({
      hover: true
    })
  }

  render() {
    const { item } = this.props
    const thumb = item.thumbnail
    return (
      <div>
        <div onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}>
          {this.state.hover ?
            <div>
              <img src={thumb} style={{height: 250, width: 120}}/>
            </div> :
            <div style={{height: 250, width: 120, backgroundImage: 'url(' + thumb + ')'}}>
              Hello
            </div>
        }
        </div>
        <b><p style={{fontSize: 16}}>{item.designerData.name}</p></b>
        <p style={{fontSize: 12}}>{item.name}</p>
        <p style={{fontSize: 12}}>{item.priceData.formattedValue}</p>
      </div>
    )
  }
}

// http://www.matchesfashion.com/products/Balmain-Totem-print-crew-neck-cotton-T-shirt-1082023?productSize=20285 --xl
// http://www.matchesfashion.com/products/Balmain-Totem-print-crew-neck-cotton-T-shirt-1082023?productSize=20281 --xs
