//I have no idea what most of this does!!! - NCR

const { app, BrowserWindow, Menu, session } = require('electron')


// Main App Activity: 
app.on('ready', async () => {
  // We cannot require the screen module until the
  // app is ready
  const { screen } = require('electron')

  // Create a window that fills the sceen's available  work area.
  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize

  const mainWindow = new BrowserWindow({
    width,
    height,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
  })

  mainWindow.loadFile('docs/index.html')
})







// Everything menu
const isMac = process.platform === 'darwin'
const template = [
  {
    label: 'EveryThing',
    submenu: [
      {
        label: 'Open SunShining EveryThing in your browser',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://the-sunshining.github.io/thesunshining-everything/')
        }
      },
      { type: 'separator' },
      {
        label: 'Open SunShining ShortCuts in your browser',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://the-sunshining.github.io/SunBible/')
        }
      },
      { type: 'separator' },
      {
        label: 'SunBible',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://the-sunshining.github.io/SunBible/')
        }
      },
      { type: 'separator' },
      {
        label: 'The SunShining',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://thesunshining.weebly.com/')
        }
      },
      { type: 'separator' },
      {
        label: 'The SunShining Blog',
        click: async () => {
          const { shell } = require('electron')
          await shell.openExternal('https://thesunshining.weebly.com/sunshining-blog.html')
        }
      },
      { type: 'separator' },
      isMac ? { role: 'close' } : { role: 'quit' }
    ]
  }
]
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)



// Right Click Menu using - "electron-context-menu": "^2.3.0"
//const contextMenu = require('electron-context-menu');
//contextMenu({
//	menu: (actions, props, browserWindow) => [
//    {
//      label: 'SunBible',
//      submenu: [
//      { label: 'Copy Bible Verses', role: 'copy' },
//        { type: 'separator' }
//      ]
//    }
//		
//	]
//});