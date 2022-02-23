const axios   = require('axios')
const cheerio = require('cheerio')

module.exports.getCollections = (username) => {
  const collections = [];
  return axios
  .get('https://opensea.io/'+username)
  .then((res) => {
    console.log('fetched user for', username)
    const $ = cheerio.load(res.data)
    const data = $('.AssetCardFooter--collection-name');
    for(let i = 0; i < data.length; i++) {
      if(!collections.includes(data[i].attribs.href)) {
        collections.push(data[i].attribs.href)
      }
    }
  })
  .then(() => {
    return collections
  })
  .catch((err) => console.log(err))
}