import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import SearchContainer from '../../components/containers/SearchContainer';
import MovieList from '../contents/MovieList';
import TVList from '../contents/TVList';
import SearchList from '../contents/SearchList';

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`
	};
}

const useStyles = makeStyles(theme => ({
	root: {
		backgroundColor: theme.palette.background.paper,
	}
}));
const FullTabs = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);

		// Disable search if the current tab is not for search
		if (newValue !== 1) {
			props.setSearchDisabled(true);
		} else {
			props.setSearchDisabled(false);
		}
	};

	const handleChangeIndex = index => {
		setValue(index);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					variant="fullWidth"
					aria-label="full width tabs example"
				>
					<Tab label="Movies" {...a11yProps(0)} />
					<Tab label="Search Results" {...a11yProps(1)} />
					<Tab label="Tv Shows" {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<SwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={value}
				onChangeIndex={handleChangeIndex}
			>
				{/* TAB for rendering Movies */}
				<TabPanel value={value} index={0} dir={theme.direction}>
					<MovieList />
				</TabPanel>
				{/* TAB for rendering Search Results */}
				<TabPanel value={value} index={1} dir={theme.direction}>
          <SearchList {...props} />
				</TabPanel>
				{/* TAB for rendering Tv series */}
				<TabPanel value={value} index={2} dir={theme.direction}>
					<TVList />
				</TabPanel>
			</SwipeableViews>
		</div>
	);
};

export default FullTabs;
