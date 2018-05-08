export class Airport {
    public iataCode: string;
    public name: string;

    constructor(iataCode: string, name: string) {
        this.iataCode = iataCode;
        this.name = name;
    }
}