export default function() {
  this.namespace = '/api';

  this.get('/stories', function() {
    return {
      data: [{
        type: 'stories',
        id: 1,
        attributes: {
          title: 'Open sourcing Sonnet – a new library for constructing neural networks',
          url : 'https://deepmind.com/blog/open-sourcing-sonnet/',
          owner: 'lopespm'
        }
      }, {
        type: 'stories',
        id: 2,
        attributes: {
          title: 'Lego Macintosh Classic with e‑paper display',
          url : 'https://jann.is/lego-macintosh-classic/',
          owner: 'andrevoget'
        }
      }, {
        type: 'stories',
        id: 3,
        attributes: {
          title: 'New York City bans employers from asking potential workers about past salary',
          url : 'http://nytlive.nytimes.com/womenintheworld/2017/04/07/new-york-city-bans-employers-from-asking-potential-workers-about-their-past-salary/',
          owner: 'mendelk'
        }
      }, {
        type: 'stories',
        id: 4,
        attributes: {
          title: 'In love with the BBC micro:bit',
          url : 'https://markshroyer.com/2017/03/microbit/',
          owner: 'mendelk'
        }
      }]
    };
  });
}
