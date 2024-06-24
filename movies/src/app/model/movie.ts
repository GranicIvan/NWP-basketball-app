export class Movie {


    constructor(
        public name: string,
        public year: number,
        public rated?: string,
        public runtime?: string,
        public genre?: string,
        public director?: string,
        public writer?: string,
        public actors?: string,
        public plot?: string,
        public language?: string,
        public country?: string,
        public awards?: string,
        public posterURL?: string,
        public imdbRating?: number,
        public imdbVotes?: number,
        public imdbID?: string,
        public type?: string,
        public production?: string,
        public website?: string,
        public response?: string,
        public boxOffice?: string,
        public dvd?: string,
        public metascore?: number,
        public rottenTomatoesRating?: number,
        public imdbRatingCount?: number,
    ){

    }

    

}
