const client = require("./client");

client.GetAllNews({}, (error, news) => {
  // if (!error) throw error;
  console.log(news);
});