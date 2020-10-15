import React from 'react';
import ListingGrid from './ListinGrid';
import {items} from '../data'

const Home = () =>{
    let itemList = Object.values(items).map(x => ({name:x.name, latinName: x.latinName, imageSrc: x.imageSrc, id: x.id}))
    
    return(
        <>
        <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
        <p>Browse items:</p>
        <ListingGrid itemList={itemList}/>
        </>
    );
}

export default Home;