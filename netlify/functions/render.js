// netlify/functions/render.js
exports.handler = async function(event) {
  // 1️⃣ Handle the browser’s preflight check
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      }
    }
  }

  // 2️⃣ Normal POST handling
  const { photoUrl, color } = JSON.parse(event.body)
  const placeholder = `https://via.placeholder.com/800x600?text=${encodeURIComponent(color)}`

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({ imageUrl: placeholder })
  }
}

