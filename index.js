const findIndex = require('lodash/findIndex');

var panigationSdk = function () {
	return findIndex([99,99,99,8,9,88,8,6], item => item === 6);
};

module.exports = panigationSdk;