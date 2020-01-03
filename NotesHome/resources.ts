'use strict';

type IR = typeof R;

const R = {
	title: 'All Notes',
	description: 'Hi there, this is the collection of your notes.',
};

const R_ZH: IR = {
	// [ 所有笔记 | 我的笔记 ]
	title: '所有笔记',
	description: '你好，这里是你的所有笔记。',
};

export const RB = {df: R, en: R, zh: R_ZH};
