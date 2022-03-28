//053 genderize

async function genderize(event) {
    event.preventDefault();

    const nameId = 'name';
    const answerId = 'answer';

    const answer = document.querySelector(`#${answerId}`);
    const firstName = event.target.querySelector(`#${nameId}`).value;
    
    let result = '';
    
    if (firstName) {
        const protocol = 'https';
        const host = 'api.genderize.io';
        const uri = `${protocol}://${host}?name=${firstName}`;

        const response = await fetch(uri).then(response => {if (response.ok) return response.json()});
        result = response.gender;
        result = firstName + (result === null ? ' is not a name' : ' is a ' + result + ' name');
    }

    answer.innerHTML = result;
}
