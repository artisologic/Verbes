'use strict';

var data = data;

var utils = {

	getRandomInt: function (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	},

	getRandomVerb: function () {
		return data.verbs[utils.getRandomInt(0, data.nbVerbs - 1)];
	},

	getRandomPersonIndex: function () {
		return utils.getRandomInt(0, data.nbPersons - 1);
	},

	getRandomVerbExcludingThose: function (aaVerbs)
	{
		var v = utils.getRandomVerb();
		while (aaVerbs.indexOf(v) !== -1)
		{
			v = utils.getRandomVerbExcludingThose(aaVerbs);
		}
		return v;
	},

	hasClass: function (aoElement, asClass)
	{
		if (!aoElement) { return; }
		return aoElement.classList.contains(asClass);
	},

	addClass: function (aoElement, asClass)
	{
		if (!aoElement) { return; }
		return aoElement.classList.add(asClass);
	},

	removeClass: function (aoElement, asClass)
	{
		if (!aoElement) { return; }
		return aoElement.classList.remove(asClass);
	}

};
