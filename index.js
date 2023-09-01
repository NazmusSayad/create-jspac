#!/usr/bin/env node

const shell = require('shelljs')
shell.exec('npm i -D jspac')
shell.exec('npx jspac init')
