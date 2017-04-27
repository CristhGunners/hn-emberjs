import { Response } from 'ember-cli-mirage';

export default function() {
  this.namespace = '/api/v1';

  this.post('/stories');
  this.get('/stories');
  this.get('/stories/:id');
  this.patch('/stories/:id');

  this.post('/comments');
  this.get('/comments/:id');

  this.passthrough('https://hacker-news.firebaseio.com/v0/**');

  this.post('/users', ({ users }, request) => {
    const body = JSON.parse(request.requestBody);
    const { username, email } = body.data.attributes;
    const juan = users.find(1);
    if (username === juan.username && email === juan.email) {
      return {
        data: {
          type: 'users',
          id: 1,
          attributes: users.find(1)
        }
      };
    } else {
      return new Response(422, {}, {
        errors: [{
          detail: 'Username or email already used'
        }]
      });
    }
  });

  this.post('/users/login', ({ users }, request) => {
    const body = JSON.parse(request.requestBody);
    const { username, password } = body.data.attributes;
    if (username === 'juan' && password === 'abc123') {
      const juan = users.find(1);
      return {
        data: {
          attributes: juan
        }
      };
    } else {
      return new Response(401, {}, {
        errors: [{
          detail: 'Invalid username or password'
        }]
      });
    }
  });
}
