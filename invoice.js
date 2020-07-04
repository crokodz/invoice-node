class Invoice {
    constructor(InvoiceDate = new Date(), InvoiceNumber = "", LineItems = []) {
        this.InvoiceDate = InvoiceDate;
        this.InvoiceNumber = InvoiceNumber;
        this.LineItems = LineItems;
    }

    /**
     * Adds a line to invoice
     * @param {Object} line - a line to add
    */
    AddInvoiceLine(line) {
        this.LineItems.push(line);
    };

    /**
     * Removes a line
    */
    RemoveInvoiceLine(id) {
        this.LineItems.splice(id, 1)
    };

    /**
     * GetTotal should return the sum of (Cost * Quantity) for each line item
    */
    GetTotal() {
        return this.LineItems.map(o => o.Cost * o.Quantity).reduce((a, c) => { return a + c });
    };

    /**
     * MergeInvoices appends the items from the sourceInvoice to the current invoice
    */
    MergeInvoices(invoice) {
        this.LineItems = [...this.LineItems, ...invoice.LineItems]
    };

    /**
     * Creates a deep clone of the current invoice (all fields and properties)
    */
    Clone() {
        return this;
    };

    ToString() {
        const newDate = `${String(this.InvoiceDate.getDate()).padStart(2, '0')}/${String(this.InvoiceDate.getMonth()).padStart(2, '0')}/${this.InvoiceDate.getFullYear()}`;
        return `Invoice Number: ${this.InvoiceNumber}, InvoiceDate: ${newDate}, LineItemCount: ${this.LineItems.length}`
    };
}

module.exports = Invoice;