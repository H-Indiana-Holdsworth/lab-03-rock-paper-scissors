export function getRandomThrow() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

export function didUserWin(userThrow, computerThrow) {
    if (userThrow === computerThrow) {
        return 'Draw';
    }
    else if (userThrow === 'rock' && computerThrow === 'scissors') {
        return true;
    }
    else if (userThrow === 'paper' && computerThrow === 'rock') {
        return true;
    }
    else if (userThrow === 'scissors' && computerThrow === 'paper') {
        return true;
    }
    else {
        return false;
    }
}
