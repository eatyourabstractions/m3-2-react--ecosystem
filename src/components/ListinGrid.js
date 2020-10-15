import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; 

import {Link} from 'react-router-dom';

const MyUl = styled.ul`
display: flex;
flex-wrap:wrap;
padding-left: 0;
`;

const MyLi = styled.li`
list-style: none;
flex-basis: 33.333333%;
display:flex;
flex-direction: column;
margin-bottom: 20px;
padding: 0px;
`;

const MyIm = styled.img`
    width: 300px;
    height: 300px;
    margin: 0px;
    border-radius: 10px;
    &:hover{
        box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75);
    }
`;

const ListingGrid = ( {itemList} ) => {
    const listItems = itemList.map((item) =>
    <MyLi key={item.id}>
        <Link to={`items/${item.id}`} style={{textDecoration:"none", color: 'inherit'}}>
        <MyIm src={item.imageSrc} alt="" />
      <h2 style={{margin:"0px"}}>{item.name}</h2>
      
        {item.latinName}
      </Link>
    </MyLi>
  );
  return (
    <MyUl>{listItems}</MyUl>
  );
  };

  ListingGrid.propTypes = {
    itemList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        latinName: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
 

  export default ListingGrid;