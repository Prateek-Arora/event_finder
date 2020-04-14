const eventbrite = new EventBrite();
const ui = new UI();


// Listeners for the submit button.
document.getElementById('submitBtn').addEventListener('click', (e) => {
    e.preventDefault();

    // get values.
    const eventName = document.getElementById('event-name').value;
    const category = document.getElementById('category').value;

    // console.log(eventName + " : " + category); 

    if(eventName != ''){
        // Query eventbrite API.
    }
    else{
        // Show an error.
        ui.printMessage('All fields are mandatory', 'text-center alert alert-danger mt-4');
    }
})