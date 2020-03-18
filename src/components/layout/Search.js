import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: 0,
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

const Search = ({ searchDisabled, keyword, setKeyword, searchType, setSearchType }) => {
	const classes = useStyles();

	const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const [search, setSearch] = useState('');
  
  const onSearch = () => {
    setKeyword(search);
  }

	return (
		<Container>
			<TextField
				id="outlined-size-small"
        variant="outlined"
				size="small"
        style={{ width: 400 }}
        placeholder="Search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        disabled={searchDisabled}
			/>

			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
					Search Type
				</InputLabel>
				<Select
					labelId="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					value={searchType}
					onChange={(e) => setSearchType(e.target.value)}
          labelWidth={labelWidth}
          disabled={searchDisabled}
				>
					{/* <MenuItem value="">
						<em>None</em>
					</MenuItem> */}
					<MenuItem value={'movie'}>movie</MenuItem>
					<MenuItem value={'multi'}>multi</MenuItem>
					<MenuItem value={'tv'}>tv</MenuItem>
				</Select>
			</FormControl>
			<Button
				variant="contained"
				color="primary"
        style={{ marginLeft: '0.5rem' }}
        onClick={onSearch}
			>
				Search
			</Button>
		</Container>
	);
};

export default Search;
