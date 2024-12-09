const express = require('express');
const Customer = require('./models/customer'); 
const PORT = process.env.port || 5000
const db = require('../src/db/conn')
const app = express();
app.use(express.json());

// API endpoint
app.post('/api/customers', async (req, res) => {
    try {
        const customerData = req.body;
        
       
        const newCustomer = new Customer({
            customerName: customerData.customerName,
            customerTradeName: customerData.customerTradeName,
            accountStatus: customerData.accountStatus,
            creditRating: customerData.creditRating,
            billingLevel: customerData.billingLevel,
            paymentMethod: customerData.paymentMethod,
            timberlineId: customerData.timberlineId,
            environmentalAuditCompleted: customerData.environmentalAuditCompleted,
            taxStatus: customerData.taxStatus,
            taxGroup: customerData.taxGroup,
            address: {
                line1: customerData.address.line1,
                line2: customerData.address.line2,
                line3: customerData.address.line3,
                city: customerData.address.city,
                state: customerData.address.state,
                zipCode: customerData.address.zipCode
            },
            phone: customerData.phone,
            fax: customerData.fax,
            email: customerData.email,
            billingContact: customerData.billingContact
        });


        const savedCustomer = await newCustomer.save();
        res.status(201).json({ message: 'Customer data saved successfully', data: savedCustomer });
    } catch (error) {
        res.status(500).json({ message: 'Error saving customer data', error: error.message });
    }
});



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
