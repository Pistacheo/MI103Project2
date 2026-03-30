const mew_sprite = document.querySelector('.mew-sprite');
const jirachi_sprite = document.querySelector('.jirachi-sprite');
const victini_img = document.querySelector('.victini-img');
const darkrai_img = document.querySelector('.darkrai-img');
const magearna_img = document.querySelector('.magearna-img');
const the_goat_img = document.querySelector('.the-goat-img');
const phione_img = document.querySelector('.phione-img');
const volcanion_img = document.querySelector('.volcanion-img');
const hoopa_img = document.querySelector('.hoopa-img');
const arceus_img = document.querySelector('.arceus-img');
const celebi_img = document.querySelector('.celebi-img');

const victini_cry = document.querySelector('.victini-cry');
const mew_cry = document.querySelector('.mew-cry');
const jirachi_cry = document.querySelector('.jirachi-cry');
const darkrai_cry = document.querySelector('.darkrai-cry');
const magearna_cry = document.querySelector('.magearna-cry');
const the_goat_cry = document.querySelector('.the-goat-cry');
const phione_cry = document.querySelector('.phione-cry');
const volcanion_cry = document.querySelector('.volcanion-cry');
const hoopa_cry = document.querySelector('.hoopa-cry');
const arceus_cry = document.querySelector('.arceus-cry');
const celebi_cry = document.querySelector('.celebi-cry');

fetch('https://pokeapi.co/api/v2/pokemon/mew')
  .then(response => response.json())
  .then(data => {
    mew_sprite.innerHTML = `<img src="${data.sprites.front_default}" alt="Mew Sprite" class="sprite-image">`; mew_cry.src = data.cries.latest;
  });
  mew_sprite.addEventListener('click', () => mew_cry.play());

fetch('https://pokeapi.co/api/v2/pokemon/jirachi')
  .then(response => response.json())
  .then(data => {
    jirachi_sprite.innerHTML = `<img src="${data.sprites.front_default}" alt="Jirachi Sprite" class="sprite-image">`; jirachi_cry.src = data.cries.latest;
  });
  jirachi_sprite.addEventListener('click', () => jirachi_cry.play());

fetch('https://pokeapi.co/api/v2/pokemon/victini')
    .then(response => response.json())
    .then(data => {
        victini_cry.src = data.cries.latest;
    });
    victini_img.addEventListener('click', () => victini_cry.play());

fetch('https://pokeapi.co/api/v2/pokemon/darkrai')
    .then(response => response.json())
    .then(data => {
        darkrai_cry.src = data.cries.latest;
    });
    darkrai_img.addEventListener('click', () => darkrai_cry.play());

fetch('https://pokeapi.co/api/v2/pokemon/magearna')
    .then(response => response.json())
    .then(data => {
        magearna_cry.src = data.cries.latest;
    });
    magearna_img.addEventListener('click', () => magearna_cry.play());

fetch('https://pokeapi.co/api/v2/pokemon/marshadow')
    .then(response => response.json())
    .then(data => {
        the_goat_cry.src = data.cries.latest;
    });
    the_goat_img.addEventListener('click', () => the_goat_cry.play());

fetch('https://pokeapi.co/api/v2/pokemon/volcanion')
    .then(response => response.json())
    .then(data => {
        volcanion_cry.src = data.cries.latest;
    });
    volcanion_img.addEventListener('click', () => volcanion_cry.play());

fetch('https://pokeapi.co/api/v2/pokemon/hoopa')
    .then(response => response.json())
    .then(data => {
        hoopa_cry.src = data.cries.latest;
    });
    hoopa_img.addEventListener('click', () => hoopa_cry.play());

fetch('https://pokeapi.co/api/v2/pokemon/arceus')
    .then(response => response.json())
    .then(data => {
        arceus_cry.src = data.cries.latest;
    });
    arceus_img.addEventListener('click', () => arceus_cry.play());

fetch('https://pokeapi.co/api/v2/pokemon/celebi')
    .then(response => response.json())
    .then(data => {
        celebi_cry.src = data.cries.latest;
    });
    celebi_img.addEventListener('click', () => celebi_cry.play());

fetch('https://pokeapi.co/api/v2/pokemon/phione')
    .then(response => response.json())
    .then(data => {
        phione_cry.src = data.cries.latest;
    });
    phione_img.addEventListener('click', () => phione_cry.play());
