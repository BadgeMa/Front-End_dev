import {
	MENU_HOME = "MENU_HOME";
	MENU_DASHBOARD = "MENU_DASHBOARD";
	MENU_BAMBOOGROVE = "MENU_BAMBOOGROVE";
	MENU_REPORTMANAGER = "MENU_REPORTMANAGER";
	MENU_COUNSELMANAGER = "MENU_COUNSELMANAGER";
} from './ActionTypes';

export function goToHome() {
    return {
        type: MENU_HOME
    };
}

export function goToDashboard() {
	return {
		type: MENU_DASHBOARD
	};
}

export function goToBambooGrove() {
	return {
		type: MENU_BAMBOOGROVE
	};
}

export function goToReportManager() {
	return {
		type: MENU_REPORTMANAGER
	};
}

export function goToCounselManager() {
	return {
		type: MENU_COUNSELMANAGER
	};
}
