//has uppercase
window.Parsley.addValidator('uppercase', {
  requirementType: 'number',
  validateString: function(value, requirement) {
    var uppercases = value.match(/[A-Z]/g) || [];
    return uppercases.length >= requirement;
  },
  messages: {
    en: 'Your password must contain at least (%s) uppercase letter.'
  }
});

//has lowercase
window.Parsley.addValidator('lowercase', {
  requirementType: 'number',
  validateString: function(value, requirement) {
    var lowecases = value.match(/[a-z]/g) || [];
    return lowecases.length >= requirement;
  },
  messages: {
    en: 'Your password must contain at least (%s) lowercase letter.'
  }
});

//has number
window.Parsley.addValidator('number', {
  requirementType: 'number',
  validateString: function(value, requirement) {
    var numbers = value.match(/[0-9]/g) || [];
    return numbers.length >= requirement;
  },
  messages: {
    en: 'Your password must contain at least (%s) number.'
  }
});

//has special char
window.Parsley.addValidator('special', {
  requirementType: 'number',
  validateString: function(value, requirement) {
    var specials = value.match(/[^a-zA-Z0-9]/g) || [];
    return specials.length >= requirement;
  },
  messages: {
    en: 'Your password must contain at least (%s) special characters.'
  }
});


//AGE
window.Parsley.addValidator('gte', {
  requirementType: 'number',
  validateString: function(value, requirement) {
    var gte = value;
	var lte = value;
    return gte >= requirement;
	return lte <= requirement;
  },
  messages: {
    en: 'You must be at least 10 years old.'
  }
});

window.Parsley.addValidator('lte', {
  requirementType: 'number',
  validateString: function(value, requirement) {
	var lte = value;
	return lte <= requirement;
  },
  messages: {
    en: 'The Age limit is 100.'
  }
});












