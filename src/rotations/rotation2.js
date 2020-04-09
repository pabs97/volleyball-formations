const receive = [
  { position: 'S', left: 60, top: 10 },
  { position: 'L', left: 50, top: 57 },
  { position: 'H2', left: 20, top: 53 },
  { position: 'R', left: 66, top: 5 },
  { position: 'M2', left: 95, top: 25 },
  { position: 'H1', left: 80, top: 57 },
];

const transition = [
  { position: 'S', left: 65, top: 5 },
  { position: 'L', left: 30, top: 40 },
  { position: 'H2', left: -8, top: 34 },
  { position: 'R', left: 93, top: 33 },
  { position: 'M2', left: 45, top: 30 },
  { position: 'H1', left: 45, top: 55 },
];

const rotation1 = { receive, transition };

export default rotation1;