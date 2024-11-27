import { API } from "../@libs/axios";
import { IItem } from "../@libs/types";


const _ENDPOINT = '/itens';

const getItens= async (): Promise<IItem[]> => {
    const { data } = await API.get(_ENDPOINT)
    return data;
}

const getItensPorId = async (id: string): Promise<IItem> => {
    const { data } = await API.get(`${_ENDPOINT}/${id}`)
    return data;
}

const getPorCategoriaId = async (id: string): Promise<IItem[]> => {
    const { data } = await API.get(`${_ENDPOINT}?categoriaId=${id}`)
    return data;
}

export const ItemService = {
    getItens,
    getPorCategoriaId,
    getItensPorId
}