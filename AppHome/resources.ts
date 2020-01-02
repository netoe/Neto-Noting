'use strict';

type IR = typeof R;

export const R = {
	title: 'Notes',
};

const R_ZH: IR = {
	// [ 笔记管理 | 笔记管理 | 记事本 | 小纸头 ]
	title: '笔记',
};

// Recourse > Bundle
export const RB = {df: R, en: R, zh: R_ZH};
