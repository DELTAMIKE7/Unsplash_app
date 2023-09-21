'use client';
import { CentralizedData } from '../context';
import React, { useContext } from 'react';
import ListCss from './list.module.css';
import RandomImg from '@/components/RandomImg';
import CentralData from '../context';

const RenderImage = () => {
	
	const [data, setData] = useContext(CentralizedData);
	console.log(data);
	return (
		<>
			<div>Random Images</div>
			<RandomImg />
		</>
	);
};

export default RenderImage;
