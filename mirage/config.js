export default function() {
  this.namespace = '/api/v1';

  this.post('/stories');
  this.get('/stories');
  this.get('/stories/:id');
  this.patch('/stories/:id');

  this.post('/comments');
  this.get('/comments/:id');

  this.post('/users');
  this.passthrough('https://hacker-news.firebaseio.com/v0/**');
}
