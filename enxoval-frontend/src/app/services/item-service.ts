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
    const { data } = await API.get(`${_ENDPOINT}?categoriaId=${id}`)
    return data;
}

const putItem = async (id: string, item: IItem) => {
    return API.put(`${_ENDPOINT}/${id}`, item);
  };

export const ItemService = {
    getItens,
    getByCategoriaId,
    getItensById,
    putItem
}