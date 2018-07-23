document.addEventListener('DOMContentLoaded', function(e) {
  firebaseMock = [
    {
      name: 'GO East',
      destination: 'Oshawa',
      firstTrain: '04:15',
      frequency: '30'
    },
    {
      name: 'GO West',
      destination: 'Hamilton',
      firstTrain: '03:30',
      frequency: '30'
    }
  ];

  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyD-0n59wiN163IIJPg4QmVr-Pxkuxx2h1I',
    authDomain: 'traintime-add83.firebaseapp.com',
    databaseURL: 'https://traintime-add83.firebaseio.com',
    projectId: 'traintime-add83',
    storageBucket: 'traintime-add83.appspot.com',
    messagingSenderId: '600123360081'
  };
  firebase.initializeApp(config);
  const database = firebase.database();

  const loadSchedule = () => {
    console.log('loadSchedule');
    let tableContents = '';
    const table = document.querySelector('.table-mount');

    // clear the table container
    document.querySelector('.table-mount').innerHTML = '';
    // go to db and grab the data,

    // build the table for the UI
    firebaseMock.forEach(record => {
      tableContents += `<tr>
      <td>${record.name}</td>
      <td>${record.destination}</td>
      <td>${record.frequency}</td>
      <td>need to add</td>
      <td>need to add</td>
    </tr>`;

      table.innerHTML = tableContents;
    });

    // Insert the table into the UI
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Input Values
    const name = document.getElementById('trainName').value;
    const destination = document.getElementById('destination').value;
    const frequency = document.getElementById('frequency').value;
    const firstTrain = document.getElementById('firstTrain').value;

    console.log(name, destination, frequency, firstTrain);
    // build up the object that will be saved into the DB
    // save the data on the db
    // update the view with the new data
    loadSchedule();
  };

  // Run the app
  loadSchedule();
  document.querySelector('form').addEventListener('submit', handleSubmit);
});
