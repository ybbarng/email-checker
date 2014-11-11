$(function() {
  function splitEmail() {
    var emails = [];
    $emailList = $('#email-list');
    return function() {
      emails = [];
      $('textarea.email').each(function() {
        var value = $(this).val();
        rows = value.split('\n');
        for (var i = 0; i < rows.length; i++) {
          emails.push(new Email(rows[i]));
        }
      });
      $emailList.empty();
      for (var i = 0; i < emails.length; i++) {
        $emailList.append(emails[i].getHTML());
      }
    };
  }

  function getEmails() {
    var emails = '';
    $('#email-list li.email').each(function() {
      if ($(this).find('input.valid').prop('checked')) {
        emails += $(this).find('textarea.email').text() + '\n';
      }
    });
    return emails;
  }

  $('#validate').click(splitEmail());

  toastr.options = {
    'showDuration': '300',
    'hideDuration': '1000',
    'timeOut': '3000'
  };

  ZeroClipboard.config({
    swfPath: 'ZeroClipboard.swf',
    trustedDomains: ['*']
  });
  var clipboardManager = new ZeroClipboard($('#copy'));
  clipboardManager.on('copy', function(event) {
    var clipboard = event.clipboardData;
    clipboard.setData('text/plain', getEmails());
    toastr.success('Copied to the clipboard');
  });
});