function Email(email) {
  this.setEmail(email);
}

Email.prototype.setEmail = function(email) {
  this.email = email || '';
  this.validate();
}

Email.prototype.setValid = function(valid) {
  this.valid = valid || false;
}

Email.prototype.validate = function() {
  var re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  this.valid = re.test(this.email);
}

Email.prototype.getHTML = function() {
  return '<li class="email">' +
          '<textarea class="email">' + this.email + '</textarea>' +
          '<input type="checkbox" class="valid"' + (this.valid ? ' checked' : '') + '>' +
        '</li>'
}
