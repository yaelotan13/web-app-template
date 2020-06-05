import axiosInstance from './axiosInstance';

export const fetchTopics = async() => {
    const response = await axiosInstance('/topics');
    console.log(response);
    return response;
}