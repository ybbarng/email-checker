$(function() {
  function validbox_click() {
    console.log($(this).prop('checked'));
    if ($(this).prop('checked')) {
      $(this).parent().removeClass('unpass');
      $(this).parent().addClass('pass');
    }
    else {
      $(this).parent().removeClass('pass');
      $(this).parent().addClass('unpass');
    }
  }

  function splitEmail() {
    var emails = [];
    $emailList = $('#email-list');
    return function() {
      emails = [];
      $('textarea.email').each(function() {
        var value = $(this).val();
        rows = value.split('\n');
        for (var i = 0; i < rows.length; i++) {
          var row = rows[i].trim();
          if (row !== '') {
            emails.push(new Email(row));
          }
        }
      });
      $emailList.empty();
      var documentFragment = $(document.createDocumentFragment());
      for (var i = 0; i < emails.length; i++) {
        documentFragment.append(emails[i].getHTML());
      }
      $emailList.append(documentFragment);
      $('textarea').elastic();
      $('input.valid').change(validbox_click);
    };
  }

  function getEmails() {
    var emails = '';
    $('#email-list li.pass').each(function() {
      emails += $(this).find('textarea.email').val() + '\n';
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

  $('textarea').elastic();
});
