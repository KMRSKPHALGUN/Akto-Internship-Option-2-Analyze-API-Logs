# API Log Analyzer (Express + Node.js)

This project is a backend API service built using **Node.js** and **Express** that analyzes API request logs from a JSON file and returns useful insights.

It was developed as part of a backend developer assignment, and it demonstrates skills in working with JSON data, building REST APIs, and performing data aggregation.

---

## Goal

Given a sample JSON log file, this service:
- Calculates the most active IP addresses
- Detects the top 5 most-used API endpoints
- Flags and summarizes HTTP response status codes (e.g., 5xx, 4xx, 2xx)
- Returns all this insight as a JSON response when hitting a `/summary` endpoint

---

## Tech Stack

- **Node.js**
- **Express.js**
- **Built-in `fs` module** for file reading
- **Plain JavaScript** for analysis logic

---

## Project Structure

Akto-Internship-Option-2-Analyze-API-Logs/

server.js # Main Express server

routes/

    summary.js # /summary route to return insights

utils/

    analyzer.js # Core logic to generate insights

data/

    sample_api_logs.json # Input log data (provided sample)

package.json

README.md


---

## How to Run the Project

Follow these steps:

### Step 1: Clone the Repository

```bash
git clone https://github.com/KMRSKPHALGUN/Akto-Internship-Option-2-Analyze-API-Logs.git
cd api-log-analyzer
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Make Sure the Log File Exists

Ensure that sample_api_logs.json is present in the data/ folder. This is the file the API will analyze.

### Step 4: Start the Server

```bash
node server.js
```

### Step 5: Test the API

Open your browser or Postman and hit:

```bash
GET http://localhost:3000/summary
```

# Sample Output

```json
{
  "most_active_ips": [
    {
      "ip": "83.144.94.57",
      "count": 1
    },
    {
      "ip": "146.24.177.177",
      "count": 1
    },
    {
      "ip": "37.217.17.177",
      "count": 1
    },
    {
      "ip": "114.65.65.39",
      "count": 1
    },
    {
      "ip": "78.205.207.55",
      "count": 1
    },
    {
      "ip": "196.43.248.105",
      "count": 1
    },
    {
      "ip": "115.232.161.155",
      "count": 1
    },
    {
      "ip": "174.103.247.51",
      "count": 1
    },
    {
      "ip": "212.66.137.108",
      "count": 1
    },
    {
      "ip": "164.82.139.213",
      "count": 1
    },
    {
      "ip": "197.222.194.227",
      "count": 1
    },
    {
      "ip": "24.120.222.23",
      "count": 1
    },
    {
      "ip": "186.253.111.42",
      "count": 1
    },
    {
      "ip": "202.73.126.180",
      "count": 1
    },
    {
      "ip": "170.20.133.119",
      "count": 1
    },
    {
      "ip": "210.77.217.216",
      "count": 1
    },
    {
      "ip": "206.61.37.176",
      "count": 1
    },
    {
      "ip": "197.227.119.254",
      "count": 1
    },
    {
      "ip": "204.177.80.155",
      "count": 1
    },
    {
      "ip": "206.247.48.15",
      "count": 1
    },
    {
      "ip": "210.167.80.141",
      "count": 1
    },
    {
      "ip": "217.224.224.11",
      "count": 1
    },
    {
      "ip": "142.138.23.31",
      "count": 1
    },
    {
      "ip": "155.45.56.126",
      "count": 1
    },
    {
      "ip": "182.27.159.51",
      "count": 1
    },
    {
      "ip": "154.9.122.247",
      "count": 1
    },
    {
      "ip": "158.170.101.197",
      "count": 1
    },
    {
      "ip": "210.119.53.165",
      "count": 1
    },
    {
      "ip": "180.10.75.162",
      "count": 1
    },
    {
      "ip": "121.91.132.39",
      "count": 1
    },
    {
      "ip": "166.203.181.213",
      "count": 1
    },
    {
      "ip": "202.170.241.3",
      "count": 1
    },
    {
      "ip": "148.2.85.202",
      "count": 1
    },
    {
      "ip": "212.220.16.31",
      "count": 1
    },
    {
      "ip": "199.104.166.151",
      "count": 1
    },
    {
      "ip": "200.184.75.78",
      "count": 1
    },
    {
      "ip": "197.31.191.199",
      "count": 1
    },
    {
      "ip": "197.150.43.202",
      "count": 1
    },
    {
      "ip": "23.79.19.208",
      "count": 1
    },
    {
      "ip": "113.109.82.235",
      "count": 1
    },
    {
      "ip": "137.174.84.88",
      "count": 1
    },
    {
      "ip": "5.164.255.8",
      "count": 1
    },
    {
      "ip": "15.3.220.22",
      "count": 1
    },
    {
      "ip": "112.112.214.120",
      "count": 1
    },
    {
      "ip": "48.27.44.7",
      "count": 1
    },
    {
      "ip": "133.119.252.102",
      "count": 1
    },
    {
      "ip": "187.30.129.125",
      "count": 1
    },
    {
      "ip": "38.176.200.223",
      "count": 1
    },
    {
      "ip": "102.216.84.60",
      "count": 1
    },
    {
      "ip": "211.135.103.75",
      "count": 1
    }
  ],
  "top_5_endpoints": [
    {
      "endpoint": "/api/logout",
      "count": 18
    },
    {
      "endpoint": "/api/orders",
      "count": 9
    },
    {
      "endpoint": "/api/users",
      "count": 9
    },
    {
      "endpoint": "/api/data",
      "count": 8
    },
    {
      "endpoint": "/api/login",
      "count": 6
    }
  ],
  "status_code_summary": {
    "5xx_errors": 13,
    "4xx_errors": 30,
    "2xx_success": 7
  }
}
```