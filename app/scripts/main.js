
document.addEventListener('DOMContentLoaded', function() {

	var nbVerbs = verbs.length;
	var nbPersons = persons.length;
	var randomVerb = '';
	var randomPersonIndex = null;

	var conjugationExercise = {
		elements: {
			infinitive: document.querySelector('[data-infinitive]'),
			person: document.querySelector('[data-person]'),
			field: document.querySelector('input'),
			button: document.querySelector('.button')
		}
	};

	function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
	function getRandomVerb() { return verbs[getRandomInt(0, nbVerbs-1)]; }
	function getRandomPersonIndex() { return getRandomInt(0, nbPersons-1); }

	function attach()
	{
		conjugationExercise.elements.button.addEventListener('touchend', checkConjugation, false);
	}

	function checkConjugation()
	{
		//conjugationExercise.elements.field.blur();
		var guess = conjugationExercise.elements.field.value;

		if(guess === randomVerb.conjugations[randomPersonIndex])
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
		console.log('wrong! You said: ' + asGuess + ' instead of ' + randomVerb.conjugations[randomPersonIndex]);

		conjugationExercise.elements.button.innerText = 'Continuer';
		conjugationExercise.elements.button.classList.remove('button-positive');
		conjugationExercise.elements.field.value = randomVerb.conjugations[randomPersonIndex];
		conjugationExercise.elements.field.classList.add('error');
	}

	function setupConjugationExercise()
	{
		randomVerb = getRandomVerb();
		randomPersonIndex = getRandomPersonIndex();

		firstPersonStartsWithVowel = randomPersonIndex === 0 && ['a', 'e', 'é', 'è', 'i', 'o', 'u', 'y'].indexOf(randomVerb.conjugations[randomPersonIndex].charAt(0)) === 0;

		conjugationExercise.elements.infinitive.innerText = randomVerb.infinitiveFr;
		conjugationExercise.elements.person.innerText = firstPersonStartsWithVowel ? 'j\'' : persons[randomPersonIndex];
		conjugationExercise.elements.field.value = '';
		conjugationExercise.elements.field.classList.remove('error');
		conjugationExercise.elements.button.innerText = 'Vérifier';
		conjugationExercise.elements.button.classList.add('button-positive');
	}

	attach();
	setupConjugationExercise();

}, false );
