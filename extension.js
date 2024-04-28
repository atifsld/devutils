const vscode = require('vscode');
const { xmlToJsonCommand } = require('./commands/xmlToJsonCommand.js')

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	let xmlToJsonDisposable = vscode.commands.registerCommand('devutils.xmlToJson',await xmlToJsonCommand);
	context.subscriptions.push(xmlToJsonDisposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
