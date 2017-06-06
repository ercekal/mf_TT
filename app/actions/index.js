import axios from 'axios'

export const FETCH_ITEMS = 'FETCH_ITEMS';

export function fetchItems() {
  return dispatch => {
    axios.get("http://www.matchesfashion.com/nms/ajax/p/1095470,1095483,1095472,1095467")
    .then((res) => {
      dispatch({
        type: FETCH_ITEMS,
        payload: res.data
      })
    })
  }
}
