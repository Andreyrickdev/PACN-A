function stringOfSlide () {

    const phrases = ['Strength','Resistance','Respiration'];
    const phrase = document.getElementById('first-phrase');

    function showPhrases () {
        for (let i = 0; i < phrases.length; i++) {
            setTimeout ( () => {
                phrase.innerText = phrases[i];
            }, i * 3000);
        }

        setTimeout(showPhrases, phrases.length * 3000);
    }




}
stringOfSlide();