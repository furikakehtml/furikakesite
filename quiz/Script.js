// 音のパスを通す
const audio1 = new Audio('Ok.mp3');
const audio2 = new Audio('No.mp3');
const audio3 = new Audio('Nise.mp3');
const audio4 = new Audio('Bad.mp3');

// クイズの情報を配列とオブジェクトで定義する
const quiz = [
    {
       mondai: "携帯型ゲーム機「ゲームボーイ」が発売されたのはいつ？",
       kotaeb: [
        "1989年 （平成元年）",
        "2004年 （平成16年）",
        "1985年 （昭和60年）",
        "1996年 （平成8年）"
       ],
       kaitou: "1989年 （平成元年）"
    },{
        mondai: "任天堂が生産していたおもちゃは次の内どれ？",
        kotaeb: [
         "UNO",
         "すごろく",
         "かるた",
         "人生ゲーム"
        ],
        kaitou: "かるた"
    },{
        mondai: "家庭用テレビゲーム機「Wii」が発売されたのはいつ？",
        kotaeb: [
         "2008年 （平成20年）",
         "1996年 （平成8年）",
         "2006年 （平成18年）",
         "2004年 （平成16年）"
        ],
        kaitou: "2006年 （平成18年）"
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// ボタンに選択肢を追加
const $buttons = document.getElementsByTagName("button");

// 関数で一つにまとめる
const BTNLength = $buttons.length;
const setupQuiz = () => {
    document.getElementById("mondaibun").textContent = quiz[quizIndex].mondai;
    let BTNIndex = 0;
    while(BTNIndex < BTNLength){
        // 命令を書く
        $buttons[BTNIndex].textContent = quiz[quizIndex].kotaeb[BTNIndex];
        BTNIndex++;
    };
};
setupQuiz();

// clickイベントで正誤判定
const ClickHendler = (e) => {
    if (quiz[quizIndex].kaitou === e.target.textContent) {
        audio1.currentTime = 0;
        audio1.play();
        window.alert("正解！");
        score++;
    }else {
        audio2.currentTime = 0;
        audio2.play();
        window.alert("不正解！");
    }

    quizIndex++;

    if(quizIndex < quizLength){
        // 問題数がまだあれがこっち実行する
        setupQuiz();
    }else{
        // 問題数がなければこっちを実行する
        if(score ===0){
            audio4.currentTime = 0;
            audio4.play();
        }else{
            audio3.currentTime = 0;
            audio3.play();
        }
        alert("クイズ終了！あなたの正解数は、"+ quizLength + "問中" + score + "問正解です！");
        window.location.href = "owari.html?score="+quizLength + "問中" + score + "問正解でした！"
    }
};

// クリックを検知して関数を実行
let handlerIndex = 0;
const buttonLength = $buttons.length;
while(handlerIndex < buttonLength){
    $buttons[handlerIndex].addEventListener("click", (e) => {
        ClickHendler(e);
    });
    handlerIndex++;
}