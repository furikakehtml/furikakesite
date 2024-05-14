function main() {
    console.log("呼び出されたよ")
    // 結果のオブジェクトを定義する
    let king = []

    let aaa = document.getElementById("aaa")
    let bbb = document.getElementById("bbb")

    let ha
    let hb
    let hc
    let hd

    const err = document.getElementById("err")
    // 入力内容を変数に格納
    let nm_1 = document.getElementById("name_1").value
    let nm_2 = document.getElementById("name_2").value
    let nm_3 = document.getElementById("name_3").value
    let nm_4 = document.getElementById("name_4").value

    let ny_1 = Number(document.getElementById("naiyou_1").value)
    let ny_2 = Number(document.getElementById("naiyou_2").value)
    let ny_3 = Number(document.getElementById("naiyou_3").value)
    let ny_4 = Number(document.getElementById("naiyou_4").value)

    let nd_1 = Number(document.getElementById("nedan_1").value)
    let nd_2 = Number(document.getElementById("nedan_2").value)
    let nd_3 = Number(document.getElementById("nedan_3").value)
    let nd_4 = Number(document.getElementById("nedan_4").value)

    let cb_1 = document.getElementById("cb1")
    let cb_2 = document.getElementById("cb2")

    if (nm_1 == "" || ny_1 == "") {
        // 商品名1または内容量1が入力されていない場合
        err.textContent = "必要な情報が入力されていません"
        return
    }else{
        if (nd_1 == "") {
            err.textContent = "必要な情報が入力されていません"
            return
        }else{
            err.textContent = ""
            ha = nd_1 / ny_1
        }
    }
    if (nm_2 == "" || ny_2 == "") {
        // 商品名2または内容量2が入力されていない場合
        err.textContent = "必要な情報が入力されていません"
        return
    }else{
        if (nd_2 == "") {
            err.textContent = "必要な情報が入力されていません"
            return
        }else{
            err.textContent = ""
            hb = nd_2 / ny_2
        }
    }
    if (cb_1.checked) {
        if (nm_3 == "" || ny_3 == "") {
            // 商品名3または内容量3が入力されていない場合
            err.textContent = "必要な情報が入力されていません"
            return
        }else{
            if (nd_3 == "") {
                err.textContent = "必要な情報が入力されていません"
                return
            }else{
                err.textContent = ""
                hc = nd_3 / ny_3
            }
        }
    }
    if (cb_2.checked) {
        if (nm_4 == "" || ny_4 == "") {
            // 商品名3または内容量3が入力されていない場合
            err.textContent = "必要な情報が入力されていません"
            return
        }else{
            if (nd_4 == "") {
                err.textContent = "必要な情報が入力されていません"
                return
            }else{
                err.textContent = ""
                hd = nd_4 / ny_4
            }
        }
    }

    // 結果を出す
    if (cb_1.checked) {
        if(cb_2.checked){
            // 比較A,B,C,Dすべて
            let max = Math.max(ha, hb, hc, hd);
            console.log(max)
            if(max == ha){
                king.push(nm_1)
                king.push(ny_1)
                king.push(nd_1)
            }else if (max == hb){
                king.push(nm_2)
                king.push(ny_2)
                king.push(nd_2)
            }else if(max == hc){
                king.push(nm_3)
                king.push(ny_3)
                king.push(nd_3)
            }else if(max == hd){
                king.push(nm_4)
                king.push(ny_4)
                king.push(nd_4)
            }
        }else{
            // 比較A,B,Cのみ
            let max1 = Math.max(ha, hb, hc);
            console.log(max1)
            if(max1 == ha){
                king.push(nm_1)
                king.push(ny_1)
                king.push(nd_1)
            }else if (max1 == hb){
                king.push(nm_2)
                king.push(ny_2)
                king.push(nd_2)
            }else if(max1 == hc){
                king.push(nm_3)
                king.push(ny_3)
                king.push(nd_3)
            }
        }
    }else{
        // 比較A,Bのみ
        let max2 = Math.max(ha, hb)
        if(max2 == ha){
            king.push(nm_1)
            king.push(ny_1)
            king.push(nd_1)
        }else if (max2 == hb){
            king.push(nm_2)
            king.push(ny_2)
            king.push(nd_2)
        }
    }
    console.log(king)
    document.getElementById("kekka").innerHTML = "<b>"+king[0]+"</b>"
    document.getElementById("kekkasy").textContent = "値段："+king[2]
    document.getElementById("kekkasyy").textContent = "内容量："+king[1]
    aaa.style.display = "none"
    bbb.style.display = "block"
}