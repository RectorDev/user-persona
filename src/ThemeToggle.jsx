import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
	// Check localStorage for theme preference, default to light mode
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedTheme = localStorage.getItem('theme');
		return savedTheme === 'dark';
	});

	// Update the theme and save it to localStorage
	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [isDarkMode]);

	// Toggle between light and dark mode
	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	return (
		<button
			onClick={toggleTheme}
			className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg"
		>
			{isDarkMode ? '🌙' : '☀️'}
		</button>
	);
};

export default ThemeToggle;