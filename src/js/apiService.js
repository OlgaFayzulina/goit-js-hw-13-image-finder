
const API_KEY = '21328560-05cd5dc1340cc7c21280a8fdd'

export default class ApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles() {
        
        const url = 
        `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

        return fetch(url)
         .then(response => response.json())
         .then(data => {
             this.incrementPage();

             return data.hits;
         }).catch(console.log);
    }

    incrementPage() {
    this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
    return this.searchQuery;
    }

    set query(newQuery) {
    this.searchQuery = newQuery;
    }
}