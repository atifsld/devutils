const vscode = require('vscode');
const { XMLParser, XMLValidator } = require('fast-xml-parser');

function parseXml(xmlString) {
    const parser = new XMLParser();
    return parser.parse(xmlString);
}


function isXmlValid(xmlString) {
    return XMLValidator.validate(xmlString);
}

async function xmlToJsonCommand() {
    try {
        const xmlString = await vscode.window.showInputBox({
            prompt: "Enter the XML string:"
        });
        if (!xmlString) {
            throw new Error("No XML string entered.");
        }
        if(!isXmlValid(xmlString)) {
            throw new Error('Invalid XML entered.')
        }
        const jsonString = parseXml(xmlString)
        vscode.window.showInformationMessage(JSON.stringify(parseXml(jsonString), null, 2));
    } catch (error) {
        vscode.window.showErrorMessage(`Error: ${error.message}`);
    }
}


module.exports = { parseXml, xmlToJsonCommand };
