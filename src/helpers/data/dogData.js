import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getDogs = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dogs.json`)
    .then((res) => {
      const dogs = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        dogs.push(res.data[fbKey]);
      });
      resolve(dogs);
    })
    .catch(err => reject(err));
});

const addNewDogToDatabase = dogObject => axios.post(`${baseUrl}/dogs.json`, dogObject);

const deleteDogFromDatabase = dogId => axios.delete(`${baseUrl}/dogs/${dogId}.json`);

export default { getDogs, addNewDogToDatabase, deleteDogFromDatabase };
