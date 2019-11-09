export class Book {
    name:string;
    author:string;
    publishDate:string;
    publisherCompany:string;
    description:string;
    rating:number;
    category:string[];
    image:string;
    constructor(name:string,author:string, publishDate:string, publisherCompany:string,description:string,
        rating:number,categoty:string[],image:string)
        {
            this.name=name;
            this.author=author;
            this.publishDate=publishDate;
            this.publisherCompany=publisherCompany;
            this.description=description;
            this.rating=rating;
            this.category=categoty;
            this.image=image;

        }

        

}
