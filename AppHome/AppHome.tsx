//

import React from 'react';
import {LayoutAppHeader} from 'src/graphic/components/LayoutAppHeader';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {IMenuSummaryPage} from 'src/graphic/components/AppSecondaryMenu';
import {AppMenus} from '../AppMenus/AppMenus';
import {defaultMenuNotesOverviewPage} from '../AppMenus/resources';
import {NoteHome} from '../NoteHome/NoteHome';
import {NotesHome} from '../NotesHome/NotesHome';
import {mocked} from '../resources/mocked-notes';
import {IRealNote} from '../resources/typed-notes';
import {RB} from './resources';
import {useStyles} from './styles';

interface IProps {}

interface IState {
	summary?: IMenuSummaryPage;
	note?: IRealNote;
}

export const AppHome = React.memo<IProps>(() => {
	const cls = useStyles();
	const R = useLocalizedResourcesFromContext(RB);

	const [page, setSelectedPage] = React.useState({summary: defaultMenuNotesOverviewPage} as IState);

	const renderOverviewPage = () => (
		<div className={cls.page} style={{padding: 18}}>
			<h1>Hello, this is the collection of notes.</h1>
			<NotesHome notes={mocked.notes} onSelected={(note) => setSelectedPage({note})}/>
		</div>
	);

	const renderNotePage = () => page.note ? (
		<div className={cls.page}>
			<NoteHome note={page.note}/>
		</div>
	) : undefined;

	return (
		<LayoutAppHeader
			title={R.title}
			body={page.summary ? renderOverviewPage() : renderNotePage()}
			nav={
				<AppMenus
					summaryPageSelected={page.summary} onSummaryPageSelected={(summary) => setSelectedPage({summary})}
					noteSelected={page.note} onNoteSelected={(note) => setSelectedPage({note})}
				/>
			}
		/>
	);
});
