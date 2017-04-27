import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  namespace: ENV.API_NAMESPACE,
  host: ENV.API_HOST,
  authorizer: 'authorizer:blimp'
});
