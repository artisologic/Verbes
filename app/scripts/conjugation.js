'use strict';

var data = data;
var utils = utils;

var conjugationEx = {
	elems: {
		infinitive: document.getElementById('conjugation').querySelector('[data-infinitive]'),
		person: document.getElementById('conjugation').querySelector('[data-person]'),
		field: document.getElementById('conjugation').querySelector('input'),
		button: document.getElementById('conjugation').querySelector('.button')
	},

	vars: {
		randomVerb: null,
		randomPersonIndex: null
	},

	initialize: function () {
		var elems = conjugationEx.elems;
		var vars  = conjugationEx.vars;

		vars.randomVerb = utils.getRandomVerb();
		vars.randomPersonIndex = utils.getRandomPersonIndex();

		var firstPersonStartsWithVowel = vars.randomPersonIndex === 0 && ['a', 'e', 'é', 'è', 'i', 'o', 'u', 'y'].indexOf(vars.randomVerb.conjugations[vars.randomPersonIndex].charAt(0)) === 0;

		elems.infinitive.innerText = vars.randomVerb.infinitiveFr;
		elems.person.innerText = firstPersonStartsWithVowel ? 'j\'' : data.persons[vars.randomPersonIndex];
		elems.field.value = '';
		utils.removeClass(elems.field, 'error');
		elems.button.innerText = 'Vérifier';
		utils.addClass(elems.button, 'button-positive');
	},

	correct: function () {
		conjugationEx.initialize();
	},

	wrong: function () {
		var elems = conjugationEx.elems;
		var vars  = conjugationEx.vars;

		elems.button.innerText = 'Continuer';
		utils.removeClass(elems.button, 'button-positive');
		elems.field.value = vars.randomVerb.conjugations[vars.randomPersonIndex];
		utils.addClass(elems.field, 'error');
	},

	check: function () {
		var vars =  conjugationEx.vars;

		if (conjugationEx.elems.field.value === vars.randomVerb.conjugations[vars.randomPersonIndex])
		{
			conjugationEx.correct();
		}
		else
		{
			conjugationEx.wrong();
		}
	}
};
