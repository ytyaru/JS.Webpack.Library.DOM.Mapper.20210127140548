#!/bin/bash
npm init -y
npm i -D webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods @babel/runtime @babel/plugin-transform-runtime
# private # : @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods 
# async     : @babel/runtime @babel/plugin-transform-runtime
npm i 
npm i --save-dev
npx webpack
npx webpack serve
