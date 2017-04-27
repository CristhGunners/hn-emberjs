import Ember from 'ember';
import fetch from 'fetch';
import BaseAuthenticator from 'ember-simple-auth/authenticators/base';

import ENV from '../config/environment';

const {
  RSVP,
  run
} = Ember;

const JSON_CONTENT_TYPE = 'application/json';
const LOGIN_ENDPOINT = `${ENV.API_HOST}/${ENV.API_NAMESPACE}/users/login`;
const LOGOUT_ENDPOINT = `${ENV.API_HOST}/${ENV.API_NAMESPACE}/users/logout`;

export default BaseAuthenticator.extend({
  serverTokenEndpoint: LOGIN_ENDPOINT,
  serverInvalidateEndpoint: LOGOUT_ENDPOINT,
  identificationAttribute: 'username',

  restore(data) {
    return RSVP.Promise.resolve(data);
  },

  authenticate(identification, password) {
    return new RSVP.Promise((resolve, reject) => {
      const identificationAttribute = this.get('identificationAttribute');

      const data = { attributes: { password } };
      data.attributes[identificationAttribute] = identification;

      this.makeRequest({ data })
        .then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              run(null, resolve, json.data.attributes);
            });
          } else {
            response.json().then((json) => {
              run(null, reject, json);
            });
          }
        })
        .catch((error) => {
          error.json().then((json) => run(null, reject, json));
        });
    });
  },

  invalidate() {
    return this.makeRequest({}, { url: this.get('serverInvalidateEndpoint') });
  },

  makeRequest(data, options = {}) {
    const url = options.url || this.get('serverTokenEndpoint');
    const requestOptions = {};
    const body = JSON.stringify(data);
    Object.assign(requestOptions, {
      body,
      method: 'POST',
      headers: {
        accept: JSON_CONTENT_TYPE,
        'content-type': JSON_CONTENT_TYPE
      }
    });
    Object.assign(requestOptions, options || {});

    return fetch(url, requestOptions);
  }
});
