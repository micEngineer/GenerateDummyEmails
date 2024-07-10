function GenerateDummyEmails() {
  // スプレッドシートを指定
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ダミーアドレス');
  
  // ダミーのメールアドレスを生成する数
  var numberOfEmails = 300; // ここで生成するアドレスの数を指定
  
  // ドメインリスト
  var domains = ['example.com', 'test.com', 'dummy.com'];
  
  // ダミーのメールアドレスを生成
  var emailList = [];
  for (var i = 0; i < numberOfEmails; i++) {
    var randomName = 'user' + Math.floor(Math.random() * 10000);
    var randomDomain = domains[Math.floor(Math.random() * domains.length)];
    var email = randomName + '@' + randomDomain;
    emailList.push([email]); // スプレッドシートに追加するために配列にする
  }
  
  // シートに書き込む
  sheet.getRange(1, 1, emailList.length, 1).setValues(emailList);
}
