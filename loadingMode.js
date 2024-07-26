var mode;

const form = {
    infinity: document.getElementById('infinity'),
    round5: document.getElementById('5Rounds'),
    round3: document.getElementById('3Rounds'),
    custom: document.getElementById('custom'),
}

const playBlock = document.querySelector('.play-block')
const inputRounds = document.getElementById('inputRounds');
const introSubmit = document.getElementById('introSumbit');
const description = document.querySelector('.play-block-title');
const colorPlayer = document.getElementById('colorPlayer')

function getDescription(element, desc, color) {
    // nulling
    form.infinity.classList.remove('active');
    form.round5.classList.remove('active');
    form.round3.classList.remove('active');
    form.custom.classList.remove('active');
    playBlock.classList.remove('visible');
    inputRounds.style.display = 'none';
    colorPlayer.style.display = 'none';
    inputRounds.setAttribute('value', '');

    // colorizing
    element.classList.add('active');
    playBlock.classList.add('visible');

    if (element == form.custom) {
        inputRounds.style.display = 'inline';
        colorPlayer.style.display = 'inline'
    }

    description.innerText = desc;
    introSubmit.style.background = color;

    if (element == form.infinity) {
        inputRounds.setAttribute('value', 0)
        mode = Infinity
    } else if (element == form.round3) {
        inputRounds.setAttribute('value', 3)
        mode = 3;
    } else if (element == form.round5) {
        inputRounds.setAttribute('value', 5)
        mode = 5;
    }
}

form.infinity.onclick = () => getDescription(form.infinity, 'In the "Infinity" Rock-Paper-Scissors game mode, player can enjoy the classic game without number of rounds. The goal is to compete with artificial intelligence, aiming to score as many consecutive wins as possible.', '#0774ab');


form.round3.onclick = () => getDescription(form.round3, 'In the "3 Rounds" mode, players competes in a series of three rounds of the Rock-Paper-Scissors game. The goal is to win most rounds. The player who wins two or three rounds becomes the winner of the match.', '#0774ab');

form.round5.onclick = () => getDescription(form.round5, 'In the "5 Rounds" mode, player participates in a series of five rounds of the Rock-Paper-Scissors game. The goal is to get as many wins as possible in these five rounds. The player who wins the most rounds becomes the winner of the match.', '#0774ab');

form.custom.onclick = () => getDescription(form.custom, 'In the "Custom" Rock-Paper-Scissors game mode, player can choose the number of rounds he (she) wants to play in a single match. This allows him (her) to adapt the game to his (her) preferences and the time available for the game. If you enter 0, the program will start the "Infinity" mode.', '#005c4b');

colorPlayer.onclick = () => {
    switch (colorPlayer.getAttribute('value')) {
        case 'Blue':
            colorPlayer.setAttribute('value', 'Green');
            colorPlayer.style.background = '#005c4b'
            break
        case 'Green':
            colorPlayer.setAttribute('value', 'Orange');
            colorPlayer.style.background = '#f78b54'
            break
        case 'Orange':
            colorPlayer.setAttribute('value', 'Pink');
            colorPlayer.style.background = '#ffa3b4'
            break
        default:
            colorPlayer.setAttribute('value', 'Blue');
            colorPlayer.style.background = '#0774ab'
            break
    }
}