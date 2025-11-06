const vscode = require("vscode");

function activate(context) {
  console.log("duckuments active");

  // register provider immediately
  const provider = new DuckumentsViewProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider("duckumentsChatView", provider)
  );

  // optional command (not needed for sidebar, but you can keep it)
  const runCmd = vscode.commands.registerCommand("duckuments.run", () => {
    vscode.window.showInformationMessage("Hello from duckuments!");
  });

  context.subscriptions.push(runCmd);
}

class DuckumentsViewProvider {
  constructor(extensionUri) {
    this._extensionUri = extensionUri;
  }

  resolveWebviewView(webviewView) {
    webviewView.webview.options = { enableScripts: true };
    webviewView.webview.html = `
      <html>
      <body style="padding:10px;font-family:sans-serif">
        <h3>Duckuments Chat</h3>
        <p>This is your sidebar panel.</p>
      </body>
      </html>
    `;
  }
}

function deactivate() {}

module.exports = { activate, deactivate };
