import React, { useEffect, useState } from 'react';
import './App.css';
import TitleContainer from './components/containers/TitleContainer';
import Search from './components/layout/Search';
import TabsContainer from './components/containers/TabsContainer';

function App() {
	const [keyword, setKeyword] = useState('');
	const [searchType, setSearchType] = useState('movie');
	const [searchDisabled, setSearchDisabled] = useState(true);

	return (
		<div className="App">
			<header className="App-header">
				<TitleContainer />
			</header>
			<div className="Search">
				<Search
					searchDisabled={searchDisabled}
					keyword={keyword}
					setKeyword={setKeyword}
					searchType={searchType}
					setSearchType={setSearchType}
				/>
			</div>
			<div className="Tabs">
				<TabsContainer 
					keyword={keyword}
					searchType={searchType} 
					setSearchDisabled={setSearchDisabled}
				/>
			</div>
		</div>
	);
}

export default App;
