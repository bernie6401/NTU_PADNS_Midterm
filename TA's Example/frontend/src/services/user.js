import api from "./axiosClient";

export const user = {
  async createOne({ name }) {
    const { data } = await api.post("/users", { name });
    return data;
  },
};
