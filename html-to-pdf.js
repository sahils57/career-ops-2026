var page = require('webpage').create();
var system = require('system');

page.paperSize = {
  format: 'Letter',
  orientation: 'portrait',
  margin: {
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  }
};

page.open('file://' + system.args[1], function(status) {
  if (status !== 'success') {
    console.log('Failed to load: ' + system.args[1]);
    phantom.exit(1);
  }
  page.render(system.args[2]);
  console.log('PDF saved to: ' + system.args[2]);
  phantom.exit();
});
