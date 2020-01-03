//

import React from 'react';
import {IRealNote} from '../resources/typed-notes';
import {CardNote} from '../views/CardNote';
import {useStyles} from './styles';

interface IProps {
	notes?: IRealNote[];
	onSelected: (note: IRealNote) => any;
}

export const NotesHome = React.memo(({notes, onSelected}: IProps) => {
	const cls = useStyles();

	const renderNotes = () => {
		if (!notes) {return;}
		return (
			<div className={cls.ctnNotes}>
				{notes.map(note => (
					<CardNote key={note._id} onClick={() => onSelected(note)} note={note}/>
				))}
			</div>
		);
	};

	return (
		<div className={cls.ctnPage}>
			{renderNotes()}
		</div>
	);
});
