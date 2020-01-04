import api from "./http";
export default function BaseRequestsModel(model){
    this.list = async () => await api.get(model);
    this.show = async (id) => await api.get(model+'/'+id);
    this.create = async (data) => await api.post(model,data);
    this.update = async (data) => await api.put(model+'/'+data.id,data);
    this.delete = async (id) => await api.delete(model+'/'+id);
};
