function minimiseWindow(){
    var finWindow = fin.desktop.Window.getCurrent();
    finWindow.minimize();
}

function closeWindow(){
    var finWindow = fin.desktop.Window.getCurrent();
    finWindow.close();
}

function createChildWindow(){
	var win = new fin.desktop.Window(
		{
			name: "openFinWindow",
			url: "http://openfin.co",
			defaultWidth: 600,
			defaultHeight: 400
		},
		function(){onHelpWindowCreated(win)},
		function(error) {
			console.log("Error creating window:", error);
		}
	);
}

function onHelpWindowCreated(helpWindow){
	console.log(helpWindow);
	helpWindow.addEventListener('closed', function () { console.log("Help window closed"); });

	helpWindow.addEventListener('minimized', function () { console.log("Help window minimized"); });

	helpWindow.addEventListener('closing', function () { console.log("Help window closing"); });

	helpWindow.addEventListener('crashed', function () { console.log("Help window crashed"); });

	helpWindow.addEventListener('close-requested', function () { console.log("Help window close-requested"); helpWindow.close(true); });

	helpWindow.addEventListener('shown', function () { console.log("Help window shown"); });

	helpWindow.addEventListener('focused', function () { console.log("Help window focused"); });

	helpWindow.addEventListener('blurred', function () { console.log("Help window blurred"); });

	helpWindow.addEventListener('hidden', function () { console.log("Help window hidden"); });

	helpWindow.addEventListener('frame-disabled', function () { console.log("Help window frame-disabled"); });

	helpWindow.addEventListener('external-process-exited', function () { console.log("Help window external-process-exited"); });

	helpWindow.show();
	console.log("help window opened");
}