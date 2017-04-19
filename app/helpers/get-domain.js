import Ember from 'ember';
import extractDomain from 'npm:extract-domain';

const { Helper } = Ember;

export function getDomain(params /* , hash */) {
  return extractDomain(params);
}

export default Helper.helper(getDomain);
