import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
    baseURL: 'https://reqres.in/api/'
})

export const usersAPI = {
    fetchUsers(): Promise<AxiosResponse<ResponseType<Array<UserType>>>> {
        return instance.get<ResponseType<Array<UserType>>>(`users?per_page=12`)
            .then(res => res)
    },
    deleteUser(id: number): Promise<AxiosResponse> {
        return instance.delete(`users/${id}`)
    }
}
export type ResponseType<D = Array<Record<string, unknown>>> = {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: D;
};
export type UserType = {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
}
