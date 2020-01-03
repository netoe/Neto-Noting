//

import React from 'react';
import {AppSecondaryMenuGroup, IMenuSummaryPage} from 'src/mui-views/app/AppSecondaryMenu';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {IRealNote} from '../resources/typed-notes';
import {AppMenuNotes, AppMenuSummaryPages, RB, RB2, RR} from './resources';

interface IProps {
	notes?: IRealNote[];

	summaryPageSelected?: IMenuSummaryPage;
	onSummaryPageSelected: (entry: IMenuSummaryPage) => any;

	noteSelected?: IRealNote;
	onNoteSelected: (entry: IRealNote) => any;
	// FIX-ME Is it okay or right to put the resource here.
	R?: typeof RB2.df;
}

export const AppMenus = React.memo((
	{
		notes = [],
		summaryPageSelected, onSummaryPageSelected,
		noteSelected, onNoteSelected,
		R = useLocalizedResourcesFromContext(RB2),
	}: IProps,
) => (
	<AppSecondaryMenuGroup>
		<AppMenuSummaryPages
			sections={[R.secOverview]} color={'#099'}
			selectedMenuItemId={summaryPageSelected?._id} onSelect={(entryId, entry) => onSummaryPageSelected(entry)}
		/>
		<AppMenuNotes
			sections={[{...R.secNotes, items: notes}]} color={'#099'}
			selectedMenuItemId={noteSelected?._id} onSelect={(entryId, entry) => onNoteSelected(entry)}
		/>
	</AppSecondaryMenuGroup>
));
