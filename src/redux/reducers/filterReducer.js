export default function filterReducer(state = {selectedFilter: 'all'}, action) {
  switch(action.type) {
    case "SET_FILTER":
      return {selectedFilter: action.newFilter};

    default:
      return state;
  }
}
