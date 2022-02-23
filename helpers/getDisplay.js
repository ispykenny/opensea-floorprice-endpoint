module.exports.getDisplay = (dataDump) => (
  {
    collection: JSON.parse(dataDump.split(`"name":`)[1].split(",")[0]),
    price: JSON.parse(dataDump.split(`floorPrice":{"unit":`)[1].split(`}`)[0]),
    image: "https://"+dataDump.split('pageProps')[1]
    .split("imageUrl")[1].split(`,`)[0]
    .split("https://")[1].split("=")[0]+"=s130"
  }
)