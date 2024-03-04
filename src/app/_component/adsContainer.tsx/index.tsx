"use client"

import AdsList from "@/app/_component/adsList.tsx";
import {useQuery} from "@tanstack/react-query";

const AdsContainer = ({ads}:any) => {

	const {data} = useQuery({
		queryKey:['Ads'],
		queryFn:async function(){
			const result = await fetch('https://dummyjson.com/products')
			return result.json()
		}
	})

	if (data){
		return  <AdsList adsList={data} />
	}

	return <h1>Loading</h1>
};

export default AdsContainer;
