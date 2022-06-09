import axios from './axios'
export const getMenu = (data) => {
    return axios.request({
        url: '/permission/getMenu',
        method: 'POST',
        data
    })
}