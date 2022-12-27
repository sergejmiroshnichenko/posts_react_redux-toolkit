import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const getUsers = async () => {
    const requestConfig = {
        url: '/users',
        method: 'get',
    };

    const response = await axiosInstance.request(requestConfig);

    return response.data;
};

export const fetchUserPostList = async (userId) => {
    const userRequestConfig = {
        url: `/users/${userId}`,
        method: 'get',
    };

    const userResponse = await axiosInstance.request(userRequestConfig);

    const user = userResponse.data;

    const userPostListRequestConfig = {
        url: `/users/${userId}/posts`,
        method: 'get',
    };

    const userPostListRequestResponse = await axiosInstance(
        userPostListRequestConfig,
    );

    const postList = userPostListRequestResponse.data;

    return { user, postList };
};

export const fetchUserAlbumList = async (userId) => {
    const requestConfig = {
        url: `/users/${userId}/albums`,
        method: 'get',
    };

    const response = await axiosInstance(requestConfig);

    return response.data;
};
