export class Movie {
   

    constructor(
        //public name: string,
        public Year: number,
        public Title?: string,
        public Rated?: string,
        public Runtime?: string,
        public Genre?: string,
        public Director?: string,
        public Writer?: string,
        public Actors?: string,
        public Plot?: string,
        public Language?: string,
        public Country?: string,
        public Awards?: string,
        public Poster?: string,
        public imdbRating?: number,
        public imdbVotes?: string,
        public imdbID?: string,
        public Type?: string,
        public Production?: string,
        public Website?: string,
        public Response?: string,
        public BoxOffice?: string,
        public DVD?: string,
        public Metascore?: number,
        public RottenTomatoesRating?: number,
        public imdbRatingCount?: number,
        public Released?: Date

    ){
        this.Year = Number(Year);
    }

    

}
