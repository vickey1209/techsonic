const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    customerTradeName: { type: String, required: true },
    accountStatus: { type: String, enum: ['Active', 'Inactive'], required: true },
    creditRating: { type: String, enum: ['Approved', 'Pending', 'Cod'], required: true },
    billingLevel: { type: String, enum: ['Company', 'Site Specific'], required: true },
    paymentMethod: { type: String, enum: ['Check', 'Wire', 'Credit Card'], required: true },
    timberlineId: { type: String, required: false },
    environmentalAuditCompleted: { type: Boolean, default: false },
    taxStatus: { type: String, enum: ['Taxable', 'Tax Exempt'], required: true },
    taxGroup: { type: String, enum: ['Exempt', 'GST'], required: true },
    address: {
        line1: { type: String, required: true },
        line2: { type: String },
        line3: { type: String },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true }
    },
    phone: { type: String, required: true },
    fax: { type: String, required: false },
    email: { type: String, required: true },
    billingContact: { type: String, required: true }
});

module.exports = mongoose.model('Customer', customerSchema);
