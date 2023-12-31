//receiveWeatherInfo関数をインポート。
import {receiveWeatherInfo} from "./weatherinfo-receiver";

// 自分で追加してみた
import {WeatherInfo} from "./WeatherInfo";

//アクセス先URLの基本部分の変数を用意。
const weatherinfoUrl = "http://api.openweathermap.org/data/3.0/weather";
// クエリパラメータの元データとなるオブジェクトリテラルを用意。
const params:{
    lang: string,
    q: string,
    appId: string
} = 
{
    //言語設定のクエリパラメータ
    lang: "ja",
    //都市名を表すクエリパラメータ。
    q: "Himeji",
    //APIキーのクエリパラメータ。ここに各自の文字列を記述する！
    appId: "b3465929078d365328dde8c751e0ccbd"
}

//クエリパラメータを生成。
const queryParams = new URLSearchParams(params);
//実際にアクセスするURLを生成。
// const urlFull = `${weatherinfoUrl}?${queryParams}`;
//receiveWeatherInfo関数を実行。
// receiveWeatherInfo(urlFull);

// ~省略~（以下p309）
const urlFull = `${weatherinfoUrl}&q=${params.q}&appid=${params.appId}`;
const promise = receiveWeatherInfo(urlFull);
// 非同期処理が成功した場合の処理を定義。
promise.then(
    function(weatherInfo: WeatherInfo) {
        // WeatherInfoオブジェクトから必要情報を取得して表示文字列を生成。
        const message = `現在の${weatherInfo.cityName}の天気は、${weatherInfo.weatherDesc}です。\n緯度は${weatherInfo.longitude}です。
        `;
        //表示。
        console.log(message);
    }
);
// 非表示処理がエラーとなった場合の処理を定義。
promise.catch(
    function(error) {
        // エラーを表示。
        const message = `エラーが発生しました。\nエラー内容：${error}`;
        console.log(message);
    }
);
// 非同期処理の成功、エラーにかかわらず行う処理を定義。
promise.finally(
    function() {
        console.log("全ての処理が終了しました！");
    }
)
