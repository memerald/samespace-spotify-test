import axios from 'axios';
import { BASE_PATH } from "../constants/constants";

export const fetchSongs = async () => {
  const url = `${BASE_PATH}/items/songs`;
  const response = await axios.get(url);
  return response.data;
};
