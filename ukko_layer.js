const axios = require('axios');

async function createUkkoTransaction(dealId, amount) {
 /* This api header(s) need to be renamed reflecting https://developer.ukko.fi/api.html */
 const ukkoApiUrl = 'https://api.ukko.fi/transactions';
 const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_UKKO_API_KEY'
 };

 const transactionData = {
    dealId: dealId,
    amount: amount,
    // Add other necessary fields as required by Ukko
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
 const hubSpotApiUrl = `https://api.hubapi.com/crm/v3/objects/deals/${dealId}?hapikey=YOUR_HUBSPOT_API_KEY`;
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
    const transaction = await createUkkoTransaction('123', 100);
    await updateHubSpotWithTransaction('123', transaction.id);
 } catch (error) {
    console.error('Integration failed:', error);
 }
})();
