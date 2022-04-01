import { Games_Rounds } from "../lib/graphql/globalTypes";
type Letter = {
  id: number;
  letter: string;
  icon: string;
};

export const letters: Letter[] = [
  {
    id: 1,
    letter: "A",
    icon: "/images/letters/icons8-a.svg",
  },
  {
    id: 2,
    letter: "B",
    icon: "/images/letters/icons8-b.svg",
  },
  {
    id: 3,
    letter: "C",
    icon: "/images/letters/icons8-c.svg",
  },
  {
    id: 4,
    letter: "D",
    icon: "/images/letters/icons8-f.svg",
  },
  {
    id: 5,
    letter: "E",
    icon: "/images/letters/icons8-e.svg",
  },
  {
    id: 6,
    letter: "F",
    icon: "/images/letters/icons8-f.svg",
  },
  {
    id: 7,
    letter: "G",
    icon: "/images/letters/icons8-g.svg",
  },
  {
    id: 8,
    letter: "H",
    icon: "/images/letters/icons8-h.svg",
  },
  {
    id: 9,
    letter: "I",
    icon: "/images/letters/icons8-i.svg",
  },
  {
    id: 10,
    letter: "J",
    icon: "/images/letters/icons8-j.svg",
  },
  {
    id: 11,
    letter: "K",
    icon: "/images/letters/icons8-k.svg",
  },
  {
    id: 12,
    letter: "L",
    icon: "/images/letters/icons8-l.svg",
  },
  {
    id: 13,
    letter: "M",
    icon: "/images/letters/icons8-m.svg",
  },
  {
    id: 14,
    letter: "N",
    icon: "/images/letters/icons8-n.svg",
  },
  {
    id: 15,
    letter: "O",
    icon: "/images/letters/icons8-o.svg",
  },
  {
    id: 16,
    letter: "P",
    icon: "/images/letters/icons8-p.svg",
  },
  {
    id: 17,
    letter: "Q",
    icon: "/images/letters/icons8-q.svg",
  },
  {
    id: 18,
    letter: "R",
    icon: "/images/letters/icons8-r.svg",
  },
  {
    id: 19,
    letter: "S",
    icon: "/images/letters/icons8-s.svg",
  },
  {
    id: 20,
    letter: "T",
    icon: "/images/letters/icons8-t.svg",
  },
  {
    id: 21,
    letter: "U",
    icon: "/images/letters/icons8-u.svg",
  },
  {
    id: 22,
    letter: "V",
    icon: "/images/letters/icons8-v.svg",
  },
  {
    id: 23,
    letter: "W",
    icon: "/images/letters/icons8-w.svg",
  },
  {
    id: 24,
    letter: "X",
    icon: "/images/letters/icons8-x.svg",
  },
  {
    id: 25,
    letter: "Y",
    icon: "/images/letters/icons8-y.svg",
  },
  {
    id: 26,
    letter: "Z",
    icon: "/images/letters/icons8-z.svg",
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

export const getRandomLetter = <T>(arr: T[], max = arr.length) => {
  return arr[Math.floor(Math.random() * Math.floor(max))];
};

export const calculateScore = () => {};

export const getLetterByValue = (target: string) => {
  const [res] = letters.filter(({ letter }) => target === letter);
  return res;
};
