class InvoiceLine {
    constructor(InvoiceLineId, Cost, Quantity, Description) {
        this.InvoiceLineId = InvoiceLineId;
        this.Cost = Cost;
        this.Quantity = Quantity;
        this.Description = Description;
    }
}

module.exports = InvoiceLine;