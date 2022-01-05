import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '7474e438-4aaa-4895-8c9e-b3f7589fed98'
    }
})

export const usersApi = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    }
}

export const profileApi = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(res => res.data)
    }
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
            .then(res => res.data)
    }
}

export const followApi = {
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(res => res.data)
    }
}