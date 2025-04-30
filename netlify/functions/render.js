// netlify/functions/render.js
exports.handler = async function(event) {
  const { photoUrl, color } = JSON.parse(event.body);
  const placeholder = `https://via.placeholder.com/800x600?text=${encodeURIComponent(color)}`;
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageUrl: placeholder })
  };
};
Add Netlify render function,
