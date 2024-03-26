# ukko-hubspot-integration
Finland has adopted HubSpot as a de facto CRM as of 2024. We are developing a hypothetical bridge to compete with Stripe.

# Ukko-HubSpot Integration

This project demonstrates a basic integration between a hypothetical payment solution, Ukko, and HubSpot, a popular CRM platform. The integration aims to automate the process of creating transactions in Ukko and updating corresponding deals in HubSpot with transaction details.

## Table of Contents

- [Getting Started](#getting-started)
 - [Prerequisites](#prerequisites)
 - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- A Ukko API key
- A HubSpot API key

### Installation

1. Clone the repository: https://github.com/yourusername/ukko-hubspot-integration.git
2. Navigate to the project directory: cd ukko-hubspot-integration
3. Install the project dependencies: npm install
4. Replace `YOUR_UKKO_API_KEY` and `YOUR_HUBSPOT_API_KEY` in `src/ukko_integration.js` with your actual API keys.

## Usage

To run the integration script, execute the following command in your terminal:

node src/ukko_integration.js

This script will attempt to create a transaction in Ukko and update the corresponding deal in HubSpot with the transaction ID. Ensure you have the necessary permissions and API keys set up correctly.

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
