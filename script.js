const messages = [
  { sender: 'user', text: '알바 문의드립니다.' },
  { sender: 'client', text: '연락 주셨네요. 아까 보신 공고 맞죠? 아주 간단한 일이에요. 시키는 대로만 하면 됩니다. 저희는 정확해요. 보수 50만원 약속합니다. 지금 바로 진행 가능하세요?' },
  { sender: 'user', text: '무슨 물건을 어디로 옮기는 건가요?' },
  { sender: 'client', text: '그건 저희가 다 알려드립니다. 중요한 물건이라서요. 내용물은 보실 필요 없어요. 그냥 전달만 해주시면 돼요. 계좌번호 알려주시면 계약금 10만원 바로 넣어드릴게요.' },
  { sender: 'user', text: '혹시 불법적인 일인가요?' },
  { sender: 'client', text: '에이, 그런 거 아니에요~ 그냥 저희가 급하게 보내야 할 물건이 있어서 심부름 부탁드리는 거예요. 누가 이런 일에 마약을 생각해요? 괜히 쫄지 마시고 시키는 대로만 하세요. 다음에도 저희 일하시면 더 좋은 조건으로 해드릴 수 있어요.' }
];

const imageMap = {
  1: "dark.jpg",     // 잘못된 선택
  2: "bright.jpg",   // 올바른 선택
  3: "bright.jpg"
};

const finalImage = "info.jpg";
const finalLink = "https://www.drugfree.or.kr/";

let index = 0;
const chatContainer = document.getElementById("chat-container");

function showNextMessage() {
  if (index < messages.length) {
    const msg = document.createElement("div");
    msg.classList.add("message", messages[index].sender);
    msg.innerText = messages[index].text;
    chatContainer.appendChild(msg);
    index++;
    setTimeout(showNextMessage, 1000); // 메시지 간 간격은 1초 유지
  } else {
    // 대화 끝난 후 다음 화면으로 전환하는 시간을 3초로 변경
    setTimeout(() => {
      document.getElementById("chat-section").classList.add("hidden");
      document.getElementById("choice-section").classList.remove("hidden");
    }, 3000); // 기존 1000ms에서 3000ms로 수정 (2초 추가)
  }
}

function handleChoice(choiceNum) {
  document.getElementById("choice-section").classList.add("hidden");
  document.getElementById("image-section").classList.remove("hidden");

  const img = document.getElementById("result-image");
  const link = document.getElementById("result-link");

  img.src = imageMap[choiceNum]; // 첫 번째 결과 이미지 (dark.jpg 또는 bright.jpg) 표시
  link.href = "#"; // 초기 이미지에서는 링크 비활성화

  // 첫 번째 결과 이미지가 5초 동안 표시된 후 finalImage (info.jpg)로 변경
  // 이 5초는 사용자님의 요청에 따라 "한 5초정도"로 설정된 시간입니다.
  setTimeout(() => {
    img.src = finalImage; // info.jpg로 변경
    link.href = finalLink; // info.jpg에 대한 링크 설정
  }, 7000); // 이 시간은 5000ms (5초)로 유지됩니다.
}

window.onload = () => {
  showNextMessage();
};
