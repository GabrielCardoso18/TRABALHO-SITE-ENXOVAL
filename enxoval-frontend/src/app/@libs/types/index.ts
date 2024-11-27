export interface ICategoria {
    id?: string;
    descricao: string;
}

export interface IItem {
    id?: string;
    nome: string;
    descricao: string;
    foto: string;
    preco: number;
    vendiddo: boolean;
    categoria: ICategoria;
}