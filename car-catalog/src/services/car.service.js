import axios from "axios";
export const CarService = {
  async getAll() {
    const response = await axios.get("http://localhost:3000/cars");
    return response.data;
  },
  async getById(id) {
    const response = await axios.get(`http://localhost:3000/cars?id=${id}`);
    return response.data[0];
  },

  async create(data, id) {
    return axios.post("http://localhost:3000/cars", 
      data,
    );
  },
};
