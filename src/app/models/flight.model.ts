export class Flight {
    public dateFrom: string;
    public dateTo: string;
    public currency: string;
    public price: number;

    constructor(dateFrom: string, dateTo: string, currency: string, price: number) {
        this.dateFrom = dateFrom;
        this.dateTo = dateTo;
        this.currency = currency;
        this.price = price;
    }
}