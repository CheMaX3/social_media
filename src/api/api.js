import axios from "axios";

const axiosInstance = axios.create({
        withCredentials: true,
        headers: {
            "API-KEY": "cf9c3fa1-4c4e-4faa-aa9c-9d183c5a2793"
        },
        baseURL: "https://social-network.samuraijs.com/api/1.0/"
    }
);

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (
            axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
                .then(response => response.data)
        )
    }
}

export const followAPI = {
    unfollow(userId) {
        return (
            axiosInstance.delete(`follow/${userId}`)
                .then(response => response.data)
        )
    },
    follow(userId) {
        return (
            axiosInstance.post(`follow/${userId}`)
                .then(response => response.data)
        )
    }
}

export const authAPI = {
    getAuthData() {
        return (
            axiosInstance.get(`auth/me`)
                .then(response => response.data)
        )
    },
    login(email, password, rememberMe = false) {
        return (
            axiosInstance.post(`auth/login`, {email, password, rememberMe})
        )
    },
    logout() {
        return (
            axiosInstance.delete(`auth/login`)
        )
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return (
            axiosInstance.get(`profile/${userId}`)
                .then(response => response.data)
        )
    },
    getUserStatus(userId) {
        return (
            axiosInstance.get(`profile/status/${userId}`)
                .then(response => response.data)
        )
    },
    updateUserStatus(status) {
        return (
            axiosInstance.put(`profile/status/`, {status})
        )
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return (
            axiosInstance.put(`profile/photo`, formData, {headers: {"Content-Type": "multipart/form-data"}})
        )
    }
}