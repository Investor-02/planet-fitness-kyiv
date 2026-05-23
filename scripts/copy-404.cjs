const fs = require('node:fs')
const path = require('node:path')

const dist = path.resolve(__dirname, '..', 'dist')
const index = path.join(dist, 'index.html')

fs.copyFileSync(index, path.join(dist, '404.html'))

for (const route of ['training', 'trainers', 'memberships', 'gallery', 'contacts']) {
  const routeDir = path.join(dist, route)
  fs.mkdirSync(routeDir, { recursive: true })
  fs.copyFileSync(index, path.join(routeDir, 'index.html'))
}
