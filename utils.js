export function getRandomThrow() {
    return ['rock', 'paper', 'scissors'][Math.round(Math.random()) * 3];
};
console.log(getRandomThrow());
export function didUserWin(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Draw'
    }
    else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return true
    }
    else if (userChoice === 'paper' && computerChoice === 'rock') {
        return true
    }
    else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return true
    }
    else {
        return false
    }
};
