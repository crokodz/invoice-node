const assert = require('assert');

const Invoice = require('./invoice.js');
const InvoiceLine = require('./invoiceLine.js');

describe('Test Create Invoice WithOne Item', () => {
    const invoice = new Invoice();
    invoice.AddInvoiceLine(new InvoiceLine(1, 6.99, 1, "Apple"));

    it('should return 1 item', () => {
        assert.equal(invoice.LineItems.length, 1);
    });

});

describe('Test Create Invoice With Multiple Items And Quantities', () => {
    const invoice = new Invoice();
    invoice.AddInvoiceLine(new InvoiceLine(1, 10.21, 4, "Banana"));
    invoice.AddInvoiceLine(new InvoiceLine(2, 5.21, 1, "Orange" ));
    invoice.AddInvoiceLine(new InvoiceLine(3, 6.21, 5, "Pineapple"));

    it('should return total price of 77.10000000000001', () => {
        assert.equal(invoice.GetTotal(), 77.10000000000001);
    });

});

describe('Test Remove Item', () => {
    const invoice = new Invoice();

    invoice.AddInvoiceLine(new InvoiceLine(1, 10.21, 1, "Orange"));
    invoice.AddInvoiceLine(new InvoiceLine(2, 10.99, 5, "Banana"));
    invoice.RemoveInvoiceLine(1);

    it('should return total price of 10.21', () => {
        assert.equal(invoice.GetTotal(), 10.21);
    });

});

describe('Test Remove Item', () => {
    const invoice1 = new Invoice();
    invoice1.AddInvoiceLine(new InvoiceLine(1, 10.21, 1, "Blueberries"));

    const invoice2 = new Invoice();
    invoice2.AddInvoiceLine(new InvoiceLine(2, 5.29, 4, "Orange"));
    invoice2.AddInvoiceLine(new InvoiceLine(3, 9.99, 1, "Banana"));

    invoice1.MergeInvoices(invoice2);

    it('should return total price of 41.36 for merged invoices', () => {
        assert.equal(invoice1.GetTotal(), 41.36);
    });

});

describe('Test Remove Item', () => {
    const invoice = new Invoice();

    invoice.AddInvoiceLine(new InvoiceLine(1, 0.99, 5, "Onion"));
    invoice.AddInvoiceLine(new InvoiceLine(2, 10.49, 2, "Watermelon"));

    const ClonedInvoice = invoice.Clone();

    it('should return total price of 25.93 for cloned invoice', () => {
        assert.equal(ClonedInvoice.GetTotal(), 25.93);
    });

});

describe('Test Invoice To String', () => {
    const invoice = new Invoice(
        new Date(),
        "1000",
        [
            new InvoiceLine(1, 1.99, 20, "Peer")
        ]
    );

    console.log(invoice.ToString())

    it('should return "Invoice Number: 1000, InvoiceDate: 28/05/2020, LineItemCount: 1"', () => {
        assert.equal(invoice.ToString(), 'Invoice Number: 1000, InvoiceDate: 28/05/2020, LineItemCount: 1');
    });

});
