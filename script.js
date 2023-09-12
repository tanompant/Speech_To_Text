let texts = document.querySelector('.texts')

const recognition = new webkitSpeechRecognition();
recognition.lang = 'th-TH'
recognition.continuous = true;
recognition.interimResults = true;

let p = document.createElement('p')


recognition.addEventListener('result', function(event) {
    const text = Array.from(event.results)
    .map(results=>results[0])
    .map(results=>results.transcript)
    .join(' ')

    console.log(text)
    p.innerText = text

    texts.appendChild(p)

 });

recognition.start();
