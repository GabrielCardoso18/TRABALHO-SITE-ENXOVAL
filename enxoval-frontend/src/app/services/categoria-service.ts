import { API } from "../@libs/axios";
import { ICategoria } from "../@libs/types";


const _ENDPOINT = '/categorias';

const getAll = () => (API.get(_ENDPOINT));
const create = (categoria: ICategoria) => (API.post(_ENDPOINT, categoria));
const update = (id: string, categoria: ICategoria) => (API.put(`${_ENDPOINT}/${id}`, categoria));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));

const buscaPorId = async (id: string) => {
    const { data } = await API.get(`${_ENDPOINT}/${id}`)
    return data;
}

export const CategoriaService = {
    getAll,
    create,
    buscaPorId,
    update,
    remove
}