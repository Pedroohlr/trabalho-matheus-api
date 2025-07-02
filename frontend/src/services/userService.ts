import axios, { type AxiosResponse } from 'axios';

export interface IUser {
  id?: number;
  name: string;
  email: string;
}

export interface ILoginResponse {
  token: string;
}

const API = {
  login: (creds: {
    username: string;
    password: string;
  }): Promise<AxiosResponse<ILoginResponse>> =>
    axios.post('/auth/login', creds),

  listUsers: (): Promise<AxiosResponse<IUser[]>> =>
    axios.get('/api/users'),

  getUser: (id: number): Promise<AxiosResponse<IUser>> =>
    axios.get(`/api/users/${id}`),

  createUser: (u: IUser): Promise<AxiosResponse<IUser>> =>
    axios.post('/api/users', u),

  updateUser: (
    id: number,
    u: IUser
  ): Promise<AxiosResponse<{ message: string }>> =>
    axios.put(`/api/users/${id}`, u),

  deleteUser: (
    id: number
  ): Promise<AxiosResponse<{ message: string }>> =>
    axios.delete(`/api/users/${id}`)
};

export default API;
