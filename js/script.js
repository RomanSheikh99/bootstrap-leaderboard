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


for(let player of playersName){
  let myPlayer = document.createElement('li');
  myPlayer.innerText = player.name;
  document.getElementById('players-name').appendChild(myPlayer);
}


document.getElementById('shearch'),addEventListener('keyup', function(){
    let shearch = document.getElementById('shearch').value
        for(let singlePlayer of playersName){
            
            document.getElementById('shearch-players-name').removeChild('li');
            if(shearch == ''){
                document.getElementById('players-name').style.display = 'block';
                document.getElementById('shearch-players-name').style.display = 'none';
            }
            else if(singlePlayer.name.toLowerCase().indexOf(shearch.toLowerCase()) != -1){
                document.getElementById('shearch-players-name').style.display = 'block';
                document.getElementById('players-name').style.display = 'none';
                let myPlayerName = document.createElement('li')
                myPlayerName.innerText = singlePlayer.name;
                document.getElementById('shearch-players-name').appendChild(myPlayerName);
              }
        }
})




