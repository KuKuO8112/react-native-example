1. 使用react-native-cli建立專案，並利用Android Studio做為模擬器。
2. 使用tab navigation來完成，一開始還未發現tab navigation，花了比較多時間在找資料，後來得知tab navigation之後，30分鐘內完成基本的tab分頁，只是未將icon及文字做美化。
3. 未完成，有找到drawer navigation及react-native-side-menu，不過後來未完成。
4. 直接使用該網站下方提供之[{name,city}]API，使用fetch取得資料，並將資料顯示於APP內之Page4，並做了兩個按鈕切換顯示之資料，串接資料、按鈕邏輯製作及簡單排版約在2小時內完成。
5. 將App.js移至src內，Page資料夾放置各tab頁面，component資料夾放置List.js，本來想將全部資料顯示出來，後來決定做按鈕切換資料。
6. 於上方項目後方說明。
7. 因沒有APP上架經驗，所以僅能以google到的資訊做簡單說明：  
android：  
&emsp;準備：Google Console帳號、應用程式Icon(512x512)、主視覺圖(1024x500)、隱私權政策網站(非必要)、截圖兩  
&emsp;&emsp;&emsp;&emsp;張以上。  
&emsp;流程：一、創建key store並產生要上傳的.aab檔。  
&emsp;&emsp;&emsp;&emsp;二、至google play console網站，點選建立應用程式並上傳icon、截圖等資料。  
&emsp;&emsp;&emsp;&emsp;三、上傳.aab檔及選擇上架國家，最後發布即可。  
&emsp;&emsp;&emsp;&emsp;四、google play審核約7天。  
IOS：  
&emsp;準備：登記Apple Developer帳號，打開react-native/ios資料夾內的.xcodeproj檔，設定Bundle Identifier、支援  
&emsp;&emsp;&emsp;&emsp;的硬體及icon。  
&emsp;流程：一、在KeyChain Access程式中，生成憑證檔。  
&emsp;&emsp;&emsp;&emsp;二、至開發者後台中，選擇Certificates, Identifiers & Profiles，準備iOS Distribution Certificate。  
&emsp;&emsp;&emsp;&emsp;三、在開發者後台建立APP ID，Bundle ID要跟Xcode專案一樣。  
&emsp;&emsp;&emsp;&emsp;四、建立Profile並下載，並在在Xcode設定Signing。  
&emsp;&emsp;&emsp;&emsp;五、至App Store Connect新增App，選擇平台、名稱、語言以及輸入Bundle ID。  
&emsp;&emsp;&emsp;&emsp;六、回到Xcode，裝置部分選擇使用Build Any iOS Device (arm64)，點選「Product」->「Archive」打  
&emsp;&emsp;&emsp;&emsp;包。  
&emsp;&emsp;&emsp;&emsp;七、接著點選 Distribute App上傳App。  
&emsp;&emsp;&emsp;&emsp;八、至App Store Tab填寫剩餘資料，並提交等待審查。  
&emsp;&emsp;&emsp;&emsp;九、而ios App可利用TestFlight供人下載測試。  
  

簡單心得：  
&emsp;本身完全沒有react native經驗，所以這次的小測驗幾乎是從零開始。本身電腦是windows系統，一開始在環境建置上就花了很多時間，一開始ANDROID_HOME及JAVA_HOME位置打錯，連不到模擬器，後來打算用VMware Workstation Player灌MacOS來使用又遇到各種困難，最後重新建置好才能好好的用Android Studio做為模擬器，差一點就打算暫時先用Expo CLI來做這個測試了。  
&emsp;REACT跟React Native雖然概念上類似，不過實際上編寫起來還是可以感覺到不同，也算是提早體驗到了React Native。比較奇怪的部分就是React Nnative的程式碼在VScode裡一堆紅蚯蚓，明明語法沒問題App也運作正常。  
&emsp;雖然這段時間求職履歷都希望是網頁前端工程師，目前的規劃React Native是放在未來的部分，但是我覺得不論是前端還是APP開發，技術進步快速，很容易就會接觸到各種沒遇過的技術，所以這份測驗我也覺得不能因為我尚未接觸過React Native就輕易的放棄，如果連找工作時都不能接受挑戰，那正式上工的話面臨更多挑戰時該怎麼辦。不論在REACT還是React Native上，我需要學的東西還很多，我也希望可以學到更多東西及技術。  
&emsp;編寫這份README花的時間比我預期的還要多很多，最後希望這個測試可以讓我得到面試的機會，也希望能夠得到這份工作。
