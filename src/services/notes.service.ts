import axios from 'axios';
const baseUrl = 'http://localhost:3001/notes';

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (newObject: any) => {
  return axios.post(baseUrl, newObject);
};

const update = (id: any, newObject: any) => {
  console.log(id, newObject);
  return axios.put(`${baseUrl}/${id}`, newObject);
};

const deleteNote = (id: any) => {
  return axios.delete(`${baseUrl}/${id}`, { id: id } as any);
};

const noteServices = {
  getAll,
  create,
  update,
  deleteNote,
};

export default noteServices;
