const functions = require('@google-cloud/functions-framework');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

functions.http('create', async (req, res) => {
    const customer = await stripe.customers.create({
        description: 'My First Test Customer (created for API docs at https://www.stripe.com/docs/api)',
    });
    res.json({...customer,pushupdate:"pushupdate"})
});