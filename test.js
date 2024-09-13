import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 100,
  duration: '30s',
  cloud: {
    // Project: testing
    projectID: 3712965,
    // Test runs with the same name groups test runs together.
    name: 'Test Pr'
  }
};

export default function() {
  http.get('http://localhost:8000/getRantedInventory');
//   http.post('http://localhost:8000/addData', JSON.stringify({
//     code: "A008",
//     startDate: "03/09/2024",
//     endDate: "06/09/2024",
//     color: "purple",
//     size: "S",
//     time:"moring"
// }),{
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });
  sleep(1);
}