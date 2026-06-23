// @ts-check
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const root = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
	// Project GitHub Pages: https://jbouder.github.io/tasktracker-astro/
	site: 'https://jbouder.github.io',
	base: '/tasktracker-astro/',
	integrations: [
		react(),
		starlight({
			title: 'Tasker Docs',
			description:
				'Documentation for Tasker — a full-stack task management app.',
			logo: {
				src: './public/logo.svg',
				replacesTitle: true,
				alt: 'Tasker',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/jbouder/tasktracker-astro',
				},
			],
			// Nebari brand theme + tokens (also re-skins the Starlight chrome).
			customCss: ['./src/styles/global.css'],
			// Replace the default theme dropdown with a 3-state segmented control.
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			sidebar: [
				{ label: 'Getting Started', slug: 'getting-started' },
				{
					label: 'Guides',
					items: [
						{ label: 'Managing tasks', slug: 'guides/managing-tasks' },
						{ label: 'Component showcase', slug: 'guides/components' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@': path.resolve(root, './src'),
			},
		},
	},
});
