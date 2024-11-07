export interface Ship {
    id: number,
    name: string
}

export type Ships = Ship[]

export const initialValues: Ships = [{ id: 1, name: '' }, { id: 1, name: '' }, { id: 1, name: '' }]