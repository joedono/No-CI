const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 1070,
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/No-CI/assets/logo.png`
  });

  win.loadURL(`file://${__dirname}/dist/No-CI/index.html#ftp-config`);

  //// uncomment below to open the DevTools.
  win.webContents.openDevTools()

  win.on('closed', function () {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (win === null) {
    createWindow();
  }
});