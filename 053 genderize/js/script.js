//053 genderize

async function genderize(event) {
    event.preventDefault();

    const nameId = '#name';
    const answerId = '#answer';

    const answer = document.querySelector(answerId);
    const firstName = event.target.querySelector(nameId).value;
    
    let result = '';
    
    if (firstName) {
        const serverUrl = 'https://api.genderize.io';
        const url = `${serverUrl}?name=${firstName}`;
    
        const response = await fetch(url).then(response => {if (response.ok) return response.json()});
        result = response.gender;
        result = firstName + (result === null ? ' is not a name' : ' is a ' + result + ' name');
    }

    answer.innerHTML = result;
}
