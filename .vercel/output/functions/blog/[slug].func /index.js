module.exports = (req, res) => {

  const matches = req.url.match(/\/blog\/([^/]+)(?:\/)?/)
  let slug = matches[1]
  
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(`
<!DOCTYPE html>
<html>
<head>
  <title>My blog | ${slug}</title>
</head>
<body>
  <h1>Post: ${slug}</h1>
  <p>Generated time: ${new Date().toISOString()}</p>
  
  <p>This demonstrates a SSG blog that restricts generating new paths via On-Demand ISR instead of allowing any visited paths to generate a new path.</p>
  
  <p>It works by leveraging \`expiration: false\` on a prerender to only allow generating new paths when the revalidate token is provided.</p>
  
  <!-- Authentication example is for demo purposes only. In a production system, use better authentication strategies. -->
  <p><a href="/revalidate?path=/blog/${slug}&authToken=a13f94f6-a441-47ca-95fc-9f44f3450295">Revalidate this path via On-Demand ISR</a></p>
</body>
</html>
  `)
}
