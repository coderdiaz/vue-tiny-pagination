import axios from 'axios'
const API_URL = `https://reqres.in/api`

/**
 * Function to get a users from API
 * @param {Number} page
 * @return AxiosPromise
 */
export const getUsers = (page = 1) => {
  return axios.get(`${API_URL}/users?per_page=10&page=${page}`)
}
