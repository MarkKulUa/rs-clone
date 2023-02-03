async function fetchData(dir, method, body) {
  const url = `http://localhost:3000/${dir}`;

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(url, options);

  return response.json();
}

export default fetchData;
