import { IData } from '@/data.type';
import React from 'react';
import AppCard from './AppCard';
export const AppPromise=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/data.json`)
    return res.json()
}

const TrendingApps = async() => {
     const AppsData=await AppPromise()
     

    return (
        <div className='container mx-auto grid grid-cols-4 gap-4'>
            {
                AppsData.slice(0,8).map((app:IData)=><AppCard key={app.id} app={app}></AppCard>)
            }
        </div>
    );
};

export default TrendingApps;