import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': 'cf8fd5f0-984c-4596-80f7-0159abe29c29',




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
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
            .then(res => res.data)
    }
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
            .then(res => res.data)
    },
    login(data: LoginDataType ) {
        return instance.post(`auth/login`, data)
            .then(res => res.data)
    },
    logout() {
        return instance.delete(`auth/login`)
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

export type LoginDataType = {
    email: string
    password: string
    rememberMe: boolean
}