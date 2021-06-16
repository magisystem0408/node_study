
const name ='mike'

const add =function (a,b){
    return a+b;
}

const person ={
    name:"Mike",
    age:30
}

const fs =require('fs')

const read = function (){
    fs.readFile("./sample.json", "utf8", function (err, data) {

        // 読み出すときjsonはstringのままなので、jsonに直す必要がある
        // parseは渡されたテキストをオブジェクトに変換する関数
        const person =JSON.parse(data)
        console.log(person.name)

    });
};


const write =function (){
    // json入れるときにstringに変換しないといけない
    fs.writeFile("sample.json", JSON.stringify(person), function () {
        console.log("書き出し完了")
    })
};




// 外部にエクスポートされる
module.exports={
    // name:name,
    // add:add,
    read:read,
    write:write,

};
