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
    if(value.innerText >= 0 && value.innerText <=)
})