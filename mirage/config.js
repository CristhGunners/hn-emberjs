export default function() {
  this.namespace = '/api/v1';
  this.get('/stories');
  this.get('/stories/:id');
  this.post('/stories');
  this.patch('/stories/:id');
  this.post('/comments');
  this.post('/users');
  this.passthrough('https://hacker-news.firebaseio.com/v0/**');
}
