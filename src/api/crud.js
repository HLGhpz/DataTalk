import axios from "axios";
axios.defaults.baseURL = "./api/"

export function selectInfo(path) {
  return axios.get(path)
}

export function creatInfo(path, data) {
  return axios.post(path, data)
}

export function updateInfo(path, data) {
  return axios.put(path, data)
}

export function deleteInfo(path) {
  return axios.delete(path)
}