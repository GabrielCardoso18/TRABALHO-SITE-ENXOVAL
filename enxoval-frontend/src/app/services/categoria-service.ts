import { API } from "../@libs/axios";
import { ICategoria } from "../@libs/types";


const _ENDPOINT = '/categorias';

const getAll = () => (API.get(_ENDPOINT));
const create = (categoria: ICategoria) => (API.post(_ENDPOINT, categoria));
const getById = (id: string) => (API.get(`${_ENDPOINT}/${id}`));
const update = (id: string, categoria: ICategoria) => (API.put(`${_ENDPOINT}/${id}`, categoria));
const remove = (id: string) => (API.delete(`${_ENDPOINT}/${id}`));

export const CategoriaService = {
    getAll,
    create,
    getById,
    update,
    remove
}