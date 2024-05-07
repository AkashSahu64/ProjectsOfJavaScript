const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'white';
        }
        if(e.target.id === '#424242'){
            body.style.backgroundColor = e.target.id;
            body.style.color = '#fff';
        }
        if(e.target.id === '#fff'){
            body.style.backgroundColor = e.target.id;
            body.style.color = 'black';
        }
        if(e.target.id === '#d8eeee'){
            body.style.backgroundColor = e.target.id;
            body.style.color = '#000';
        }
    })
})