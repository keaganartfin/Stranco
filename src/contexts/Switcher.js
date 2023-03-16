import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./useDarkSide";

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<div className="hover:text-slate-500 dark:hover:text-slate-100 text-slate-700 dark:text-slate-300 px-0 lg:px-3 py-0 lg:py-2 flex items-center uppercase font-bold">
			<DarkModeSwitch
				style={{ marginLeft: "2rem" }}
				checked={darkSide}
				onChange={toggleDarkMode}
			/>
		</div>
	);
}
