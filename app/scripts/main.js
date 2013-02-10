
document.addEventListener('DOMContentLoaded', function() {

	var nbVerbs = verbs.length;
	var nbPersons = persons.length;

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

	var translationEx = {
		elems: {
			infinitive: document.getElementById('traduire').querySelector('[data-infinitive]')
		},
		vars: {
			randomVerb: null
		}
	};

	function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
	function getRandomVerb() { return verbs[getRandomInt(0, nbVerbs-1)]; }
	function getRandomPersonIndex() { return getRandomInt(0, nbPersons-1); }

	function attach()
	{
		conjugationEx.elems.button.addEventListener('touchend', checkConjugation, false);
	}

	function checkConjugation()
	{
		var guess = conjugationEx.elems.field.value;
		var vars =  conjugationEx.vars;

		if(guess === vars.randomVerb.conjugations[vars.randomPersonIndex])
		{
			correctConjugation();
		}
		else
		{
			wrongConjugation(guess);
		}
	}

	function correctConjugation()
	{
		console.log('correct!');

		setupConjugationExercise();
	}

	function wrongConjugation(asGuess)
	{
		var elems = conjugationEx.elems;
		var vars  = conjugationEx.vars;

		console.log('wrong! You said: ' + asGuess + ' instead of ' + vars.randomVerb.conjugations[vars.randomPersonIndex]);

		elems.button.innerText = 'Continuer';
		elems.button.classList.remove('button-positive');
		elems.field.value = vars.randomVerb.conjugations[vars.randomPersonIndex];
		elems.field.classList.add('error');
	}

	function setupConjugationExercise()
	{
		var elems = conjugationEx.elems;
		var vars  = conjugationEx.vars;

		vars.randomVerb = getRandomVerb();
		vars.randomPersonIndex = getRandomPersonIndex();

		var firstPersonStartsWithVowel = vars.randomPersonIndex === 0 && ['a', 'e', 'é', 'è', 'i', 'o', 'u', 'y'].indexOf(vars.randomVerb.conjugations[vars.randomPersonIndex].charAt(0)) === 0;

		elems.infinitive.innerText = vars.randomVerb.infinitiveFr;
		elems.person.innerText = firstPersonStartsWithVowel ? 'j\'' : persons[vars.randomPersonIndex];
		elems.field.value = '';
		elems.field.classList.remove('error');
		elems.button.innerText = 'Vérifier';
		elems.button.classList.add('button-positive');
	}

	function setupTranslationExercise()
	{
		translationEx.vars.randomVerb = getRandomVerb();

		translationEx.infinitive.innerText = translationEx.vars.randomVerb.infinitiveFr;
	}

	attach();
	setupConjugationExercise();
	//setupTranslationExercise();

}, false );
