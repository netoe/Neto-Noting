//

import React from 'react';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {AppPageHeader} from 'src/mui-views/app/AppPageHeader';
import {AppPageParagraph} from 'src/mui-views/app/AppPageParagraph';
import {IRealNote} from '../resources/typed-notes';
import {CardNote, CardNoteSkeleton} from '../views/CardNote';
import {useStyles} from './styles';
import {RB} from './resources';

interface IProps {
	notes?: IRealNote[];
	onSelected: (note: IRealNote) => any;
}

export const NotesHome = React.memo(({notes, onSelected}: IProps) => {
	const cls = useStyles();
	const R = useLocalizedResourcesFromContext(RB);

	const renderNotes = () => (
		<div className={cls.ctnNotes}>
			{notes ? notes.map(note => (
				<CardNote key={note._id} onClick={() => onSelected(note)} note={note}/>
			)) : (
				new Array(6).fill(null).map((v, index) => (
					<CardNoteSkeleton key={index}/>
				))
			)}
		</div>
	);

	return (
		<div className={cls.ctnPage}>
			<AppPageHeader title={R.title}/>
			<AppPageParagraph description={R.description}/>
			{renderNotes()}
		</div>
	);
});
