const receive = [
  { position: 'S', left: 88, top: 53 },
  // { position: 'M1', left: 50, top: 50 },
  { position: 'L', left: 50, top: 50 },
  { position: 'H2', left: 20, top: 50 },
  { position: 'R', left: 5, top: 15 },
  { position: 'M2', left: 40, top: 5 },
  { position: 'H1', left: 80, top: 46 },
];

const transition = [
  { position: 'S', left: 68, top: 5 },
  // { position: 'M1', left: 30, top: 40 },
  { position: 'L', left: 30, top: 40 },
  { position: 'H2', left: 45, top: 55 },
  { position: 'R', left: -8, top: 34 },
  { position: 'M2', left: 36, top: 23 },
  { position: 'H1', left: 90, top: 36 },
];

const rotation1 = { receive, transition };

export default rotation1;