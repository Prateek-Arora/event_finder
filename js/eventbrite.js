class EventBrite{
    // Constructor
    constructor(){
        this.auth_token = 'MDFPVYFQE4LNCTVE7V6E';
    }

    // Fetch the categories for <select>.
    async getCategoriesAPI(){
        // Query the API.
        const categoriesResponse = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);

        // Return the result as json.
        const categories = await categoriesResponse.json();

        // return the object
        return {
            categories
        }
    }
}