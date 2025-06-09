function generateInsights(logs) {
  const ipCount = {};
  const endpointCount = {};
  const statusCount = {
    '5xx_errors': 0,
    '4xx_errors': 0,
    '2xx_success': 0
  };

  for (const entry of logs) {
    // Count IPs
    ipCount[entry.ip] = (ipCount[entry.ip] || 0) + 1;

    // Count Endpoints
    endpointCount[entry.endpoint] = (endpointCount[entry.endpoint] || 0) + 1;

    // Categorize status codes
    const status = entry.status;
    if (status >= 500) {
      statusCount['5xx_errors']++;
    } else if (status >= 400) {
      statusCount['4xx_errors']++;
    } else if (status >= 200 && status < 300) {
      statusCount['2xx_success']++;
    }
  }

  // Get top 5 endpoints
  const topEndpoints = Object.entries(endpointCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([endpoint, count]) => ({ endpoint, count }));

  // Get most active IPs
  const activeIps = Object.entries(ipCount)
    .sort((a, b) => b[1] - a[1])
    .map(([ip, count]) => ({ ip, count }));

  return {
    most_active_ips: activeIps,
    top_5_endpoints: topEndpoints,
    status_code_summary: statusCount
  };
}

module.exports = generateInsights;