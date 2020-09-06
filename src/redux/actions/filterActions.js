import { SET_FILTER } from './types'

export function setSelectedFilter(newFilter) {
  return {type: SET_FILTER, newFilter};
}
