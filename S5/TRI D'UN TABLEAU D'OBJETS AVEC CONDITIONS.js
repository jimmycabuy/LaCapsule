function ranking(arr) {
  arr.sort(function (a, b) {
    return b.points - a.points || b.goal_average - a.goal_average;
  });

  return arr;
}

const teams = [
  { team: "Nice", points: 28, goal_average: 3 },
  { team: "Lyon", points: 34, goal_average: 3 },
  { team: "PSG", points: 40, goal_average: 10 },
  { team: "Marseille", points: 30, goal_average: -2 },
  { team: "Lille", points: 30, goal_average: 0 },
];
const result = ranking(teams);
console.log(JSON.stringify(result));
// Expected :
// [
//     { team: 'PSG', points: 40, goal_average: 10 },
//     { team: 'Lyon', points: 34, goal_average: 3 },
//     { team: 'Lille', points: 30, goal_average: 0 },
//     { team: 'Marseille', points: 30, goal_average: -2 },
//     { team: 'Nice', points: 28, goal_average: 3 }
// ]
