import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const axiosSecure = axios.create({
    baseURL: 'https://twelve-assignment-server-indol.vercel.app', 
  });
const useAxios = () => {
  const {logOutUser} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
          const token = localStorage.getItem('valid-token');
          if (token) {
            config.headers.authorization = `Bearer ${token}`;
          }
          return config;
        });
    
        axiosSecure.interceptors.response.use(
          (response) => response,
          async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
              await navigate('/login')
            }
            return Promise.reject(error);
          }
        );
      }, [logOutUser, navigate]);

    return [axiosSecure]
};

export default useAxios;