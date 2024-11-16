const passwordData = {
    "Charlie1023": {
      front: "image1.jpg",
      back: "image1_back.jpg",
      text: "這是給你的",
      backgroundColor: "#ffdf99",
      buttonColor: "#f1ae4c", // 黃色按鈕顏色
      hoverColor: "#f17f6d" // 懸停時的顏色
    },
    "blue": {
      front: "image2.jpg",
      back: "image2_back.jpg",
      text: "這是柔和的藍色卡片背面",
      backgroundColor: "#b0e0e6",
      buttonColor: "#add8e6", // 藍色按鈕顏色
      hoverColor: "#5f9ea0" // 懸停時的顏色
    },
    "green": {
      front: "image3.jpg",
      back: "image3_back.jpg",
      text: "這是清新綠色的卡片背面",
      backgroundColor: "#98fb98",
      buttonColor: "#90ee90", // 綠色按鈕顏色
      hoverColor: "#3cb371" // 懸停時的顏色
    }
  };
  
  // 監聽 Enter 鍵
  document.getElementById("password").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      checkPassword(); // 調用密碼檢查函數
    }
  });

  function checkPassword() {
    console.log("確定按鈕被點擊"); // 測試是否成功觸發
    const password = document.getElementById("password").value;
    const cardData = passwordData[password];
    const flipButton = document.querySelector(".flip-button"); // 獲取翻轉按鈕
  
    if (cardData) {
      // 隱藏登入區，顯示卡片
      document.getElementById("login").style.display = "none";
      document.getElementById("card").style.display = "block";
      // 更新卡片內容
      document.getElementById("frontImage").src = cardData.front;
      document.getElementById("backImage").src = cardData.back;
      document.getElementById("backText").textContent = cardData.text;
      document.body.style.backgroundColor = cardData.backgroundColor;

      // 動態更改翻轉按鈕顏色
      flipButton.style.backgroundColor = cardData.buttonColor;

      // 動態更新懸停樣式
    flipButton.addEventListener("mouseover", function () {
        flipButton.style.backgroundColor = cardData.hoverColor;
      });
  
      flipButton.addEventListener("mouseout", function () {
        flipButton.style.backgroundColor = cardData.buttonColor;
      });

      // 顯示卡片動畫
      const card = document.getElementById("card");
      setTimeout(() => {
      card.classList.add("show"); // 添加動畫類
    }, 10); // 避免立即添加類名導致動畫不起作用
    } else {
      alert("抓到，打錯密碼囉");
    }
  }
  
  function flipCard() {
    document.getElementById("card").classList.toggle("flipped");
  }
  