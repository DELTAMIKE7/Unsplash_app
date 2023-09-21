'use client';
import { CentralizedData } from '@/app/context';
import React, { useContext } from 'react';
import ListCss from '../app/list/list.module.css';

const RandomImg = () => {
	const [data, setData] = useContext(CentralizedData);
	console.log(data);
	let rederingimg = <p>Loading ....</p>;
	if (data.length > 0) {
		rederingimg = data.map((image, ix) => {
			let downloadForceString = `&force=true`;
			// console.log(image.user.first_name);
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
											src={image.user.profile_image.medium}
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
											<svg
												width="32"
												height="32"
												class="nD8iJ"
												viewBox="0 0 24 24"
												version="1.1"
												aria-hidden="false"
											>
												<desc lang="en-US">A checkmark inside of a circle</desc>
												<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6-6.1 1.5 1.5-7.5 7.6z"></path>
											</svg>
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

	return (
		<>
			<div className={ListCss.ImgContainer}>
				<div className={ListCss.card}>{rederingimg}</div>
			</div>
		</>
	);
};

export default RandomImg;
