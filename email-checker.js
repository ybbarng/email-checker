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

  $('#validate').click(splitEmail());
});
