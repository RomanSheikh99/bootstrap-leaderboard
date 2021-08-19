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
    else{
        list.innerText = name;
        document.getElementById('list-items').appendChild(list);
        document.getElementById('player-name').value = '';
    }
    item.classList.add('list-group-item');
    item.classList.add('list-group-item-info');
    item.classList.add('list-group-item-action');
})