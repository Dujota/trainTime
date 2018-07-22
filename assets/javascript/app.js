document.addEventListener('DOMContentLoaded', function(e) {
  const loadSchedule = () => {
    console.log('loadSchedule');
    // clear the table container
    // go to db and grab the data,
    // build the table for the UI
    // Insert the table into the UI
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('clicked');
    // ui variables
    const name = document.getElementById('trainName');
    const destination = document.getElementById('destination');
    const frequency = document.getElementById('frequency');
    const firstTrain = document.getElementById('firstTrain');

    // build up the object that will be saved into the DB
    // save the data on the db
    // update the view with the new data
    loadSchedule();
  };

  document.querySelector('form').addEventListener('submit', handleSubmit);
});
