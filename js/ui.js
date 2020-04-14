class UI{
    constructor(){
        // Initializing the app.
        this.init();
    }

    // Initialization.
    init(){
        // display the categories in <select>.
        this.printCategories();
    }

    // Print categories.
    printCategories(){
        const categoriesList = eventbrite.getCategoriesAPI()
            .then(categories => {
                const categoriesList = categories.categories.categories;
                const categoriesSelect = document.querySelector('#category');

                categoriesList.forEach(category => {
                    // Create the option.
                    const option = document.createElement('option');
                    option.value = category.id;
                    option.appendChild(document.createTextNode(category.name));

                    // Add to select.
                    categoriesSelect.appendChild(option);
                });
            })
            .catch(error => console.log(error));
    }

    // print messages.
    printMessage(message, className){
        // create a div.
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        // Add to HTML.
        const searchDiv = document.querySelector('#search-events');
        searchDiv.appendChild(div);

        // Remove the alert after 3 seconds.
        setTimeout( () => {
            this.removeMessage();
        }, 3000)
    }

    // Removes the message.
    removeMessage(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
}