import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchItems } from '../actions/index';
import ItemInfo from '../components/itemInfo'

class Items extends Component {

  componentWillMount() {
    this.props.fetchItems()
  }

  render() {
    if (!this.props.items) {
      return(
        <div>
          Loading...
        </div>
      )
    } else {
      return (
        <div>
          <table>
            <thead>
              <tr>
                {this.props.items.map((item) => {
                  return (
                    <th style={{width: 300}}>
                      <ItemInfo key={item.code} item={item} />
                    </th>
                  )
                })}
              </tr>
            </thead>
          </table>
        </div>
      )
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchItems }, dispatch)
}

function mapStateToProps(state) {
  return {
    items: state.items.items,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items);
