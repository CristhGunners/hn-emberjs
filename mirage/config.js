export default function() {
  this.namespace = '/api';

  this.get('/stories', function() {
    return {
      data: [{
        type: 'stories',
        id: 1,
        attributes: {
          title: 'Open sourcing Sonnet – a new library for constructing neural',
          url: 'https://deepmind.com/blog/open-sourcing-sonnet/',
          user: 'lopespm',
          votes: 22
        }
      }, {
        type: 'stories',
        id: 2,
        attributes: {
          title: 'Lego Macintosh Classic with e‑paper display',
          url: 'https://jann.is/lego-macintosh-classic/',
          user: 'andrevoget',
          votes: 15
        }
      }, {
        type: 'stories',
        id: 3,
        attributes: {
          title: 'New York City bans employers from asking potential workers',
          url: 'http://nytlive.nytimes.com/womenintheworld/2017/04/07/new-york-city-bans-employers-from-asking-potential-workers-about-their-past-salary/',
          user: 'mendelk',
          votes: 387
        }
      }, {
        type: 'stories',
        id: 4,
        attributes: {
          title: 'In love with the BBC micro:bit',
          url: 'https://markshroyer.com/2017/03/microbit/',
          user: 'mendelk',
          votes: 144
        }
      }, {
        type: 'stories',
        id: 5,
        attributes: {
          title: 'A Guide to HTTP/2 Server Push',
          url: 'https://www.smashingmagazine.com/2017/04/guide-http2-server-push/',
          user: 'lukks',
          votes: 1
        }
      }]
    };
  });
}
