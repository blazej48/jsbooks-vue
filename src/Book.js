import {merge} from 'lodash';

export class Book {
    constructor(params) {
        merge(this, params);
        this.surname = this.author.split(' ')[1];
        const [month, year] = this.releaseDate.split('/');
        this.sortReleaseDate = new Date(+year, +month - 1);
    }
}
