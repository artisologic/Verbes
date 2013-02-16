'use strict';

var data = data;
var utils = utils;

var translationEx = {
	elems: {
		infinitive: document.getElementById('translation').querySelector('[data-infinitive]'),
		list: document.getElementById('translation').querySelector('.list')
	},

	vars: {
		randomVerb: null,
		wrongAnswers: []
	},

	initialize: function () {
		var vars  = translationEx.vars;
		var elems = translationEx.elems;

		var languages = ['Uk', 'Fr'];
		var questionLanguageIndex = utils.getRandomInt(0, 1);
		var answerLanguageIndex = questionLanguageIndex ? 0 : 1;

		var correctAnswerPosition = utils.getRandomInt(0, 3);
		var answerElements = elems.list.children;
		var usedAnswers = [];

		vars.randomVerb = utils.getRandomVerb();
		vars.wrongAnswers = [];

		usedAnswers.push(vars.randomVerb);

		// Generate 3 wrong answers
		var a1 = utils.getRandomVerbExcludingThose(usedAnswers);
		vars.wrongAnswers.push(a1);
		usedAnswers.push(a1);

		var a2 = utils.getRandomVerbExcludingThose(usedAnswers);
		vars.wrongAnswers.push(a2);
		usedAnswers.push(a2);

		var a3 = utils.getRandomVerbExcludingThose(usedAnswers);
		vars.wrongAnswers.push(a3);
		usedAnswers.push(a3);

		elems.infinitive.innerText = translationEx.vars.randomVerb['infinitive' + languages[questionLanguageIndex]];
		answerElements[correctAnswerPosition].querySelector('[data-answer]').innerText = vars.randomVerb['infinitive' + languages[answerLanguageIndex]];

		utils.removeClass(elems.list, 'hide-wrong-answers');
		utils.removeClass(elems.list.querySelector('.error'), 'error');
		utils.removeClass(elems.list.querySelector('.correct-answer'), 'correct-answer');
		utils.addClass(answerElements[correctAnswerPosition].querySelector('.button'), 'correct-answer');

		var i = 0, j = 0;
		for (i = 0; i < vars.wrongAnswers.length; i++)
		{
			if (i === correctAnswerPosition) { j++; }
			elems.list.children[j].querySelector('[data-answer]').innerText = vars.wrongAnswers[i]['infinitive' + languages[answerLanguageIndex]];
			j++;
		}
	},

	correct: function () {
		translationEx.initialize();
	},

	wrong: function () {
		utils.addClass(translationEx.elems.list, 'hide-wrong-answers');
	},

	check: function (aeEvent)
	{
		var target = aeEvent.target;
		if (utils.hasClass(target, 'button'))
		{
			if (utils.hasClass(target, 'correct-answer'))
			{
				translationEx.correct();
			}
			else
			{
				utils.addClass(target.parentNode, 'error');
				translationEx.wrong();
			}
		}
	}
};
