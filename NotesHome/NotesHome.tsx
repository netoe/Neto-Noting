//

import React from 'react';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {AppPageHeader} from 'src/mui-views/app/AppPageHeader';
import {AppPageParagraph} from 'src/mui-views/app/AppPageParagraph';
import {INotesCollectionProps, NotesCollection} from '../views/NotesCollection';
import {useStyles} from './styles';
import {RB} from './resources';

interface IProps {
}

export const NotesHome = React.memo((colProps: INotesCollectionProps) => {
	const cls = useStyles();
	const R = useLocalizedResourcesFromContext(RB);

	const renderNotes = () => (<NotesCollection {...colProps}/>);

	return (
		<div className={cls.ctnPage}>
			<AppPageHeader title={R.title}/>
			<AppPageParagraph description={R.description}/>
			{renderNotes()}
		</div>
	);
});
