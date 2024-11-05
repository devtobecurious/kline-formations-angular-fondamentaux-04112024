/**
 * commentaire de mon interface
 */
export interface Character {
    id?: number
    surname: string
}

export type List<T> = T[]

export type Characters = List<Character>