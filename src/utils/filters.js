import Vue from 'vue';

Vue.filter('toInteger', function(value) {
	if (!value) return '';
	return parseInt(value);
});

Vue.filter('toSemiInteger', function(value) {
	if (!value) return '';
	if (Number.isInteger(Number(value))) return parseInt(value);
	return Number(value).toFixed(1);
});
