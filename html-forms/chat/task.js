const widget = document.querySelector('.chat-widget')
widget.addEventListener('click', () => widgettoggle(widget))

const widgetInput = document.querySelector('.chat-widget__input')
function widgettoggle (widget) {
    widget.classList.add('chat-widget_active');
}

let sendMessage = function (event) {
    if(event.key === 'Enter'){
        question(widgetInput.value);
        widgetInput.value ='';
        let index = Math.floor(Math.random() * phrases.length)
        answer(phrases[index])
    }
}

widgetInput.addEventListener('keydown',sendMessage)

const messages = document.querySelector( '.chat-widget__messages' );
function timestamp () {
    let date = new Date;
    return date.getHours()+`:`+date.getMinutes()
}


function answer(body) {  
messages.innerHTML += `
  <div class="message">
    <div class="message__time">`+timestamp()+`</div>
    <div class="message__text">
      `+body+`
    </div>
  </div>
`;
}

function question(body) {
    messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">`+timestamp()+`</div>
    <div class="message__text">
      `+body+`
    </div>
  </div>
`;
}



answer('Добрый день, мы ещё не проснулись. Позвоните через 10 лет');
let phrases = [
    'go home',
    'what are you looking for ?',
    'you need to get out of here',
    'see you later aligator',
    'brake yourself'
]

// Math.floor(Math.random() * phrases.length);