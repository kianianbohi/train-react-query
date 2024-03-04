import Link from 'next/link';
import AdsCard from '../adsCard.tsx';

const AdsList = ({adsList}:any) => {
	return (
	<div>
		{adsList.products.map((item: any)=><AdsCard ads={item} key={item.id}/>)}
	</div>
	);
};

export default AdsList;
