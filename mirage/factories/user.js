import { Factory, trait } from 'ember-cli-mirage';

export default Factory.extend({
  username: 'juan',
  email: 'juan@example.com',
  password: null,
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
    'eyJzZXNzaW9uSWQiOiJ6eXgwOTgiLCJleHAiOiIxNDkzMjQ2NzIzIn0.' +
    'r0iPNCJR5LGTLr1Q_LNKlVuo_Ho2bev93EsIPFyKtJw',
  withStories: trait({
    afterCreate(user, server) {
      server.createList('story', 20, { user });
    }
  })
});
