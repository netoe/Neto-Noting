'use strict';

import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
	ctn: {
		flex: '1', margin: '16px 12px 0', minWidth: '45%',
		// FIX-ME Support flexible card of notes.
	},
	ctnCards: {minWidth: '95%'},
	ctnCardAction: {display: 'flex', flexFlow: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', height: '100%'},
});
