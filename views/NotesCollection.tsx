//

import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {EnumViewModes, ViewModeIconsDefaultMobile} from 'src/mui-lib/widgets/GroupedViewModes';
import {GroupedIconButtons} from 'src/mui-lib/widgets/GroupedIconButtons';
import {IRealNote} from '../resources/typed-notes';
import {CardNote, CardNoteSkeleton} from './CardNote';

const useStyles = makeStyles({
	ctnBodyHeader: {margin: '0 8px'},
	ctnHeaderOptions: {display: 'flex', justifyContent: 'flex-end'},

	ctnNotes: {display: 'flex', flexFlow: 'row wrap'},
	ctnList: {background: 'white', borderRadius: '8px', margin: '12px 0px'},
	ctnListItemFollowed: {borderTop: '1px solid #eee'},
});

export type INotesCollectionProps = IProps

interface IProps {
	mode?: number;
	notes?: IRealNote[];
	onSelected: (note: IRealNote) => any;
}

export const NotesCollection = React.memo(({mode, notes, onSelected}: IProps) => {
	const cls = useStyles();

	const [curMode, setMode] = React.useState(EnumViewModes.Gallery);

	const renderNotes = (mode: number = curMode) => {
		switch (mode) {
			case EnumViewModes.List:
				return renderList();
			case EnumViewModes.Cards:
			case EnumViewModes.Gallery:
			default:
				return renderCards(mode);
		}
	};

	const renderList = () => (
		<List className={cls.ctnList}>
			{notes ? notes.map((note, index) => (
				<ListItem className={index === 0 ? undefined : cls.ctnListItemFollowed} button onClick={() => onSelected(note)}>
					<ListItemText primary={note.name} secondary={note.description}/>
				</ListItem>
			)) : (
				new Array(6).fill(null).map((v, index) => (
					<CardNoteSkeleton key={index}/>
				))
			)}
		</List>
	);
	const renderCards = (mode?: number) => (
		<div className={cls.ctnNotes}>
			{notes ? notes.map(note => (
				<CardNote key={note._id} mode={mode} onClick={() => onSelected(note)} note={note}/>
			)) : (
				new Array(6).fill(null).map((v, index) => (
					<CardNoteSkeleton key={index}/>
				))
			)}
		</div>
	);

	const renderHeaderTabsAndOptions = () => (
		<div className={cls.ctnBodyHeader}>
			<div className={cls.ctnHeaderOptions}>
				<GroupedIconButtons
					icons={ViewModeIconsDefaultMobile} color={'#099'}
					mode={curMode} onChange={setMode}
				/>
			</div>
		</div>
	);

	// Specify the target mode.
	if (mode) {return renderNotes(mode);}

	return (
		<div>
			{renderHeaderTabsAndOptions()}
			{renderNotes()}
		</div>
	);
});