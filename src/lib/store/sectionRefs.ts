export const ids = [
  'gambarRef', 'aboutRef', 'card1Section2R',
  'card2Section2R', 'card1Section3R', 'card2Section3R',
  'card3Section3R', 'card4Section3R', 'card1Section4R', 'card2Section4R', 'card3Section4R', 'card4Section4R'
];

export const refs: Record<string, HTMLElement | null> = Object.fromEntries(
	ids.map((id) => [id, null])
);

export const visibleFlags: Record<string, boolean> = Object.fromEntries(
	ids.map((id) => [id, false])
);

ids.forEach(id => {
  refs[id] = null;
  visibleFlags[id] = false;
});

export const navItemsBawah = [
	{ id: 'section_1', label: 'Home' },
	{ id: 'section_2', label: 'About Me' },
	{ id: 'section_3', label: 'Skills' },
	{ id: 'section_4', label: 'Portofolio' },
];