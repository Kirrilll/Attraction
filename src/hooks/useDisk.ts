import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import { OAuthToken } from '../constans';
import { DataState, IDiskData } from '../types';



export const useDisk = (url: string, dependencies: React.DependencyList) => {
    const [status, setStatus] = useState<DataState>(DataState.LOADING);
    const [data, setData] = useState<IDiskData>();

    useEffect(() => {
        axios({
            method: 'GET',
            url: url,
            headers: {'Authorization' : OAuthToken} 

        }).then(function (response){
            if(response.status == 200){
                setData(response.data);
                setStatus(DataState.LOADED);
            }
            else{setStatus(DataState.ERROR)}
            
        });
    }, dependencies);


    return {status, data};
}