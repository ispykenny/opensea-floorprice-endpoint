const express = require('express');
const PORT = process.env.PORT || 3333
const app = express();
const { getCollections } = require('./helpers/getCollections')
const { getFloors } = require('./helpers/getFloors')


const displayAllData = async (username, response) => {
  const collections = await getCollections(username);
  const theFloors = await getFloors(collections)
  Promise.all(theFloors).then((res) => response.json(res))
}

app.get('/:username', (request, response) => {
  const username = request.params.username;
  displayAllData(username, response);
})

app.listen(PORT, () => console.log(`listening on ${PORT}`))