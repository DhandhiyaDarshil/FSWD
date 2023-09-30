const fs = require('fs');
const path = require('path');

function createBackup(filePath) {
  const backupPath = `${filePath}.bak`;

  fs.copyFile(filePath, backupPath, (err) => {
    if (err) {
      console.error('Error creating backup:', err);
      return;
    }

    console.log(`Backup created successfully: ${backupPath}`);
  });
}

function restoreFromBackup(filePath) {
  const backupPath = `${filePath}.bak`;

  fs.copyFile(backupPath, filePath, (err) => {
    if (err) {
      console.error('Error restoring from backup:', err);
      return;
    }

    console.log('File successfully restored from backup');
  });
}

// Usage:
// createBackup('file.txt');
// restoreFromBackup('file.txt');
