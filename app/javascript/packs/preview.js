if (document.URL.match( /new/, /edit/)) {
  //DOMContentLoaded イベントは、最初の HTML 文書の読み込みと解析が完了したとき、スタイルシート、画像、サブフレームの読み込みが完了するのを待たずに発生します。
  document.addEventListener('DOMContentLoaded', function(){
    const ImageList = document.getElementById('image-list')

    const createImageHTML = (blob) => {
       // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div')
      //setAttribute()メソッド とは、要素ノードに指定された属性名・属性値の属性を設定するメソッドです。 既に同名の属性があった場合には上書されます。
      imageElement.setAttribute('id', "image-element")
      let imageElementNum = document.querySelectorAll
      ('#image-element').length
      //引数の指定方法や対象の範囲などquerySelector()と手法は同じです。大きく違うところは合致するHTML要素をすべて取得することができるという点です！queryselector()は最初に合致した要素だけしか取得できないので、用途に応じて使い分けられるようにしましょう。

      // 表示する画像を生成
      const blobImage = document.createElement('img')
      blobImage.setAttribute('src', blob)

      // ファイル選択ボタンを生成
      const inputHTML = document.createElement('input')
      inputHTML.setAttribute('id', `message_image_${imageElementNum}`)
      inputHTML.setAttribute('name', 'message[images][]')
      inputHTML.setAttribute('type', 'file')
      //=<input id="message_image_[番号]" name="message[images][]" type="file">というHTMLの要素を生成することができます。

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage)
      imageElement.appendChild(inputHTML)
      ImageList.appendChild(imageElement)

      inputHTML.addEventListener('change', (e) => {
        file = e.target.files[0];
        blob = window.URL.createObjectURL(file);

        createImageHTML(blob)
      })
    }

    document.getElementById('message_image').addEventListener('change', function(e){
      //# 画像が表示されている場合のみ、すでに存在している画像を削除する
      // const imageContent = document.querySelector('img');
      //#「querySelector()」は、JavaScriptから任意のHTML要素を検出・取得することができるメソッドになります。「querySelector()」を使うとid属性値・class属性値などを意識せずにjQuery感覚でHTML要素をセレクタ指定することができます。document.querySelector( CSSセレクタ )
      // if (imageContent){
      //   imageContent.remove();
      // };
      //# 後から追加実装するfurima-29297では必要な記述

      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob)
    });
  });
}