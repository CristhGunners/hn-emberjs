export default function() {
  this.namespace = '/api/v1';
  this.get('/stories');
  this.get('/stories/:id');
  this.get('/stories/create');
  this.post('/stories');
  this.get('/comments/:id');
  this.passthrough('https://hacker-news.firebaseio.com/v0/**');
}
