import axios from 'axios'

const base_url = import.meta.env.VITE_API_BASE_URL

export const postReq = async ({ type, url, data }: { type: string; url: string; data: object }) => {
    return await axios(`${base_url + url}`, { method: type, data })
}
