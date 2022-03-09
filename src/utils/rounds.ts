type Letter = {
    id: number
    value: string
}

export const LETTERS: Letter[] = [
    {
        id: 1,
        value: 'A'
    },
    {
        id: 2,
        value: 'B'
    },
    {
        id: 3,
        value: 'C'
    },
    {
        id: 4,
        value: 'D'
    },
    {
        id: 5,
        value: 'E'
    },
    {
        id: 6,
        value: 'F'
    },
    {
        id: 7,
        value: 'G'
    },
    {
        id: 8,
        value: 'H'
    },
    {
        id: 9,
        value: 'I'
    },
    {
        id: 10,
        value: 'J'
    },
    {
        id: 11,
        value: 'K'
    },
    {
        id: 12,
        value: 'L'
    },
    {
        id: 13,
        value: 'M'
    },
    {
        id: 14,
        value: 'N'
    },
    {
        id: 15,
        value: 'O'
    },
    {
        id: 16,
        value: 'P'
    },
    {
        id: 17,
        value: 'Q'
    },
    {
        id: 18,
        value: 'R'
    },
    {
        id: 19,
        value: 'S'
    },
    {
        id: 20,
        value: 'T'
    },
    {
        id: 21,
        value: 'U'
    },
    {
        id: 22,
        value: 'V'
    },
    {
        id: 23,
        value: 'W'
    },
    {
        id: 24,
        value: 'X'
    },
    {
        id: 25,
        value: 'Y'
    },
    {
        id: 26,
        value: 'Z'
    }
]

export const generateRoundLetters = (numOfPlayers: number, letters: Letter[]) => {
    let result = new Array(numOfPlayers),
    len = letters.length,
    taken = new Array(len);

    let target = numOfPlayers - 1;
    if (target > len)
    throw new RangeError("getRandom: more elements taken than available");
    while (target--) {
        let x = Math.floor(Math.random() * len);
        result[target] = letters[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

export const calculateScore = () => {

}