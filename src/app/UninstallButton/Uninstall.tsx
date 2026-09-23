'use client'
import React, { useContext } from 'react';
import { AppsContext } from '../AppsContext/AppsContext';
import { IData } from '@/data.type';
import { toast } from 'react-toastify';

const UnInstallButton = ({data}:{data:IData}) => {
    const{isAdded,setIsAdded} =useContext(AppsContext)
    const removeButton=isAdded.filter((add:IData)=>add.id!==data.id)
    const handleRemove=()=>{
        setIsAdded(removeButton)
        toast.error("button removed")
    }
    return (
        <button 
  onClick={handleRemove}
  className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700 active:bg-red-200 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-500/20"
>
  Delete
</button>
    );
};

export default UnInstallButton;