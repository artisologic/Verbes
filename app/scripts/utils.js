
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomVerb() {
	return verbs[getRandomInt(0, nbVerbs-1)];
}

function getRandomPersonIndex() {
	return getRandomInt(0, nbPersons-1);
}

function getRandomVerbExcludingThose(aaVerbs)
{
	var v = getRandomVerb();
	while(aaVerbs.indexOf(v) !== -1)
	{
		v = getRandomVerbExcludingThose(aaVerbs);
	}
	return v;
}

function hasClass(aoElement, asClass)
{
	if(!aoElement) { return; }
	return aoElement.classList.contains(asClass);
}

function addClass(aoElement, asClass)
{
	if(!aoElement) { return; }
	return aoElement.classList.add(asClass);
}

function removeClass(aoElement, asClass)
{
	if(!aoElement) { return; }
	return aoElement.classList.remove(asClass);
}
