import axios from 'axios'
import config from '@/config'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
class http {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }
    getInsConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {}
        }
        return
    }
    interceptors(instance) {
        instance.interceptors.request.use((config) => {
            return config
        }, (error) => {
            return Promise.reject(error)
        });
        instance.interceptors.response.use((response) => {
            return response
        }, () => {
            return Promise.reject(error)
        })
    }
    request(options) {
        const instance = axios.create()
        options = { ...this.getInsConfig(), ...options }
        this.interceptors(instance)
        return instance(options)
    }
}
export default new http(baseUrl)