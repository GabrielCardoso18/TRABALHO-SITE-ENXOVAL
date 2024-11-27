import { API } from "../@libs/axios";
import { IItem } from "../@libs/types";


const _ENDPOINT = '/itens';

const getItens = async (): Promise<IItem[]> => {
    const { data } = await API.get(_ENDPOINT)
    return data;
}

const getItensById = async (id: string): Promise<IItem> => {
    const { data } = await API.get(`${_ENDPOINT}/${id}`)
    return data;
}

const getByCategoriaId = async (id: string): Promise<IItem[]> => {
    const { data } = await API.get(`${_ENDPOINT}?categoryId=${id}`)
    return data;
}

export const ItemService = {
    getItens,
    getByCategoriaId,
    getItensById
}