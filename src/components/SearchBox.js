import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className="pa2">
			<input
				className="pa3 ba b--green bg-gold"
				type="search"
				placeholder="Search robot"
				onChange={searchChange}
			/>
		</div>
	);
};
export default SearchBox;
