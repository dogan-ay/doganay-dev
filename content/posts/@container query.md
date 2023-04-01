---
title: Merhaba @container
date: 2023-4-1
description: CSS'de @container Sorgularına Kısa Bir Bakış 
type: Post
---

Bundan uzun zaman önce medya sorguları hayatımıza girdiğinde web geliştiriciler için UI geliştirme sürecinde ciddi değişikliklere neden olmuştu. Artık ekran boyutlarına ve cihaz özelliklerine göre stil yazabilir hale gelmiştik. Şimdi ise yeni bir sorgu türü hayatımıza giriyor. Medya sorguları ile ekran boyutuna göre bileşenlerimizin stilleri üzerinde değişiklik yapma kabiliyeti kazanmıştık, bu yeni sorgular ile bileşenlerin kapsayıcılarının boyutlarına ve stiline göre de bunu yapabileceğiz. 

@container sorguları özellikle component based geliştirmenin endüstri standardı olduğu şu zamanlarda en çok ihtiyacımız olan CSS özelliklerinden birisiydi. Çünkü bu sorgular sayesinde artık bileşenlerin göreli özelliklerini arayüzün geri kalanından bağımsız olarak geliştirebileceğiz. 2022 yılında Safari, Chrome ve Firefox gibi çok kullanılan tarayıcılar tarafından desteklenmeye başlanan @container sorgularını ben de artık kullanmaya başlamayı düşünüyorum. Hem öğrendiklerimi not almak hem de henüz bu konuyu bilmeyen arkadaşlara kaynak oluşturmak amacı ile bu blog yazısını yazıyorum.

### @container nedir?

### @container nasıl kullanılıyor?

Böyle bir HTML yapımız var. "wrapper" bizim @container sorgusu yazacağımız kapsayıcı. "main" ise bu kapsayıcının boyut ya da stil değerlerine göre değişecek olan alt kapsayıcımız.

```html
<div class="wrapper">
    <div class="main">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
    </div>
</div>
```

Kutuları flex ile yan yana getirdik ve biraz da güzel görünmesini sağladık.

```css
.main {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px;
  background: #4C566A;
  padding: 20px;
}

.box {
  width: 150px;
  height: 100px;
  background-color: #81A1C1;
}
```

![](/content-img/container-1.PNG)

Şimdi @container kullanarak "wrapper"ın genişliği 400px'den küçük olduğu durumda "main" içerisindeki kutuların alt alta gelmesini sağlayacağız. Öncelikle kapsayıcımızda container-type özelliğine bir değer vermemiz gerekiyor. Ayrıca isimlendirebiliriz.

```css
.wrapper {
    container-type: inline-size;
    container-name: main-container;
}
```

Bu iki özelliği şu şekilde tek satırda da deklare edebiliriz.

```css
.wrapper {
  container: main-container / inline-size;
}
```

Gelelim sorgumuza. Sözdizimi daha önce media sorgularına aşina olan kişilere tanıdık gelecektir.

```plaintext
 @container isim (koşul) {
    Koşul sağlandığında geçerli olacak stil.
}
```

Kodu yazalım.

```css
@container main-container (max-width: 400px) {
  .main {
    flex-direction: column;
  }
}
```
"wrapper"ın genişliği 400px'den daha küçük olduğunda elde ettiğimiz stil.

![](/content-img/container-2.PNG)
