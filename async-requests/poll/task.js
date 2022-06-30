let xhr = new XMLHttpRequest();
xhr.open('GET','https://netology-slow-rest.herokuapp.com/poll.php')
xhr.send();
//https://netology-slow-rest.herokuapp.com/poll.php
xhr.onreadystatechange = function () { 
    if (xhr.readyState === xhr.DONE) {
        let response = JSON.parse(xhr.responseText)
        //console.log(response); //.data.title
        let question = document.querySelector('.poll__title');
        question.innerHTML = response.data.title;
        let answers =  document.querySelector('.poll__answers');
        for (let i = 0; i < response.data.answers.length; i++)
         {
            let data = document.createElement('button')
            data.classList.add('poll__answer')
            data.innerHTML = response.data.answers[i]
            answers.appendChild(data);
            data.addEventListener('click',(event) => voting(event,response.id,i))        
        };
    }

    function voting (event,id, answer) {
        event.preventDefault();
        let sendanswer = `vote=${id}&answer=${answer}`;
        console.log(sendanswer);
        let xhrsend = new XMLHttpRequest();
        xhrsend.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
        xhrsend.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
        xhrsend.send(sendanswer);
        alert('спасибо ваш голос засчитан')
        if (xhrsend.readyState === xhrsend.DONE) {
            let questresponse = JSON.parse(xhrsend.responseText)
            console.log(questresponse);
            console.log('sss')
        }
        else {console.log('wtf')}
    }
}
