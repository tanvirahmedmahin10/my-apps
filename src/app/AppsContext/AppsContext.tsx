'use client'
import { IData } from '@/data.type';
import React, { useState , createContext } from 'react';

interface IAppsContext {
    isAdded: IData[];
    setIsAdded: React.Dispatch<React.SetStateAction<IData[]>>;
}
export const AppsContext = createContext<IAppsContext>({
    isAdded: [],
    setIsAdded: () => { },
});
const CreateContext = ({ children }: { children: React.ReactNode }) => {
    const [isAdded, setIsAdded] = useState<IData[]>([]);
    const shareData = {
        isAdded,
        setIsAdded
    }
    return (
        <AppsContext.Provider value={shareData}>
            {children}
        </AppsContext.Provider>
    );
};

export default CreateContext;