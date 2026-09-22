import React from 'react';
import { AppPromise } from '../components/AppFolder/TrendingApps';
import AppCard from '../components/AppFolder/AppCard';
import { IData } from '@/data.type';

const AppPage =async () => {
    const FullAppsData=await AppPromise()
    return (
        <div className='container mx-auto grid grid-cols-4 gap-4'>
            {
                FullAppsData.map((app:IData)=><AppCard key={app.id} app={app}></AppCard>)
            }
        </div>
    );
};

export default AppPage;