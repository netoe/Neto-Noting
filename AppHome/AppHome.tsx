//

import React from 'react';
import {LayoutAppHeader} from 'src/graphic/components/LayoutAppHeader';
import {useLocalizedResourcesFromContext} from 'src/mui-lib/hooks/useLanguage';
import {AppMenus} from '../AppMenus/AppMenus';
import {NoteHome} from '../NoteHome/NoteHome';
import {IRealNote} from '../resources/typed-notes';
import {RB} from './resources';
import {useStyles} from './styles';

interface IProps {}

export const AppHome = React.memo<IProps>(() => {
	const cls = useStyles();
	const R = useLocalizedResourcesFromContext(RB);

	const [menuItem, setMenuItem] = React.useState(undefined as IRealNote | undefined);

	const renderPageBody = () => (
		<div className={cls.page} style={{padding: 18}}>
			<h1>Hello, this is the collection of notes.</h1>
		</div>
	);

	const renderNotePage = () => menuItem ? (
		<div className={cls.page}>
			<NoteHome note={menuItem}/>
		</div>
	) : undefined;

	return (
		<LayoutAppHeader
			title={R.title}
			body={menuItem ? renderNotePage() : renderPageBody()}
			nav={<AppMenus selectedMenuItem={menuItem} onSelected={setMenuItem}/>}
		/>
	);
});
