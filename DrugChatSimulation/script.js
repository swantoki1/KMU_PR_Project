
const chat = document.getElementById('chat');
const choice = document.getElementById('choice');
const messages = [
    { type: 'user', text: '알바 문의드립니다.' },
    { type: 'bot', text: '연락 주셨네요. 아까 보신 공고 맞죠? 아주 간단한 일이에요. 시키는 대로만 하면 됩니다. 저희는 정확해요. 보수 50만원 약속합니다. 지금 바로 진행 가능하세요?' },
    { type: 'user', text: '무슨 물건을 어디로 옮기는 건가요?' },
    { type: 'bot', text: '그건 저희가 다 알려드립니다. 중요한 물건이라서요. 내용물은 보실 필요 없어요. 그냥 전달만 해주시면 돼요. 계좌번호 알려주시면 계약금 10만원 바로 넣어드릴게요.' },
    { type: 'user', text: '혹시 불법적인 일인가요?' },
    { type: 'bot', text: '에이, 그런 거 아니에요~ 그냥 저희가 급하게 보내야 할 물건이 있어서 심부름 부탁드리는 거예요. 누가 이런 일에 마약을 생각해요? 괜히 쫄지 마시고 시키는 대로만 하세요. 다음에도 저희 일하시면 더 좋은 조건으로 해드릴 수 있어요.' }
];

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function showMessages() {
    for (let msg of messages) {
        const div = document.createElement('div');
        div.classList.add('message', msg.type);
        div.textContent = msg.text;
        chat.appendChild(div);
        window.scrollTo(0, document.body.scrollHeight);
        await delay(1000);
    }
    choice.style.display = 'flex';
}

function showResult(option) {
    choice.style.display = 'none';
    const img = document.createElement('img');
    img.classList.add('result-img');
    if (option === 'bad') {
        img.src = 'dark.jpg';
    } else {
        img.src = 'bright.jpg';
    }
    chat.appendChild(img);

    setTimeout(() => {
        const finalImg = document.createElement('img');
        finalImg.src = 'info.jpg';
        finalImg.classList.add('result-img');
        chat.appendChild(finalImg);
    }, 2000);
}

window.onload = showMessages;
