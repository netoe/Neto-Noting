//

import {getAppSecondaryMenu, IMenuSection, IMenuSummaryPage, newMenuSection, newMenuSummaryItem} from 'src/mui-views/app/AppSecondaryMenu';
import {mocked} from '../resources/mocked-notes';
import {IRealNote} from '../resources/typed-notes';

export const AppMenuNotes = getAppSecondaryMenu<IRealNote, IMenuSection<IRealNote>>();
export const AppMenuSummaryPages = getAppSecondaryMenu<IMenuSummaryPage, IMenuSection<IMenuSummaryPage>>();

const secOverview = newMenuSection<IMenuSummaryPage>('sec-overview', 'Overview', [
	newMenuSummaryItem('notes', 'All Notes'),
]);
const secNotes = newMenuSection<IRealNote>('sec-notes', 'Notes',
	mocked.notes,
);
const sections: IMenuSection[] = [
	secOverview,
	secNotes,
];
export const defaultMenuNotesOverviewPage = secOverview.items[0];
const defaultMenuItemId = defaultMenuNotesOverviewPage._id;

// Resource > General Resource
export const RR = {
	sections,
	secOverview,
	secNotes,
	defaultMenuItemId,
};
