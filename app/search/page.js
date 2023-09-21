'use client';
import SearchSection from '@/components/Search';
import { images } from '@/next.config';
import axios from 'axios';
import React, { useState } from 'react';
import ListCss from '../list/list.module.css';
import SearchCss from '@/components/compo.module.css';
import { useContext } from 'react';
import { CentralizedData } from '../context';
import RandomImg from '@/components/RandomImg';

const SearchPage = () => {
	const [slug, setSlug] = useState('');
	const [Images, setImages] = useState([]);
	// const [data, setData] = useContext(CentralizedData);
	// console.log(data);
	// const [show, setShow] = useState(false)
	// console.log(show)
	// const RandomWalaPage = ()=>{
	// 	<RandomImg />
	// }

	const SearchHandler = async e => {
		e.preventDefault();
		try {
			const { data } = await axios.get(
				`https://api.unsplash.com/search/photos?client_id=DHfWeifChPYaHySUguZUS1y_xPYDGTKh6Nu7c1lasEc&page=1&query=${slug}`
			);
			console.log(data);
			setImages(data.results);
			setSlug('');
			// setShow(true);
			// console.log(show)
		} catch (error) {
			console.log(error);
		}
	};
	let SearchRender = <RandomImg/>;
	if (Images.length > 0) {
		SearchRender = Images.map((image, idx) => {
			let downloadForceString = `&force=true`;
			console.log(image.user.for_hire);
			return (
				<div key={image.id} className={ListCss.mainImgBox}>
					<a className={ListCss.mainImgBoxAnch} href={`/photos/${image.id}`}>
						<div className={ListCss.ImgParent}>
							<img
								style={{ aspectRatio: `${image.width}/${image.height}` }}
								src={image.urls.small}
								alt=""
							/>
						</div>
					</a>
					<div className={ListCss.detailsContainer}>
						<div className={ListCss.detailsTop}>
							<div></div>
							<div className={ListCss.LikeAdd}>
								<button className={ListCss.LikeBtn} title="Like">
									<svg
										className={ListCss.LkBtnSvg}
										width="32"
										height="32"
										viewBox="0 0 24 24"
										version="1.1"
										aria-hidden="false"
									>
										<desc lang="en-US">A heart</desc>
										<path d="M21.424 4.594c-2.101-2.125-5.603-2.125-7.804 0l-1.601 1.619-1.601-1.62c-2.101-2.124-5.603-2.124-7.804 0-2.202 2.126-2.102 5.668 0 7.894L12.019 22l9.405-9.513a5.73 5.73 0 0 0 0-7.893Z"></path>
									</svg>
								</button>
								<button className={ListCss.LikeBtn} title="Collection">
									<svg
										className={ListCss.LkBtnSvg}
										width="32"
										height="32"
										viewBox="0 0 24 24"
										version="1.1"
										aria-hidden="false"
									>
										<desc lang="en-US">A plus sign</desc>
										<path d="M21.8 10.5h-8.3V2.2h-3v8.3H2.2v3h8.3v8.3h3v-8.3h8.3z"></path>
									</svg>
								</button>
							</div>
						</div>
						<div className={ListCss.detailsTop}>
							<div className={ListCss.detailsBox}>
								<span>
									<div className={ListCss.dp}>
										<img
											src={image.user.profile_image.large}
											alt="profile img"
											height={40}
										/>
									</div>
								</span>
								<span
									style={{
										display: 'flex',
										alignItems: 'start',
										justifyContent: 'center',
									}}
								>
									<div>
										<a className={ListCss.profileName} href="">
											{`${image.user.first_name} ${image.user.last_name}`}
										</a>
									</div>
									{image.user.for_hire ? (
										<div className={ListCss.profilePara}>
											<p>Available for Hire</p>
										</div>
									) : (
										<div style={{ display: 'none' }}></div>
									)}
								</span>
							</div>
							<div>
								<a
									href={`${image.links.download}${downloadForceString}`}
									className={ListCss.LikeBtn}
									title="Download"
								>
									<svg
										className={ListCss.LkBtnSvg}
										width="32"
										height="32"
										viewBox="0 0 24 24"
										version="1.1"
										aria-hidden="false"
									>
										<desc lang="en-US">Arrow pointing down</desc>
										<path d="m19.35 11.625-5.85 5.4V1.5h-3v15.525l-5.85-5.4-2.025 2.25L12 22.425l9.375-8.55-2.025-2.25Z"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div className={ListCss.bgColor}></div>
				</div>
			);
		});
	}
	const BlankSpace = () => {
		setSlug('');
	};
	return (
		<>
			{/* Search wala pura section */}
			<div
				className={`${SearchCss.SearchContainer} ${SearchCss.df}`}
				style={{
					backgroundImage: `url(https://source.unsplash.com/random)`,
				}}
			>
				<div>
					<h1 className={SearchCss.SearchHeading}>YoSplash</h1>
					<p className={SearchCss.SearchPara}>
						The internet’s source for visuals. <br /> Powered by creators
						everywhere.
					</p>
					<form onSubmit={SearchHandler} className={SearchCss.SearchForm}>
						<button className={SearchCss.btn}>🔍</button>
						<input
							type="text"
							value={slug}
							onChange={e => {
								setSlug(e.target.value);
							}}
							placeholder="Likho kiski dekhni hai"
						/>
						{/* <button onClick={BlankSpace}>x</button> */}
						<div className={SearchCss.btn} onClick={BlankSpace}>
							x
						</div>
					</form>
				</div>
			</div>
			{/* <form onSubmit={SearchHandler}>
				<input
					type="text"
					value={slug}
					onChange={e => {
						setSlug(e.target.value);
					}}
				/>
				<button>Submit</button>
			</form> */}
			{/* <SearchSection/> */}
			<div className={ListCss.ImgContainer}>
				<div className={ListCss.card}>
					{/* {Images.lenght > 0 ? SearchRender : <RandomImg />} */}
					{SearchRender}
				</div>
			</div>
		</>
	);
};
export default SearchPage;
