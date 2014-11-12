function Email(email) {
  this.setEmail(email);
}

Email.prototype.setEmail = function(email) {
  this.email = email || '';
  this.validate();
};

Email.prototype.setValid = function(valid) {
  this.valid = valid || false;
};

Email.prototype.validate = function() {
  var re = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/;
  this.valid = re.test(this.email);
};

Email.prototype.getHTML = function() {
  return '<li class="email' + (this.valid ? ' pass' : ' unpass') + '">' +
          '<textarea class="email">' + this.email + '</textarea>' +
          '<input type="checkbox" class="valid"' + (this.valid ? ' checked' : '') + '>' +
        '</li>';
};
