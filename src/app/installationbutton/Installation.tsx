'use client'
import React, { useContext } from 'react';
import { AppsContext } from '../AppsContext/AppsContext';
import { IData } from '@/data.type';

const Installation = ({app}:{app:IData}) => {
    const{isAdded,setIsAdded} =useContext(AppsContext)
    const alreadyAdded=isAdded.some(item=>item.id===app.id)
    const handleOnClick=()=>{
        if(alreadyAdded){
            alert("Duplicate Detected")
        }else{
   setIsAdded([...isAdded,app])
   alert("entered")}
    }
    return (
        <div>
            <button onClick={handleOnClick}>Install</button>
        </div>
    );
};

export default Installation;