import axios from 'axios';

const getItems = (cb, sortBy) => {
  let data = {};
  if (sortBy === 'name') {
    data = {
      params: {
        orderBy: 'name'
      }
    };
  } else if (sortBy === '-name') {
    data = {
      params: {
        orderBy: 'name DESC'
      }
    };
  } else if (sortBy === 'quantity') {
    data = {
      params: {
        orderBy: 'stockCount'
      }
    };
  } else if (sortBy === '-quantity') {
    data = {
      params: {
        orderBy: 'stockCount DESC'
      }
    };
  }
  axios.get(`https://apisandbox.dev.clover.com/v3/merchants/${localStorage.merchantId}/items?access_token=${localStorage.accessToken}`, data)
  .then((results) => {
    cb(results.data.elements);
  })
  .catch((err) => {
    console.error(err);
  });
};

const updateItem = (id, name, quantity, cb) => {
  if (name) {
    let data = {
      name: name
    };
    axios.post(`https://apisandbox.dev.clover.com/v3/merchants/${localStorage.merchantId}/items/${id}?access_token=${localStorage.accessToken}`, data)
    .then((result) => {
      getItems(cb);
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
      getItems(cb);
    })
    .catch((err) => {
      console.error(err);
    });
  }
};

const createItem = (name, quantity, cb) => {
  let data = {
    name: name,
    price: 0
  };
  axios.post(`https://apisandbox.dev.clover.com/v3/merchants/${localStorage.merchantId}/items?access_token=${localStorage.accessToken}`, data)
  .then((result) => {
    updateItem(result.data.id, null, quantity, cb);
  })
  .catch((err) => {
    console.error(err);
  });
};

const deleteItem = (id, cb) => {
  axios.delete(`https://apisandbox.dev.clover.com/v3/merchants/${localStorage.merchantId}/items/${id}?access_token=${localStorage.accessToken}`)
  .then(() => {
    getItems(cb);
  })
  .catch((err) => {
    console.error(err);
  });
};

export default {
  getItems: getItems,
  createItem: createItem,
  deleteItem: deleteItem,
  updateItem: updateItem
};
