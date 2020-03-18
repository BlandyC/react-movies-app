import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
	formControl: {
		margin: 0,
		minWidth: 120
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

const DropDownMovies = ({ category, setCategory }) => {
	const classes = useStyles();

	const inputLabel = React.useRef(null);
	const [labelWidth, setLabelWidth] = React.useState(0);

	const handleChange = event => {
    setCategory(event.target.value);
	};

	return (
		<Container>
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
					Category
				</InputLabel>
				<Select
					labelId="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					value={category}
					onChange={handleChange}
					labelWidth={labelWidth}
				>
					{/* <MenuItem value="">
						<em>None</em>
					</MenuItem> */}
					<MenuItem value={'now_playing'}>now playing</MenuItem>
					<MenuItem value={'popular'}>popular</MenuItem>
					<MenuItem value={'top_rated'}>top rated</MenuItem>
					<MenuItem value={'upcoming'}>upcoming</MenuItem>
				</Select>
			</FormControl>
		</Container>
	);
};
export default DropDownMovies;
