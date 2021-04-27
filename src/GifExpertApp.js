import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    const [categorias, setCategoria] = useState(['HunterXHunter']);
    // const handleAdd = () =>{
    //     setCategoria( cats => [...categorias, ''] ); // usando operador spred
    // }
    
    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories = {setCategoria}/>
        <hr/> 
        
        <bl>
            {
                categorias.map( category => (
                    <GifGrid 
                        key= {category}
                        category={category}/>
                ))
            }
        </bl>
        </>
    );
}

export default GifExpertApp;