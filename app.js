const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//adds greetings

const greetings = ['Im good you little piece of love', 'Doing good homeboi', 'Leave me alone'];

//adds weather

const weather = ['Weather is fine', 'You need a tan'];

// The De

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice is activated, you can speak to the mic');
};

recognition.onresult = function(event) {
    const current = event.result;

    const transcript = event.result[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//adds the listener to the btn

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    
    speech.text = 'I dont know what you said';

    if(message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    speech.volume = 20;
    speech.rate = 1;
    speech.pitch = 9;


    window.speechSynthesis.speak(speech);
}