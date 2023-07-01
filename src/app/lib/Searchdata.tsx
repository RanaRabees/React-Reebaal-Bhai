"use client"
export function filterItems(items: any, query: any) {
    query = query.toLowerCase();
    return items.filter((item: { name: string; }) =>
        item.name.split(' ').some(word =>
            word.toLowerCase().startsWith(query)
        )
    );
}

export const foods: any = [
    {
        id: 1,
        name: ' item1',
        description: 'Lorem ipsum dolor, sit amet adipisicing elit. Animi dolores quis quae, non sunt itaque ullam perspiciatis?'
    }, {
        id: 2,
        name: 'item2',
        description: 'Lorem ipsum dolor, sit amet adipisicing elit. Animi dolores quis quae, non sunt itaque ullam perspiciatis?'
    }, {
        id: 3,
        name: 'item3',
        description: 'Lorem ipsum dolor, sit amet adipisicing elit. Animi dolores quis quae, non sunt itaque ullam perspiciatis?'
    }, {
        id: 4,
        name: 'item4',
        description: 'Lorem ipsum dolor, sit amet adipisicing elit. Animi dolores quis quae, non sunt itaque ullam perspiciatis?'
    }, {
        id: 5,
        name: 'item5',
        description: 'Lorem ipsum dolor, sit amet adipisicing elit. Animi dolores quis quae, non sunt itaque ullam perspiciatis?'
    }, {
        id: 6,
        name: 'item6',
        description: 'Lorem ipsum dolor, sit amet adipisicing elit. Animi dolores quis quae, non sunt itaque ullam perspiciatis?'
    }, {
        id: 7,
        name: 'item7',
        description: 'Lorem ipsum dolor, sit amet adipisicing elit. Animi dolores quis quae, non sunt itaque ullam perspiciatis?'
    }, {
        id: 8,
        name: 'item8',
        description: 'Lorem ipsum dolor, sit amet adipisicing elit. Animi dolores quis quae, non sunt itaque ullam perspiciatis?'
    }, {
        id: 9,
        name: 'item9',
        description: 'Lorem ipsum dolor, sit amet adipisicing elit. Animi dolores quis quae, non sunt itaque ullam perspiciatis?'
    }, {
        id: 10,
        name: 'item10',
        description: 'Lorem ipsum dolor, sit amet adipisicing elit. Animi dolores quis quae, non sunt itaque ullam perspiciatis?'
    }
];
