const Invoice = require('./invoice.js');
const InvoiceLine = require('./invoiceLine.js');

function Main() {
    console.log("Welcome to Xero Tech Test!");

    CreateInvoiceWithOneItem();
    CreateInvoiceWithMultipleItemsAndQuantities();
    RemoveItem();
    MergeInvoices();
    CloneInvoice();
    InvoiceToString();
}

function CreateInvoiceWithOneItem() {
    const invoice = new Invoice();
    invoice.AddInvoiceLine(new InvoiceLine(1, 6.99, 1, "Apple"));
    console.log(invoice.LineItems);
}

function CreateInvoiceWithMultipleItemsAndQuantities () {
    const invoice = new Invoice();
    invoice.AddInvoiceLine(new InvoiceLine(1, 10.21, 4, "Banana"));
    invoice.AddInvoiceLine(new InvoiceLine(2, 5.21, 1, "Orange" ));
    invoice.AddInvoiceLine(new InvoiceLine(3, 6.21, 5, "Pineapple"));
    console.log(invoice.GetTotal());
}

function RemoveItem() {
    const invoice = new Invoice();

    invoice.AddInvoiceLine(new InvoiceLine(1, 10.21, 1, "Orange"));
    invoice.AddInvoiceLine(new InvoiceLine(2, 10.99, 5, "Banana"));

    invoice.RemoveInvoiceLine(1);

    console.log(invoice.GetTotal());
}

function MergeInvoices() {
    const invoice1 = new Invoice();

    invoice1.AddInvoiceLine(new InvoiceLine(1, 10.21, 1, "Blueberries"));

    const invoice2 = new Invoice();

    invoice2.AddInvoiceLine(new InvoiceLine(2, 5.29, 4, "Orange"));
    invoice2.AddInvoiceLine(new InvoiceLine(3, 9.99, 1, "Banana"));

    invoice1.MergeInvoices(invoice2);

    console.log(invoice1.GetTotal());
}

function CloneInvoice() {
    const invoice = new Invoice();

    invoice.AddInvoiceLine(new InvoiceLine(1, 0.99, 5, "Onion"));
    invoice.AddInvoiceLine(new InvoiceLine(2, 10.49, 2, "Watermelon"));

    const ClonedInvoice = invoice.Clone();
    console.log(ClonedInvoice.GetTotal());
}

/*
* Outputs string containing the following (replace [] with actual values):
* Invoice Number: [InvoiceNumber], InvoiceDate: [dd/MM/yyyy], LineItemCount: [Number of items in LineItems]
*/
function InvoiceToString() {
    const invoice = new Invoice(
        new Date(),
        "1000",
        [
            new InvoiceLine(1, 1.99, 20, "Peer")
        ]
    );

    console.log(invoice.ToString())
}


Main();