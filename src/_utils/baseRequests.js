import api from "./http";
export default function baseRequests(route){
    return {
        async list() {
            return await api.get(route)
        },
        async show(id) {
            return await api.get(route+'/'+id)
        },
        async create(data) {
            return await api.post(route,data)
        },
        async update(id,data) {
            return await api.put(route+'/'+id,data)
        },
        async delete(id) {
            return await api.delete(route+'/'+id)
        },
    }
};
