async function adviceOfDay () {
    let theClip = await fetch('https://api.adviceslip.com/advice')
        .then(result => result.json());

    var randomAdvice = document.getElementById("randomAdvice");

    let adviceHeading = document.createElement('h3');
    adviceHeading.innerHTML = "Advice of the Day<br>";
    randomAdvice.appendChild(adviceHeading);

    let adviceClip = document.createElement('p');
    adviceClip.innerHTML = ('src' , theClip.slip.advice);
    randomAdvice.appendChild(adviceClip);
}

adviceOfDay();