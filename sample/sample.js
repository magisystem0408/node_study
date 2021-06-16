// 文字ジュールインポート
const {read,write} =require("./helper")
//
//
// setTimeout(function (){
//     console.log("タイマー関数が呼ばれました")
// },3000);


// インスタンス化
// const fs = require('fs')

// コマンドラインで渡された引数を確認できる

console.log(process.argv)
// 引数を取得したい時
// [
// '/usr/local/Cellar/node/15.11.0/bin/node',
//     '/Users/matsudomasato/WebstormProjects/node-app/sample.js'
// ]

// のように配列で入ってくるので配列番号指定する
console.log(process.argv[2])

// 変数で取得する
const request = process.argv[2];


if (request === "read") {
    read()
} else if (request === "write") {

    write()

} else {
    console.error("エラー：コマンドにreadまたはwriteの引数を入れてください")
}
