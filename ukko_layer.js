const axios = require('axios');

/* Update the API connection string accordingly */
async function createUkkoTransaction(dealId, amount, invoiceData) {
    const ukkoApiUrl = 'https://api.ukko.fi/transactions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_UKKO_API_KEY' // Replace with your Ukko API key
    };

    /* A few of these are place-holders, like deal ID */
    const transactionData = {
        dealId: dealId,
        amount: amount,
        einvoice_address: invoiceData.einvoice_address,
        einvoice_operator: invoiceData.einvoice_operator,
        contact_person: invoiceData.contact_person,
        email: invoiceData.email,
        street_address1: invoiceData.street_address1,
        zip_code: invoiceData.zip_code,
        city: invoiceData.city,
        country: invoiceData.country,
        phone: invoiceData.phone,
        delivery_method: invoiceData.delivery_method,
        vat_rate: invoiceData.vat_rate,
        notify_overdue_and_automatic_debt_collection: invoiceData.notify_overdue_and_automatic_debt_collection,
        language: invoiceData.language,
        clients_reference: invoiceData.clients_reference
    };

    try {
        const response = await axios.post(ukkoApiUrl, transactionData, { headers });
        console.log('Transaction created in Ukko:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating transaction in Ukko:', error);
        throw error;
    }
}

async function updateHubSpotWithTransaction(dealId, transactionId) {
    const hubSpotApiUrl = `https://api.hubapi.com/crm/v3/objects/deals/${dealId}?hapikey=YOUR_HUBSPOT_API_KEY`; // Replace with your HubSpot API key
    const headers = {
        'Content-Type': 'application/json'
    };

    const updateData = {
        properties: {
            ukko_transaction_id: transactionId,
            // Add other necessary fields to update in HubSpot
        }
    };

    try {
        const response = await axios.patch(hubSpotApiUrl, updateData, { headers });
        console.log('HubSpot updated with transaction ID:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating HubSpot with transaction ID:', error);
        throw error;
    }
}

// Example usage
(async () => {
    try {
        const invoiceData = {
            einvoice_address: "example_address",
            einvoice_operator: "example_operator",
            contact_person: "example_contact_person",
            email: "example@example.com",
            street_address1: "example_street_address",
            zip_code: "12345",
            city: "example_city",
            country: "FI",
            phone: "1234567890",
            delivery_method: "EINVOICE",
            vat_rate: "20%",
            notify_overdue_and_automatic_debt_collection: true,
            language: "EN",
            clients_reference: "example_reference"
        };

        const transaction = await createUkkoTransaction('123', 100, invoiceData);
        await updateHubSpotWithTransaction('123', transaction.id);
    } catch (error) {
        console.error('Integration failed:', error);
    }
})();
