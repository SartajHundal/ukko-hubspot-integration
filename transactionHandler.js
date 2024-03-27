// Import necessary modules for database integration
const mysql = require('mysql');

// Create a connection pool for MySQL database
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'YOUR_DB_HOST',
  user: 'YOUR_DB_USERNAME',
  password: 'YOUR_DB_PASSWORD',
  database: 'YOUR_DB_NAME'
});

// Function to store Ukko transaction in the database
async function storeUkkoTransaction(dealId, amount, ukkoTransactionId) {
  const query = `
    INSERT INTO ukko_transactions (deal_id, amount, transaction_id, created_at)
    VALUES (?, ?, ?, NOW())
  `;

  const values = [dealId, amount, ukkoTransactionId];

  try {
    await new Promise((resolve, reject) => {
      pool.query(query, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          console.log('Ukko transaction stored in the database');
          resolve(results);
        }
      });
    });
  } catch (error) {
    console.error('Error storing Ukko transaction:', error);
    throw error;
  }
}

// Example usage
(async () => {
  try {
    // Assume transactionId is obtained from Ukko API response
    const transactionId = '123456789';
    await storeUkkoTransaction('123', 100, transactionId);
  } catch (error) {
    console.error('Error:', error);
  }
})();
