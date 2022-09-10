import { useDispatch, useSelector } from 'react-redux';
import { onActivateDarkMode, onDeactivateDarkMode } from '~/store/ui';

export const useUiStore = () => {
	const dispatch = useDispatch();

	const { darkMode } = useSelector((state: any) => state.ui);

	const activateDarkMode = () => {
		dispatch(onActivateDarkMode());
	};

	const deactivateDarkMode = () => {
		dispatch(onDeactivateDarkMode());
	};

	const toggleDarkMode = () => {
		darkMode ? deactivateDarkMode() : activateDarkMode();
	};

	return {
		// Properties
		darkMode,

		// Methods
		activateDarkMode,
		deactivateDarkMode,
		toggleDarkMode,
	};
};
