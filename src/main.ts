import { app, BrowserWindow } from "electron";
import * as path from "path";
import { Container, injectable } from "inversify";
import "reflect-metadata";

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: false,
      webSecurity: true,
      preload: path.join(__dirname, "preload.js"),
      // sandbox: false, // the default value for it is true from Electron 20
    },
    width: 800,
  });

  // and load the index.html of the app.
  mainWindow.loadURL("https://www.google.com/");

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
});

class MainContainer extends Container {
  public start() {}

  public stop() {}
}

@injectable()
class MainService {
  // ...
}

export let mainContainer = new MainContainer({ defaultScope: "Singleton" });
mainContainer.bind("MainService").to(MainService);
