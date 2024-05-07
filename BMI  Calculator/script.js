const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please enter valid value of height!"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please enter valid value of weight!"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`;
        if(weight <= 18.6){
            results.innerHTML = `<span>${bmi}</span> (Under the weight)`
        }
        else if(weight > 18.6 && weight <= 24.9){
            results.innerHTML = `<span>${bmi}</span> (Normal range weight)`
        }
        else if(weight > 24.9){
            results.innerHTML = `<span>${bmi}</span> (Over the weight)`
        }
    }
})