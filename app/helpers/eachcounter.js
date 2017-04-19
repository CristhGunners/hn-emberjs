import Ember from 'ember';
const { Helper } = Ember;

export function eachcounter(params /* , hash */) {
  return parseInt(params, 0) + 1;
}

export default Helper.helper(eachcounter);
