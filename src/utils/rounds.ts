type Letter = {
  id: number;
  value: string;
  icon: string;
};

export const LETTERS: Letter[] = [
  {
    id: 1,
    value: "A",
    icon: "/images/letters/icons8-a.svg",
  },
  {
    id: 2,
    value: "B",
    icon: "/images/letters/icons8-b.svg",
  },
  {
    id: 3,
    value: "C",
    icon: "/images/letters/icons8-c.svg",
  },
  {
    id: 4,
    value: "D",
    icon: "/images/letters/icons8-f.svg",
  },
  {
    id: 5,
    value: "E",
    icon: "/images/letters/icons8-e.svg",
  },
  {
    id: 6,
    value: "F",
    icon: "/images/letters/icons8-f.svg",
  },
  {
    id: 7,
    value: "G",
    icon: "/images/letters/icons8-g.svg",
  },
  {
    id: 8,
    value: "H",
    icon: "/images/letters/icons8-h.svg",
  },
  {
    id: 9,
    value: "I",
    icon: "/images/letters/icons8-i.svg",
  },
  {
    id: 10,
    value: "J",
    icon: "/images/letters/icons8-j.svg",
  },
  {
    id: 11,
    value: "K",
    icon: "/images/letters/icons8-k.svg",
  },
  {
    id: 12,
    value: "L",
    icon: "/images/letters/icons8-l.svg",
  },
  {
    id: 13,
    value: "M",
    icon: "/images/letters/icons8-m.svg",
  },
  {
    id: 14,
    value: "N",
    icon: "/images/letters/icons8-n.svg",
  },
  {
    id: 15,
    value: "O",
    icon: "/images/letters/icons8-o.svg",
  },
  {
    id: 16,
    value: "P",
    icon: "/images/letters/icons8-p.svg",
  },
  {
    id: 17,
    value: "Q",
    icon: "/images/letters/icons8-q.svg",
  },
  {
    id: 18,
    value: "R",
    icon: "/images/letters/icons8-r.svg",
  },
  {
    id: 19,
    value: "S",
    icon: "/images/letters/icons8-s.svg",
  },
  {
    id: 20,
    value: "T",
    icon: "/images/letters/icons8-t.svg",
  },
  {
    id: 21,
    value: "U",
    icon: "/images/letters/icons8-u.svg",
  },
  {
    id: 22,
    value: "V",
    icon: "/images/letters/icons8-v.svg",
  },
  {
    id: 23,
    value: "W",
    icon: "/images/letters/icons8-w.svg",
  },
  {
    id: 24,
    value: "X",
    icon: "/images/letters/icons8-x.svg",
  },
  {
    id: 25,
    value: "Y",
    icon: "/images/letters/icons8-y.svg",
  },
  {
    id: 26,
    value: "Z",
    icon: "/images/letters/icons8-z.svg",
  },
];

export const generateRoundLetters = (
  numOfPlayers: number,
  letters: Letter[]
) => {
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
};

export const getRandomLetter = (arr: Letter[]) => {
  return arr[Math.floor(Math.random() * Math.floor(arr.length))];
};

export const calculateScore = () => {};
