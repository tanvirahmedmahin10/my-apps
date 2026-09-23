'use client'
import React, { useContext } from 'react';
import { AppsContext } from '../AppsContext/AppsContext';
import { IData } from '@/data.type';
import { toast } from 'react-toastify';

const Installation = ({app}:{app:IData}) => {
    const{isAdded,setIsAdded} =useContext(AppsContext)
    const alreadyAdded=isAdded.some(item=>item.id===app.id)
    const handleOnClick=()=>{
        if(alreadyAdded){
            toast.error("Duplicate Detected")
        }else{
   setIsAdded([...isAdded,app])
   toast.success("entered")}
    }
    return (
            <button  className={`${isAdded.some(item=>item.id===app.id)?"mt-3 text-center w-full rounded-lg bg-blue-100 cursor-not-allowed ":"mt-3 text-center w-full rounded-lg bg-blue-600 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800"}`} onClick={handleOnClick}>{isAdded.some(item=>item.id===app.id)?'Installed':"Install"}</button>
    );
};

export default Installation;