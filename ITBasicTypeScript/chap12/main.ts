// //receiveWeatherInfo関数をインポート。
// import {receiveWeatherInfo} from "./weatherinfo-recever";

// //アクセス先URLの基本部分の変数を用意。
// const params:{
//     lang: string,
//     q: string,
//     appId: string
// } = 
// {
//     //言語設定のクエリパラメータ
//     lang: "ja",
//     //都市名を表すクエリパラメータ。
//     q: "Himeji",
//     //APIキーのクエリパラメータ。ここに各自の文字列を記述する！！
//     appId: ""
// }

// //クエリパラメータを生成
// const queryParams = new URLSearchParams(params);
// //実際にアクセスするURLを生成。
// const urlFull = `${weatherinfoUrl}?${queryParams}`;