import { Games_Rounds } from "../lib/graphql/globalTypes";
type Letter = {
  id: number;
  letter: string;
  icon: string;
};

const cloudinary_url =
  "https://res.cloudinary.com/dwacr3zpp/image/upload/v1649189750/neno/letters";

export const letters: Letter[] = [
  {
    id: 1,
    letter: "A",
    icon: `${cloudinary_url}/icons8-a.svg`,
  },
  {
    id: 2,
    letter: "B",
    icon: `${cloudinary_url}/icons8-b.svg`,
  },
  {
    id: 3,
    letter: "C",
    icon: `${cloudinary_url}/icons8-c.svg`,
  },
  {
    id: 4,
    letter: "D",
    icon: `${cloudinary_url}/icons8-d.svg`,
  },
  {
    id: 5,
    letter: "E",
    icon: `${cloudinary_url}/icons8-e.svg`,
  },
  {
    id: 6,
    letter: "F",
    icon: `${cloudinary_url}/icons8-f.svg`,
  },
  {
    id: 7,
    letter: "G",
    icon: `${cloudinary_url}/icons8-g.svg`,
  },
  {
    id: 8,
    letter: "H",
    icon: `${cloudinary_url}/icons8-h.svg`,
  },
  {
    id: 9,
    letter: "I",
    icon: `${cloudinary_url}/icons8-i.svg`,
  },
  {
    id: 10,
    letter: "J",
    icon: `${cloudinary_url}/icons8-j.svg`,
  },
  {
    id: 11,
    letter: "K",
    icon: `${cloudinary_url}/icons8-k.svg`,
  },
  {
    id: 12,
    letter: "L",
    icon: `${cloudinary_url}/icons8-l.svg`,
  },
  {
    id: 13,
    letter: "M",
    icon: `${cloudinary_url}/icons8-m.svg`,
  },
  {
    id: 14,
    letter: "N",
    icon: `${cloudinary_url}/icons8-n.svg`,
  },
  {
    id: 15,
    letter: "O",
    icon: `${cloudinary_url}/icons8-o.svg`,
  },
  {
    id: 16,
    letter: "P",
    icon: `${cloudinary_url}/icons8-p.svg`,
  },
  {
    id: 17,
    letter: "Q",
    icon: `${cloudinary_url}/icons8-q.svg`,
  },
  {
    id: 18,
    letter: "R",
    icon: `${cloudinary_url}/icons8-r.svg`,
  },
  {
    id: 19,
    letter: "S",
    icon: `${cloudinary_url}/icons8-s.svg`,
  },
  {
    id: 20,
    letter: "T",
    icon: `${cloudinary_url}/icons8-a.svg`,
  },
  {
    id: 21,
    letter: "U",
    icon: `${cloudinary_url}/icons8-u.svg`,
  },
  {
    id: 22,
    letter: "V",
    icon: `${cloudinary_url}/icons8-v.svg`,
  },
  {
    id: 23,
    letter: "W",
    icon: `${cloudinary_url}/icons8-w.svg`,
  },
  {
    id: 24,
    letter: "X",
    icon: `${cloudinary_url}/icons8-x.svg`,
  },
  {
    id: 25,
    letter: "Y",
    icon: `${cloudinary_url}/icons8-y.svg`,
  },
  {
    id: 26,
    letter: "Z",
    icon: `${cloudinary_url}/icons8-z.svg`,
  },
];

export const generateRoundLetters = (numOfPlayers: number) => {
  if (numOfPlayers === 1) {
    return [getRandomLetter(letters, 1)];
  }
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

  return result.length > 0
    ? result.filter((letter) => letter.hasOwnProperty("id"))
    : [];
};

export const getRandomLetter = <T>(arr: T[], max: number = arr.length) => {
  return arr[Math.floor(Math.random() * Math.floor(max))];
};

export const calculateScore = (word: string) => {
  return word.length * 10;
};

export const getLetterByValue = (target: string) => {
  const [res] = letters.filter(({ letter }) => target === letter);
  console.log(res);
  return res;
};
