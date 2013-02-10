
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
	}
};

function checkConjugation()
{
	var vars =  conjugationEx.vars;

	if(conjugationEx.elems.field.value === vars.randomVerb.conjugations[vars.randomPersonIndex])
	{
		correctConjugation();
	}
	else
	{
		wrongConjugation();
	}
}

function correctConjugation()
{
	newConjugationExercise();
}

function wrongConjugation()
{
	var elems = conjugationEx.elems;
	var vars  = conjugationEx.vars;

	elems.button.innerText = 'Continuer';
	removeClass(elems.button, 'button-positive');
	elems.field.value = vars.randomVerb.conjugations[vars.randomPersonIndex];
	addClass(elems.field, 'error');
}

function newConjugationExercise()
{
	var elems = conjugationEx.elems;
	var vars  = conjugationEx.vars;

	vars.randomVerb = getRandomVerb();
	vars.randomPersonIndex = getRandomPersonIndex();

	var firstPersonStartsWithVowel = vars.randomPersonIndex === 0 && ['a', 'e', 'é', 'è', 'i', 'o', 'u', 'y'].indexOf(vars.randomVerb.conjugations[vars.randomPersonIndex].charAt(0)) === 0;

	elems.infinitive.innerText = vars.randomVerb.infinitiveFr;
	elems.person.innerText = firstPersonStartsWithVowel ? 'j\'' : persons[vars.randomPersonIndex];
	elems.field.value = '';
	removeClass(elems.field, 'error');
	elems.button.innerText = 'Vérifier';
	addClass(elems.button, 'button-positive');
}
