//

import React from 'react';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {AppPageHeader} from 'src/mui-views/app/AppPageHeader';
import {AppPageParagraph} from 'src/mui-views/app/AppPageParagraph';
import {IRealNote} from '../resources/typed-notes';
import {CardNote} from '../views/CardNote';
import {useStyles} from './styles';
import {RB} from './resources';

interface IProps {
	notes?: IRealNote[];
	onSelected: (note: IRealNote) => any;
}

export const NotesHome = React.memo(({notes, onSelected}: IProps) => {
	const cls = useStyles();
	const R = useLocalizedResourcesFromContext(RB);

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
			<AppPageHeader title={R.title}/>
			<AppPageParagraph description={R.description}/>
			{renderNotes()}
		</div>
	);
});
