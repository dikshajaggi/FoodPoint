import axios from "axios"

axios.defaults.baseURL = "http://localhost:8000/api/";
// axios.defaults.baseURL = "https://foodpointbackend-7mxm.onrender.com/api/"

// id -> refers to user-id

const api = {
    //---------------------------------- fetching rest data -----------------------------------
  async allRestData() {
    try {
      const res = await axios.get('all-restaurants');
      return res.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },

  async specRestData (id) {
    // id here refers to the rest id
    try {
        const res = await axios.get(`restaurants/${id}`)
        return res.data
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error
    }
  },
    //---------------------------------- fetching fav rest data -----------------------------------

    async allFavRest(id) {
        try {
          const res = await axios.get(`favrest/${id}`);
          return res.data;
        } catch (error) {
          console.error("Error fetching data:", error);
          throw error;
        }
      },

      async addFavRest(data) {
        try {
          const res = await axios.post('add-favrest', data);
          return res;
        } catch (error) {
          console.error("Error posting data:", error);
          throw error;
        }
      },

      async removeFavRest(data) {
        try {
          const res = await axios.delete('remove-favrest', data);
          return res;
        } catch (error) {
          console.error("Error deleting data:", error);
          throw error;
        }
      },

    //---------------------------------- fetching cart data -----------------------------------

    async getCartItems(id) {
        try {
          const res = await axios.get(`get-cart-items/${id}`);
          return res.data;
        } catch (error) {
          console.error("Error fetching data:", error);
          throw error;
        }
      },

      async addToCart(data) {
        try {
            const res = await axios.post('add-to-cart', data)
            return res;
        } catch (error) {
            console.error("Error posting data:", error);
            throw error;
          }
      },

      async updateCartItems(id, data) {
        try {
          const res = await axios.post(`update-cart-qty/${id}`, data);
          return res;
        } catch (error) {
          console.error("Error posting data:", error);
          throw error;
        }
      },

      async deleteSpecificCartItem(id, dishId) {
        try {
          const res = await axios.delete(`delete-specific/${id}/${dishId}`);
          return res;
        } catch (error) {
          console.error("Error deleting data:", error);
          throw error;
        }
    },

      async deleteAllCartItems(id) {
        try {
          const res = await axios.delete(`clear-cart/${id}`);
          return res;
        } catch (error) {
          console.error("Error deleting data:", error);
          throw error;
        }
      },

    //---------------------------------- fetching categories data -----------------------------------

    async getAllCategories() {
      try{
        const res = await axios.get('category');
        return res;
      } catch (error) {
        console.error("Error deleting data:", error);
        throw error
      }
    },

    async getMenu (data) {
      try {
        const res = await axios.get(`menu/${data}`)
        return res
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error
      }
    },

      //---------------------------------- fetching search data -----------------------------------

    async search (name) {
      try {
        const res = await axios.get(`search/${name}`)
        return res
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error
      }
    },

      //---------------------------------- fetching order data -----------------------------------

    async orderPlaced(data) {
      try {
          const res = await axios.post('place-order', data)
          return res;
      } catch (error) {
          console.error("Error posting data:", error);
          throw error;
        }
    },

    async getAllOders(id) {
      try{
        const res = await axios.get(`all-orders/${id}`)
        return res;
      } catch (error) {
          console.error("Error posting data:", error);
          throw error;
        }
      },

  //---------------------------------- payment -----------------------------------
    async makePayment(amount) {
      try{
        const res = await axios.post("payment", {amount})
        return res;
      } catch (error) {
          console.error("Error posting data:", error);
          throw error;
        }
    },

    async getKey () {
      try{
        const res = await axios.get("getkey")
        return res;
      } catch (error) {
          console.error("Error posting data:", error);
          throw error;
        }
    }

};

export default api