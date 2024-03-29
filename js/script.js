let sectionTitle = document.getElementsByClassName('section-title');
for(let title of sectionTitle){
    title.style.color = 'rgba(106, 15, 142,1)'
    title.classList.remove('text-primary')
}

let players = document.getElementsByClassName('player');
for(let player of players){
    player.style.backgroundColor = 'rgba(192, 192, 192,1)';
    player.style.padding = '10px';
    player.style.borderRadius = '5px';
    player.style.margin = '0px';
}

document.getElementById('list-items').classList.add('list-group')

let items = document.querySelectorAll('#list-items li');
for(let item of items){
    item.classList.add('list-group-item');
    item.classList.add('list-group-item-info');
    item.classList.add('list-group-item-action');
}


document.getElementById('add-player').addEventListener('click',function(){
    let list = document.createElement('li');
    let name = document.getElementById('player-name').value;
    if(name == ''){
        document.getElementById('player-name').value = 'Please Enter a Name';
    }
    else if(name == 'Please Enter a Name'){
        document.getElementById('player-name').value = 'Please Enter a Name';
    }
    else{
        list.innerText = name;
        document.getElementById('list-items').appendChild(list);
        document.getElementById('player-name').value = '';
        list.classList.add('list-group-item');
        list.classList.add('list-group-item-info');
        list.classList.add('list-group-item-action');
        list.classList.add('text-capitalize');
    }
})


document.getElementById('list-items').addEventListener('click',function(event){
    event.target.style.display = 'none';
})


document.getElementById('update-player').addEventListener('click', function(){
    let value = document.getElementById('update-value');
    if(value.innerText >= 0 && value.innerText <= 10){
        let newValue = parseInt(value.innerText) + 1;
        value.innerText = newValue;
    }
    else if(value.innerText > 10){
        document.getElementById('update-error').classList.remove('d-none');
        document.getElementById('update-player').setAttribute('disabled', true);
    }
})


let playersName = [
    {name: 'Masrafi Mortoza', country: 'Bangladesh', salary: '$ 740'},
    {name: 'Shakib Al Hasan', country: 'Bangladesh', salary: '$ 1140'},
    {name: 'Virat Koholi', country: 'India', salary: '$ 1740'},
    {name: 'Stiven Smith', country: 'Australia', salary: '$ 1540'},
    {name: 'Mohammad Amir', country: 'Pakisthan', salary: '$ 620'},
    {name: 'Mohammad Nabi', country: 'Afganisthan', salary: '$ 500'},
]

document.getElementById('myInput').addEventListener('keyup', function(){
        var input, filter, tBody, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        tBody = document.getElementById("table");
        li = tBody.getElementsByTagName("tr");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("td")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
})
