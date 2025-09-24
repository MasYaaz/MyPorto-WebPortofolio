import { writable } from 'svelte/store';

export const halamanAktif = writable('section_1');	// string
export const menuTerbuka = writable(false);       	// boolean
export const showNavbar = writable(false);        	// boolean
export const navbarLight = writable(false);       	// boolean

export const toggleMenu = () => {
	menuTerbuka.update((val) => !val);
};

export const scrollToSection = (id: string) => {
	const el = document.getElementById(id);
	if (el) {
		el.scrollIntoView({ behavior: 'smooth' });
	}
};
