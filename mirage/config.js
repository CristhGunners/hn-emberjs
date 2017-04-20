export default function() {
  this.namespace = '/api/v1';

  this.get('/stories');
  this.get('/stories/:id');
}
