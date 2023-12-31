# Olympic 100m Race Data Server

This repository contains a server built using MongoDB, Express, and Node.js (MEN stack) that allows you to add and fetch Olympic 100m race data, organized by ranking. The server provides endpoints to input race results and retrieve the results based on ranking.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- MongoDB: [Download and install MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/olympic-100m-race-server.git
   ```

2. Navigate to the project directory:

   ```bash
   cd olympic-100m-race-server
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

   This will launch the server at `http://localhost:3000`.

## Endpoints

### Add Race Result

- **Endpoint:** `/add-result`
- **Method:** POST
- **Request Body:**

   ```json
   {
       "athleteName": "Usain Bolt",
       "country": "Jamaica",
       "timeInSeconds": 9.63,
       "ranking": 1
   }
   ```

- **Response:**

   ```json
   {
       "message": "Race result added successfully"
   }
   ```

### Get Race Results by Ranking

- **Endpoint:** `/results/:ranking`
- **Method:** GET
- **Parameters:**
   - `ranking`: The desired ranking (e.g., 1, 2, 3)

- **Response:**

   ```json
   {
       "athleteName": "Usain Bolt",
       "country": "Jamaica",
       "timeInSeconds": 9.63,
       "ranking": 1
   }
   ```

## Contributing

Contributions are welcome! If you find any issues or would like to enhance the functionality, feel free to open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding! If you have any questions or need further assistance, please don't hesitate to contact us.
