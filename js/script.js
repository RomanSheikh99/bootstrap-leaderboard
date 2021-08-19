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