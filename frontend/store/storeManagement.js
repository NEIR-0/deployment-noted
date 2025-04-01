import { create } from "zustand";
import axios from "axios";
const baseUrl = import.meta.env.VITE_BASEURL;

const userStore = create((set) => ({
  data: null,
  loading: false,
  error: null,

  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const { data } = await axios.post(baseUrl + "/user");
      set({ data: data });
    } catch (error) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export default userStore;
