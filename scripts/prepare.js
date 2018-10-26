const axios = require('axios')
const fs = require('fs-extra')

async function main() {
  const { data } = await axios.get('https://raw.githubusercontent.com/egoist/poi/master/packages/poi/lib/default-template.html')
  await fs.writeFile('data/default-template.html', data, 'utf8')
}

main()