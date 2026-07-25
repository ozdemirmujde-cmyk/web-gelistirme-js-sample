const puppeteer = require('puppeteer')
const http = require('http')
const fs = require('fs')

const waitForUrl = (url, timeout = 15000) => {
  const start = Date.now()
  return new Promise((resolve, reject) => {
    const check = () => {
      http.get(url, (res) => {
        if (res.statusCode && res.statusCode < 400) return resolve()
        if (Date.now() - start > timeout) return reject(new Error('timeout'))
        setTimeout(check, 500)
      }).on('error', () => {
        if (Date.now() - start > timeout) return reject(new Error('timeout'))
        setTimeout(check, 500)
      })
    }
    check()
  })
}

;(async () => {
  const args = process.argv.slice(2)
  const url = args[0] || 'http://localhost:5173/'
  const out = args[1] || 'screenshots/output.png'
  const full = args.includes('--full')

  try {
    await waitForUrl(url, 20000)
  } catch (e) {
    console.error('Sunucuya erişilemiyor:', e.message)
    process.exit(1)
  }

  if (!fs.existsSync('screenshots')) fs.mkdirSync('screenshots')

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
  const page = await browser.newPage()
  await page.setViewport({ width: 1280, height: 800 })
  await page.goto(url, { waitUntil: 'networkidle2' })
  await page.screenshot({ path: out, fullPage: full })
  console.log('Saved', out)
  await browser.close()
})()
