
'use strict'

var path = require('path')
// fix the $PATH on OS X
//require('fix-path')()
var menubar = require('menubar')
var options = {dir: __dirname + '/public'}
var mb = menubar(options)

mb.on('ready', function ready () {
console.log('dale')
})


/*var app = require('app');
var BrowserWindow = require('browser-window');
require('crash-reporter').start();
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});
app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 1360, height: 800});
  mainWindow.loadUrl('file://' + __dirname + '/public/index.html');
  mainWindow.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});*/
