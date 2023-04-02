function stringOfSlide () {

    const phrases = ['Strength','Resistance','Respiration'];
    const phrase = document.getElementById('first-phrase');

    function showPhrases () {
        for (let i = 0; i < phrases.length; i++) {
            setTimeout ( () => {        //This setTimeout serves to define a delay of a word of the array to be displayed for another word, that is... 0s appears a word, 3s appears another, and 6s appears ortra.
                phrase.innerText = phrases[i];
            }, i * 3000);
        }

        setTimeout(showPhrases, phrases.length * 3000);
    }

    showPhrases();



}
stringOfSlide();