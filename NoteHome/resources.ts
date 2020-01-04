//

type IR = typeof R;

const R = {
	delete: {
		title: 'Delete the Target Note?',
		confirm: 'Delete',
		button: 'Delete',
	},
};

const R_ZH: IR = {
	delete: {
		title: '删除当前笔记？',
		confirm: '删除',
		button: '删除',
	},
};

export const RB = {df: R, en: R, zh: R_ZH};