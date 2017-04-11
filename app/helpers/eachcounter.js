import Ember from 'ember';

export function eachcounter(params/*, hash*/) {
  return parseInt(params) + 1;
}

export default Ember.Helper.helper(eachcounter);
