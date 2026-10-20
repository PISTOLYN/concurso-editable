const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function crearVentana() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({
    width: 1280,
    height: 800,
    backgroundColor: '#3a0d00',
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true }
  });
  w.loadFile(path.join(__dirname, 'index.html'));
  w.webContents.on('before-input-event', (e, input) => {
    if (input.type === 'keyDown' && input.key === 'F11') {
      w.setFullScreen(!w.isFullScreen());
      e.preventDefault();
    }
  });
}

app.whenReady().then(crearVentana);
app.on('window-all-closed', () => app.quit());
