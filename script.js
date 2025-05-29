// 시뮬레이션 대화와 선택지 처리 (예시)
const chatContainer = document.getElementById("chat-container");
const choiceSection = document.getElementById("choice-section");
const imageSection = document.getElementById("image-section");
const resultImage = document.getElementById("result-image");
const infoLink = document.getElementById("info-link");

// 대화 시뮬레이션 시작 함수
function startChat() {
  chatContainer.innerHTML = "<p>채팅 시뮬레이션 시작...</p>";
  setTimeout(() => {
    chatContainer.innerHTML += "<p>수상한 사람이 이상한 부탁을 합니다.</p>";
    choiceSection.classList.remove("hidden");
  }, 1000);
}

// 사용자가 선택지를 클릭했을 때 처리
function handleChoice(choice) {
  choiceSection.classList.add("hidden");

  let imageSrc = "";
  switch (choice) {
    case 1:
      imageSrc = "dark.jpg";
      break;
    case 2:
      imageSrc = "bright.jpg";
      break;
    case 3:
      imageSrc = "bright.jpg";
      break;
  }

  // 결과 이미지 표시
  showResultImage(imageSrc);

  // 몇 초 후 안내 이미지 표시
  setTimeout(() => {
    showResultImage("info.jpg");
  }, 2000);
}

// 결과 이미지 표시 함수 (링크 포함)
function showResultImage(imageSrc) {
  resultImage.src = imageSrc;

  if (imageSrc.includes("info.jpg")) {
    infoLink.href = "https://www.drugfree.or.kr/";
    infoLink.style.pointerEvents = "auto";
  } else {
    infoLink.removeAttribute("href");
    infoLink.style.pointerEvents = "none";
  }

  imageSection.classList.remove("hidden");
}

// 시작
startChat();
