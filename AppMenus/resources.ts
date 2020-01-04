//

import {getAppSecondaryMenu, IMenuSection, IMenuSummaryPage, newMenuSection, newMenuSummaryItem} from 'src/mui-views/app/AppSecondaryMenu';
import {IRealNote} from '../resources/typed-notes';

type IR = typeof R;

const r = {
	idSecOverview: 'sec-overview',
	idPageNotes: 'page-notes',
	idSecNotes: 'sec-notes',
};

const R = {
	...r,
	secOverview: 'Overview',
	pageNotes: 'All Notes',

	secNotes: 'Notes',
};

const R_ZH: IR = {
	...r,
	secOverview: '总览',
	pageNotes: '所有笔记',

	secNotes: '笔记',
};

export const AppMenuNotes = getAppSecondaryMenu<IRealNote, IMenuSection<IRealNote>>();
export const AppMenuSummaryPages = getAppSecondaryMenu<IMenuSummaryPage, IMenuSection<IMenuSummaryPage>>();

export const RB = {df: R, en: R, zh: R_ZH};

export const defaultMenuNotesOverviewPage = newMenuSummaryItem(R.idPageNotes, R.pageNotes);
const secOverview = newMenuSection<IMenuSummaryPage>(R.idSecOverview, R.secOverview, [
	defaultMenuNotesOverviewPage,
]);
const secOverviewZh = newMenuSection<IMenuSummaryPage>(R_ZH.idSecOverview, R_ZH.secOverview, [
	newMenuSummaryItem(R_ZH.idPageNotes, R_ZH.pageNotes),
]);

const secNotes = newMenuSection<IRealNote>(R.idSecNotes, R.secNotes, []);
const secNotesZh = newMenuSection<IRealNote>(R_ZH.idSecNotes, R_ZH.secNotes, []);

// Resource > General Resource
export const RR = {
	secOverview,
	secOverviewZh,
	secNotes,
	secNotesZh,
};

const R1 = {secOverview, secNotes};
const R2: typeof R1 = {secOverview: secOverviewZh, secNotes: secNotesZh};
export const RB2 = {df: R1, en: R1, zh: R2};
