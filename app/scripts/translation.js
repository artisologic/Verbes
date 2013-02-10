
var translationEx = {
	elems: {
		infinitive: document.getElementById('translation').querySelector('[data-infinitive]'),
		list: document.getElementById('translation').querySelector('.list')
	},
	vars: {
		randomVerb: null,
		wrongAnswers: []
	}
};

function checkTranslation(aeEvent)
{
	var target = aeEvent.target;
	if(hasClass(target, 'button'))
	{
		if(hasClass(target, 'correct-answer'))
		{
			correctTranslation();
		}
		else
		{
			addClass(target.parentNode, 'error');
			wrongTranslation();
		}
	}
}

function correctTranslation()
{
	newTranslationExercise();
}

function wrongTranslation()
{
	addClass(translationEx.elems.list, 'hide-wrong-answers');
}

function newTranslationExercise()
{
	var vars  = translationEx.vars;
	var elems = translationEx.elems;

	var languages = ['Uk', 'Fr'];
	var questionLanguageIndex = getRandomInt(0, 1);
	var answerLanguageIndex = questionLanguageIndex ? 0 : 1;

	var correctAnswerPosition = getRandomInt(0, 3);
	var answerElements = elems.list.children;
	var usedAnswers = [];

	vars.randomVerb = getRandomVerb();
	vars.wrongAnswers = [];

	usedAnswers.push(vars.randomVerb);

	// Generate 3 wrong answers
	var a1 = getRandomVerbExcludingThose(usedAnswers);
	vars.wrongAnswers.push(a1);
	usedAnswers.push(a1);

	var a2 = getRandomVerbExcludingThose(usedAnswers);
	vars.wrongAnswers.push(a2);
	usedAnswers.push(a2);

	var a3 = getRandomVerbExcludingThose(usedAnswers);
	vars.wrongAnswers.push(a3);
	usedAnswers.push(a3);

	elems.infinitive.innerText = translationEx.vars.randomVerb['infinitive' + languages[questionLanguageIndex]];
	answerElements[correctAnswerPosition].querySelector('[data-answer]').innerText = vars.randomVerb['infinitive' + languages[answerLanguageIndex]];

	removeClass(elems.list, 'hide-wrong-answers');
	removeClass(elems.list.querySelector('.error'), 'error');
	removeClass(elems.list.querySelector('.correct-answer'), 'correct-answer');
	addClass(answerElements[correctAnswerPosition].querySelector('.button'), 'correct-answer');

	var i = 0, j = 0;
	for(i=0; i<vars.wrongAnswers.length; i++)
	{
		if(i === correctAnswerPosition) { j++; }
		elems.list.children[j].querySelector('[data-answer]').innerText = vars.wrongAnswers[i]['infinitive' + languages[answerLanguageIndex]];
		j++;
	}
}
