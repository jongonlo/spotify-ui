import axios from "axios";

const username = "spotify";
const password = "1234";
const token = btoa(`${username}:${password}`);
axios.defaults.headers.common["Accept"] = "application/json";
const base_url = 'http://localhost:8080/codechallenge'

const configs = {
  headers: {
    "Authorization": `Basic ${token}`,
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  withCredentials: true
}

const searchTrack = async (isrc: string) => {
  return await axios
    .get(`${base_url}/getTrackMetadata?isrc=${isrc}`, configs)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.error("Error Getting the Track:", error.response.data.error);
      return error.response.data
    });
};

const addTrack = async (isrc: string) => {
  return await axios
    .post(`${base_url}/createTrack?isrc=${isrc}`, {}, configs)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.error("Error Creating the Track:", error.response.data.error);
      return error.response.data
    });
};


export { searchTrack, addTrack };
