const axios = require('axios');
const moment = require('moment')
const {getDisplay} = require('./getDisplay');

module.exports.getFloors = (collections) => {
  let promises = [];

  for(let i = 0; i < collections.length; i++) {
    promises.push(
      axios
      .get(`https://opensea.io${collections[i]}`)
      .then((res) => {
        const dataDump = res.data;
        const {collection, price, image} = getDisplay(dataDump)

        return {
          collection: collection,
          price: price,
          time: moment().format('MMMM Do YYYY, h:mm a'),
          image: image,
          url: `https://opensea.io${collections[i]}`
        }
      })
    )
  }
  return promises;
}