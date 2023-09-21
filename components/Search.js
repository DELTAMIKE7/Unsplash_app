import React from 'react';
import SearchCss from './compo.module.css';

const SearchSection = () => {
	return (
		<>
			<div
				className={`${SearchCss.SearchContainer} ${SearchCss.df}`}
				style={{
					backgroundImage: `url(https://source.unsplash.com/random)`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			>
				<div>
					<h1 className={SearchCss.SearchHeading}>Unsplash</h1>
					<p className={SearchCss.SearchPara}>
						The internet’s source for visuals. <br /> Powered by creators everywhere.
					</p>
					<form   className={SearchCss.SearchForm}>
						<button>🔍</button>
						<input type="text" placeholder='Type here &     Search Images' />
						<button>X</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default SearchSection;
