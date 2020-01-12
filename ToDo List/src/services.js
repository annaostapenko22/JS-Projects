import axios from 'axios';

axios.defaults.baseURL = 'https://todo-js-31da0.firebaseio.com/todo';
export default {
  async addItem(obj) {
    try {
     return axios.post('/todo.json', obj);
    } catch (err) {
      throw new Error();
    }
  },
  async getAllItems(){
    try {
        return await axios.get('/todo.json');
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
  },
  async deleteItem(id){
    try {
        return await axios.delete(`/todo/${id}.json`);
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    },

  }

