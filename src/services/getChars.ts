import { CharProps } from "../types";
import api from "./api";

const basicRequest = async (endpoint: string) => {
    const { data } = await api.get<CharProps[]>(`/${endpoint}`);
    return data;
}

export async function getChars() {
    return [
        {
            slug: 'heroes',
            title: 'Heróis',
            items: await basicRequest('heroes')
        },
        {
            slug: 'villains',
            title: 'Vilões',
            items: await basicRequest('villains')
        },
        {
            slug: 'antiHeroes',
            title: 'Anti-Heróis',
            items: await basicRequest('antiHeroes')
        },
        {
            slug: 'aliens',
            title: 'Áliens',
            items: await basicRequest('aliens')
        },
        {
            slug: 'humans',
            title: 'Humanos',
            items: await basicRequest('humans')
        }
    ];
}