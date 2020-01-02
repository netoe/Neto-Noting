//

import React from 'react';
import {IRealNote} from '../resources/typed-notes';
import {AppMenuNotes, RR} from './resources';

interface IProps {
	selectedMenuItem?: IRealNote;
	onSelected: (entry: IRealNote) => any;
}

export const AppMenus = React.memo(({selectedMenuItem, onSelected}: IProps) => (
	<AppMenuNotes
		sections={RR.sections} color={'#099'}
		selectedMenuItemId={selectedMenuItem?._id || RR.defaultMenuItemId}
		onSelect={(entryId, entry) => onSelected(entry)}
	/>
));
