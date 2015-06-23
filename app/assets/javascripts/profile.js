'use strict';

$(document).ready(function() {
  $('#email-all').click(function() {
    var emails = this.parent().children('.attendee-names').map(function(foo) {
      return foo.data('user-email') + " <" + foo.data('user-name') + ">";
    }).join(',');

    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.log('Oops, unable to copy');
    }
  });
});