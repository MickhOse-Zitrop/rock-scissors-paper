window.ondragstart = function () {
    return false;
};

var params = window
    .location
    .search
    .replace('?', '')
    .split('&')
    .reduce(
        function (p, e) {
            var a = e.split('=');
            p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        }, {}
    );

const scissors = document.getElementById('scissors')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissorsOpponent = document.getElementById('scissorsOpponent')
const rockOpponent = document.getElementById('rockOpponent')
const paperOpponent = document.getElementById('paperOpponent')
const scissorsImg = document.getElementById('scissorsImg')
const rockImg = document.getElementById('rockImg')
const paperImg = document.getElementById('paperImg')
const scissorsImgOpponent = document.getElementById('scissorsImgOpponent')
const rockImgOpponent = document.getElementById('rockImgOpponent')
const paperImgOpponent = document.getElementById('paperImgOpponent')
const winner = document.getElementById('winner')
const outro = document.getElementById('outro')
const outroTitle = document.getElementById('outroTitle')
const outroScore = document.getElementById('outroScore')
const switchColor = document.getElementById('switchColor')

var roundLimit = params['mode'];
const colorPlayer = params['color'];

if (roundLimit == 0) {
    roundLimit = Infinity
} else if (roundLimit > 1000000000000) {
    roundLimit = 1000000000000
}

var round = 1;

var title = document.getElementById('title')
var playerOption, opponentOption;
var playerScore = 0;
var opponentScore = 0;
var playerScoreValue = document.getElementById('score')
var opponentScoreValue = document.getElementById('opponentScore')
var action = document.getElementById('action')

function setBlock() {
    [scissors, rock, paper].map(e => e.classList.add('block'))
    return
}

function getRandom() {
    opponentOption = Math.floor(Math.random() * (4 - 1) + 1)
    return opponentOption
}

function setAnswer(various) {
    switch (various) {
        case 1:
            scissorsImgOpponent.classList.add('showed')
            break
        case 2:
            rockImgOpponent.classList.add('showed')
            break
        case 3:
            paperImgOpponent.classList.add('showed')
            break
        default:
            alert("ERROR")
            break
    }
}

function checkAnswers(player, opponent) {
    if (player == 1 && opponent == 2) {
        opponentScore++
        action.innerText = 'You lose!'
    } else if (player == 1 && opponent == 3) {
        playerScore++
        action.innerText = 'You win!'
    } else if (player == 2 && opponent == 1) {
        playerScore++
        action.innerText = 'You win!'
    } else if (player == 2 && opponent == 3) {
        opponentScore++
        action.innerText = 'You lose!'
    } else if (player == 3 && opponent == 1) {
        opponentScore++
        action.innerText = 'You lose!'
    } else if (player == 3 && opponent == 2) {
        playerScore++
        action.innerText = 'You win!'
    } else {
        action.innerText = 'Draw'
    }

    playerScoreValue.innerText = playerScore;
    opponentScoreValue.innerText = opponentScore;

    if (playerScore > opponentScore) {
        winner.classList.remove('lose')
        winner.classList.add('win')
    } else if (playerScore < opponentScore) {
        winner.classList.remove('win')
        winner.classList.add('lose')
    } else {
        winner.classList.remove('win')
        winner.classList.remove('lose')
    }

    setTimeout(() => {
        action.innerText = ''
        nulling()
    }, 1000)
}

function nulling() {
    scissorsImg.classList.remove('showed');
    rockImg.classList.remove('showed');
    paperImg.classList.remove('showed')

    playerOption = 0;
    opponentOption = 0;

    scissorsImgOpponent.classList.remove('showed')
    rockImgOpponent.classList.remove('showed')
    paperImgOpponent.classList.remove('showed')

    round++

    if (round <= roundLimit) {
        action.innerText = `Round ${round}`

        setTimeout(() => {
            action.innerText = '';

            action.innerText = 'Fight';

            setTimeout(() => {
                action.innerText = '';
                [scissors, rock, paper].map(e => e.classList.remove('block'))
            }, 2000);

        }, 2000);
    } else {
        outro.classList.add('visible')
        if (playerScore > opponentScore) {
            outroTitle.innerText = 'YOU WIN!!!'
        } else if (playerScore < opponentScore) {
            outroTitle.innerText = 'You lose...'
        } else {
            outroTitle.innerText = 'Draw'
        }
        outroScore.innerText = `Score: ${playerScore}:${opponentScore}`
    }
}

window.onload = () => {
    action.innerText = 'Fight'
    if (roundLimit == 1) title.innerText = `${roundLimit} Round`
    else title.innerText = `${roundLimit} Rounds`

    switch (colorPlayer) {
        case 'Green':
            scissors.setAttribute('src', '../images/Scissors Green.png')
            rock.setAttribute('src', '../images/Rock Green.png')
            paper.setAttribute('src', '../images/Paper Green.png')
            scissorsImg.setAttribute('src', '../images/Scissors Green.png')
            rockImg.setAttribute('src', '../images/Rock Green.png')
            paperImg.setAttribute('src', '../images/Paper Green.png')
            scissorsOpponent.setAttribute('src', '../images/Scissors Blue.png')
            rockOpponent.setAttribute('src', '../images/Rock Blue.png')
            paperOpponent.setAttribute('src', '../images/Paper Blue.png')
            scissorsImgOpponent.setAttribute('src', '../images/Scissors Blue.png')
            rockImgOpponent.setAttribute('src', '../images/Rock Blue.png')
            paperImgOpponent.setAttribute('src', '../images/Paper Blue.png')
            break;
        case 'Pink':
            scissors.setAttribute('src', '../images/Scissors Green.png')
            rock.setAttribute('src', '../images/Rock Green.png')
            paper.setAttribute('src', '../images/Paper Green.png')
            scissorsImg.setAttribute('src', '../images/Scissors Green.png')
            rockImg.setAttribute('src', '../images/Rock Green.png')
            paperImg.setAttribute('src', '../images/Paper Green.png')
            scissorsOpponent.setAttribute('src', '../images/Scissors Blue.png')
            rockOpponent.setAttribute('src', '../images/Rock Blue.png')
            paperOpponent.setAttribute('src', '../images/Paper Blue.png')
            scissorsImgOpponent.setAttribute('src', '../images/Scissors Blue.png')
            rockImgOpponent.setAttribute('src', '../images/Rock Blue.png')
            paperImgOpponent.setAttribute('src', '../images/Paper Blue.png')
            document.querySelectorAll('.sign').forEach((el) => {
                el.classList.toggle('changed')
            })
            document.querySelectorAll('.choose-sign').forEach((el) => {
                el.classList.toggle('changed')
            })
            break
        case 'Orange':
            document.querySelectorAll('.sign').forEach((el) => {
                el.classList.toggle('changed')
            })
            document.querySelectorAll('.choose-sign').forEach((el) => {
                el.classList.toggle('changed')
            })
            break
        default:
            break;
    }

    setTimeout(() => {
        action.innerText = ''
    }, 2000);
}

scissors.onclick = () => {
    if (round <= roundLimit && !scissorsImg.classList.contains('showed') && !rockImg.classList.contains('showed') && !paperImg.classList.contains('showed')) {
        let various = getRandom();

        action.innerText = 'Opponent is thinking...'

        playerOption = 1;
        scissorsImg.classList.add('showed');

        setBlock()
        setTimeout(() => {
            action.innerText = ''
            setAnswer(various)
            setTimeout(() => {
                checkAnswers(playerOption, opponentOption)
            }, 2000);
        }, 3000);
    }
}

rock.onclick = () => {
    if (round <= roundLimit && !scissorsImg.classList.contains('showed') && !rockImg.classList.contains('showed') && !paperImg.classList.contains('showed')) {
        let various = getRandom();

        action.innerText = 'Opponent is thinking...'

        playerOption = 2
        rockImg.classList.add('showed');

        setBlock()
        setTimeout(() => {
            action.innerText = ''
            setAnswer(various)
            setTimeout(() => {
                checkAnswers(playerOption, opponentOption)
            }, 2000);
        }, 3000);
    }
}

paper.onclick = () => {
    if (round <= roundLimit && !scissorsImg.classList.contains('showed') && !rockImg.classList.contains('showed') && !paperImg.classList.contains('showed')) {
        let various = getRandom();

        action.innerText = 'Opponent is thinking...'

        playerOption = 3
        paperImg.classList.add('showed');

        setBlock()
        setTimeout(() => {
            action.innerText = ''
            setAnswer(various)
            setTimeout(() => {
                checkAnswers(playerOption, opponentOption)
            }, 2000);
        }, 3000);
    }
}

switchColor.onclick = () => {
    document.querySelectorAll('.sign').forEach((el) => {
        el.classList.toggle('changed')
    })
    document.querySelectorAll('.choose-sign').forEach((el) => {
        el.classList.toggle('changed')
    })
}