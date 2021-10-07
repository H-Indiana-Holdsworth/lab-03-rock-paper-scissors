// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('user: rock, computer: paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = false;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('user: paper, computer: rock', (expect) => {

    const expected = false;

    const actual = didUserWin('paper', 'scissors');

    expect.equal(actual, expected);

});

test('user: scissors, computer: rock', (expect) => {

    const expected = false;

    const actual = didUserWin('scissors', 'rock');

    expect.equal(actual, expected);
});

test('user: rock, computer: scissors', (expect) => {

    const expected = true;

    const actual = didUserWin('rock', 'scissors');

    expect.equal(actual, expected);
});

test('user: paper, computer: rock', (expect) => {

    const expected = true;

    const actual = didUserWin('paper', 'rock');

    expect.equal(actual, expected);
});

test('user: scissors, computer: paper', (expect) => {

    const expected = true;

    const actual = didUserWin('scissors', 'paper');

    expect.equal(actual, expected);
});

test ('user: rock, computer: rock', (expect) => {

    const expected = 'Draw';

    const actual = didUserWin('rock', 'rock');

    expect.equal(actual, expected);
});

test ('user: paper, computer: paper', (expect) => {

    const expected = 'Draw';

    const actual = didUserWin('paper', 'paper');

    expect.equal(actual, expected);
});

test ('user: scissors, computer: scissors', (expect) => {

    const expected = 'Draw';

    const actual = didUserWin('scissors', 'scissors');

    expect.equal(actual, expected);
});