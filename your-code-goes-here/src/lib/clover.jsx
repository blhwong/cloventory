import axios from 'axios';

const getItems = (cb) => {
  console.log('getting items...');
  axios.get(`https://apisandbox.dev.clover.com/v3/merchants/${localStorage.merchantId}/items?access_token=${localStorage.accessToken}`)
  .then((results) => {
    cb(results);
  })
  .catch((err) => {
    console.error(err);
  });
};

const createItem = (name = 'hi', quantity = 15, cb) => {
  // console.log('creating item...');
  let data = {
    name: 'passionfruit',
    price: 110
  };
  axios.post(`https://apisandbox.dev.clover.com/v3/merchants/${localStorage.merchantId}/items?access_token=${localStorage.accessToken}`, data)
  .then((result) => {
    console.log('Successfully created item', result);
    let quantityData = {
      quantity: 66
    };
    return axios.post(`https://apisandbox.dev.clover.com/v3/merchants/${localStorage.merchantId}/item_stocks/${result.data.id}?access_token=${localStorage.accessToken}`, quantityData);
  })
  .then((result2) => {
    console.log('Success 2', result2);
  })
  .catch((err) => {
    console.error(err);
  });
};

const deleteItem = (id) => {
  console.log('deleting item...');
  axios.delete(`https://apisandbox.dev.clover.com/v3/merchants/${localStorage.merchantId}/items/${id}?access_token=${localStorage.accessToken}`)
  .then(() => {
    console.log('Successfully deleted');
  })
  .catch((err) => {
    console.error(err);
  });
};

const updateItem = (id, name, quantity) => {
  console.log('updating item...');
  if (name) {
    let data = {
      name: name
    };
    axios.post(`https://apisandbox.dev.clover.com/v3/merchants/${localStorage.merchantId}/items/${id}?access_token=${localStorage.accessToken}`, data)
    .then((result) => {
      console.log('Successfully updated name');
    })
    .catch((err) => {
      console.error(err);
    });
  }
  if (quantity) {
    let data = {
      quantity: quantity
    };
    axios.post(`https://apisandbox.dev.clover.com/v3/merchants/${localStorage.merchantId}/item_stocks/${id}?access_token=${localStorage.accessToken}`, data)
    .then((result) => {
      console.log('Successfully updated quantity', result);
    })
    .catch((err) => {
      console.error(err);
    });
  }
};

export default {
  getItems: getItems,
  createItem: createItem,
  deleteItem: deleteItem,
  updateItem: updateItem
};
