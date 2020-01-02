//

import React from 'react';
import {AppSecondaryMenuGroup, IMenuSummaryPage} from 'src/graphic/components/AppSecondaryMenu';
import {IRealNote} from '../resources/typed-notes';
import {AppMenuNotes, AppMenuSummaryPages, RR} from './resources';

interface IProps {
	summaryPageSelected?: IMenuSummaryPage;
	onSummaryPageSelected: (entry: IMenuSummaryPage) => any;

	noteSelected?: IRealNote;
	onNoteSelected: (entry: IRealNote) => any;
}

export const AppMenus = React.memo(({summaryPageSelected, noteSelected, onNoteSelected, onSummaryPageSelected}: IProps) => (
	<AppSecondaryMenuGroup>
		<AppMenuSummaryPages
			sections={[RR.secOverview]} color={'#099'}
			selectedMenuItemId={summaryPageSelected?._id} onSelect={(entryId, entry) => onSummaryPageSelected(entry)}
		/>
		<AppMenuNotes
			sections={[RR.secNotes]} color={'#099'}
			selectedMenuItemId={noteSelected?._id} onSelect={(entryId, entry) => onNoteSelected(entry)}
		/>
	</AppSecondaryMenuGroup>
));
