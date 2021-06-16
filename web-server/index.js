// こちら側がバックエンド側

const express =require('express')

const path =require("path")

const app =express()


// このファイルのディレクトリのパスを指定する
console.log(__dirname)


// reqのbody使えるようにするには
app.use(express.urlencoded({extended:false}));



// 静的ファイルの置き場所のパスを指定する
app.use(express.static(path.join(__dirname,"public")))


// フォームデータを受け取るときはpostで受け取る
app.post("/api/v1/quiz",function (){

    // フォームのデータ受け取り
    const answer =req.body.answer;

    if(answer==='やちゅ'){
        // res.send("ちぇいらになりそう")

        res.redirect("/correct.html")
    }else {
        res.redirect("/wrong.html")
    }

})


// コンソールにログを流す
app.listen(3000,function (){
    console.log("I am running")
})