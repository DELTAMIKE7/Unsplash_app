'use client';
import PageCss from './page.module.css';
import axios from 'axios';
import { CentralizedData } from './context';
import { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import pic from '../public/images/unsplash2.png';

const page = () => {
	const [Data, setData] = useContext(CentralizedData);
	console.log(Data);
	useEffect(() => {
		GetImagesLink();
	}, []);

 const GetImagesLink = async () => {
		try {
			const { data } = await axios.get(
				'https://api.unsplash.com/photos?client_id=DHfWeifChPYaHySUguZUS1y_xPYDGTKh6Nu7c1lasEc&page=1'
			)
			setData(data);
			// router.push('/list');
		} catch (error) {
			console.log(error);
		}
	};
	
	// UseEffect Code for Default run function

	return (
		<>
			<div className={PageCss.main}>
				{/* <div className={PageCss.NavContainer}>

				</div> */}
				<div>
					<Image src={pic} height={200} alt="random images" />
				</div>
				<div className={PageCss.df}>
					<Link
						className={PageCss.linksBtn}
						href="/list"
					>
						Random Images 🎞️
					</Link>
					<Link className={PageCss.linksBtn} href="/search">
						Search🔍
					</Link>
				</div>
			</div>
		</>
	);
};


export default page;
