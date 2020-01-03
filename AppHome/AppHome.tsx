//

import React from 'react';
import {LayoutAppHeader} from 'src/mui-views/app/LayoutAppHeader';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {IMenuSummaryPage} from 'src/mui-views/app/AppSecondaryMenu';
import {usePromiseFetcher} from 'src/mui-lib/hooks/usePromiseFetcher';
import {AppMenus} from '../AppMenus/AppMenus';
import {defaultMenuNotesOverviewPage} from '../AppMenus/resources';
import {NotesManager} from '../helpers/NotesManager';
import {NoteHome} from '../NoteHome/NoteHome';
import {NotesHome} from '../NotesHome/NotesHome';
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
	const [fetcher] = usePromiseFetcher<IRealNote[]>(() => NotesManager.readNotes().then(notes => {
		console.log('fetched notes:', fetcher);
		return notes;
	}));

	const renderOverviewPage = () => (
		<div className={cls.page} style={{padding: 18}}>
			<NotesHome notes={fetcher.data} onSelected={(note) => setSelectedPage({note})}/>
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
					notes={fetcher.data}
					summaryPageSelected={page.summary} onSummaryPageSelected={(summary) => setSelectedPage({summary})}
					noteSelected={page.note} onNoteSelected={(note) => setSelectedPage({note})}
				/>
			}
		/>
	);
});
