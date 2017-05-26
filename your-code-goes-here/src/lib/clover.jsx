import axios from 'axios';

const getItems = () => {
  console.log('getting items...');
  axios.get(`https://apisandbox.dev.clover.com/v3/merchants/${localStorage.merchantId}/items?access_token=${localStorage.accessToken}`)
  .then((results) => {
    console.log(results);
  })
  .catch((err) => {
    console.error(err);
  });
};

const createItem = () => {
  console.log('creating item...');
};

const deleteItem = () => {
  console.log('deleting item...');
};

const updateItem = () => {
  console.log('updating item...');
};

export default {
  getItems: getItems,
  createItem: createItem,
  deleteItem: deleteItem,
  updateItem: updateItem
};
