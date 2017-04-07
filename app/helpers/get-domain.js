import Ember from 'ember';

import extractDomain from 'npm:extract-domain';

export function getDomain(params/*, hash*/) {
  return extractDomain(params);
}

export default Ember.Helper.helper(getDomain);
