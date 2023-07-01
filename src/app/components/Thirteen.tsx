"use client"
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import { foods, filterItems } from '../lib/Searchdata';

export default function Thirteen() {
    const [query, setQuery] = useState('');
    const results = filterItems(foods, query);

    function handleChange(e: any) {
        setQuery(e.target.value);
    }

    return (
        <>
            <div className="text-2xl font-bold text-center">
                <SearchBar
                    query={query}
                    onChange={handleChange}
                />
                <hr /><br />
                <List items={results} />
            </div>
        </>
    );
}

function SearchBar({ query, onChange }: any) {
    return (
        <label>
            Search:{' '}
            <input
                placeholder='search for below items'
                value={query}
                onChange={onChange}
            /><br />
        </label>
    );
}

function List({ items }: any) {
    return (
        <table>
            <tbody>
                {items.map((food: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
                    <tr key={food.id}>
                        <td className='border-black border-r-8'>{food.name}</td>
                        <td className='pl-5 pr-5'>{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}