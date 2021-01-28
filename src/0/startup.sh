#!/bin/bash
npm init -y
npm i -D webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods @babel/runtime @babel/plugin-transform-runtime @babel/plugin-transform-regenerator core-js@3 @babel/runtime-corejs3
# private # : @babel/plugin-proposal-class-properties @babel/plugin-proposal-private-methods 
# async     : @babel/runtime @babel/plugin-transform-runtime
#           : core-js@3 なお、 @babel/runtime-corejs3 だけではエラーが出た。両方必要かは不明。
# yield     : @babel/plugin-transform-regenerator
npm i 
npm i --save-dev
npx webpack
npx webpack serve
