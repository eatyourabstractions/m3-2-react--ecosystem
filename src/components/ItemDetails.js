import React from 'react';
import { useParams} from "react-router-dom";
import {items, sellers} from '../data'
import styled from 'styled-components';

const Im = styled.img`
    width: 500px;
    height: 500px;
    border-radius: 30px;
`;

const Row = styled.div`
    display: flex;
    justify-content: ${(props) => props.justify};
    align-items: ${(props)=> props.align};
    
`;

const BuyNow = styled.button`
    width:350px;
    height: 70px;
    background-color: ${(props) => props.color};
    color: white;
    border-radius: 10px;
    border: 0px;

`;

const Avatar = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-top: 30px;
`;

const Title = styled.h1`
    font-size: ${(props) => props.size};
    margin-top: 0px;
    margin-bottom: 0px;
    padding-bottom: 0px;

`;

const P = styled.p`
    margin-top: ${(props) => props.mtop};
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    margin-left: ${(props)=> props.ml};
    font-style: ${(props)=> props.fontst};
`;

const Info = styled.div`
    margin-left: 30px;
`;


const ItemDetails = () =>{
    let { itemId } = useParams();
    const howMany = (qty) =>{
        console.log(qty)
        if(qty > 0){
            return (
            <BuyNow color={'blue'} onClick={()=> window.alert("added to the cart!")}>
                <P color={'white'} mtop={'20px'} size={'25px'}>{`$${items[itemId].price} - Buy Now`}</P>
            </BuyNow>
            )
        } else {
            return (
            <BuyNow color={'lightgray'}>
                <P color={'black'} mtop={'20px'} size={'25px'}>{'Out of stock'}</P>
            </BuyNow>
            )
        }
    }
    return(
        <Row>
        <Im src={`${items[itemId].imageSrc}`} alt=""/>
        <Info>
            <Title size={'70px'}>{items[itemId].name}</Title>
            <P mtop={'0px'} color={'gray'} fontst={'italic'}>{items[itemId].latinName}</P>
            
            <P mtop={'20px'} size={'30px'}>{items[itemId].description}</P>
            <P fontst={'italic'}><>Product of <b>{items[itemId].countryOfOrigin}</b> </> </P>

            {howMany(items[itemId].quantity)}
            
            <Row justify={'start'} align={'center'}>
                <Avatar src={sellers[items[itemId].sellerId].avatarSrc}/>
                <P size={'20px'} ml={'10px'}>
                    <> Sold by: <b>{`${sellers[items[itemId].sellerId].storeName}`}</b> </>
                    </P>
            </Row>
        </Info>
        </Row>
    );
}

export default ItemDetails;