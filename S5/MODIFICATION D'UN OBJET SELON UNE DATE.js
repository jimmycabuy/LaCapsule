function updateStatus(arr) {
  var newTab = [];

  for (var i = 0; i < arr.length; i++) {
    var newDate = new Date(arr[i].date);
    var dayOfMonth = newDate.getDate();
    if (arr[i].from == "Paris" && dayOfMonth == 23) {
      arr[i]["status"] = "Cancelled";
      newTab.push(arr[i]);
    } else if (dayOfMonth == 23) {
      arr[i]["status"] = "Prévu";
      newTab.push(arr[i]);
    }
  }

  return newTab;
}

const travels = [
  {
    from: "Paris",
    to: "Bruxelles",
    date: "2021/11/23 09:05:00",
    status: "Prévu",
  },
  {
    from: "Londres",
    to: "Berlin",
    date: "2021/11/23 10:30:00",
    status: "Prévu",
  },
  {
    from: "Paris",
    to: "Barcelone",
    date: "2021/11/23 14:00:00",
    status: "Prévu",
  },
  {
    from: "Madrid",
    to: "Munich",
    date: "2021/11/23 09:05:00",
    status: "Prévu",
  },
  {
    from: "Paris",
    to: "Bruxelles",
    date: "2021/11/24 09:05:00",
    status: "Prévu",
  },
];
const updated = updateStatus(travels);
console.log(JSON.stringify(updated));
// Expected :
// [
//     { from: 'Paris', to: 'Bruxelles', date: '2021/11/23 09:05:00', status: 'Cancelled'},
//     { from: 'Londres', to: 'Berlin', date: '2021/11/23 10:30:00', status: 'Prévu'},
//     {from: 'Paris', to: 'Barcelone', date: '2021/11/23 14:00:00', status: 'Cancelled'},
//     {from: 'Madrid', to: 'Munich', date: '2021/11/23 09:05:00', status: 'Prévu'},
