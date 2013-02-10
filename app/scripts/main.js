
document.addEventListener('DOMContentLoaded', function() {

	function attach()
	{
		conjugationEx.elems.button.addEventListener('touchend', checkConjugation, false);
		translationEx.elems.list.addEventListener('touchend', checkTranslation, false);
	}

	attach();

	newConjugationExercise();
	newTranslationExercise();

}, false );
