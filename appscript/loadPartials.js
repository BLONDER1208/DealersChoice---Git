function loadPartialHMTL_(partial) {
	const htmlServ = HtmlService.createTemplateFromFile(partial);
	htmlServ.evaluate().getContent();
}
// load diverser "pages"
function loadDashboardView() {
	return loadPartialHMTL_("dashboard");
}
function loadSignInView() {
	return loadPartialHMTL_("signIn");
}
function loadRotationView() {
	return loadPartialHMTL_("rotation");
}
function loadWhoisNextView() {
	return loadPartialHMTL_("whoisnext");
}
function loaSignOutView_() {
	return loadPartialHMTL_("signOut");
}
function loadSettingsView() {
	return loadPartialHMTL_("settings");
}
