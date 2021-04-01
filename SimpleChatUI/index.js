const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
  "means hello and goodbye in hawaii but , uh aloha has snothing todo with this ap",
  "im so fuckin drunk",
  "okay, here's the deal iI'm gonna rest my eyes for a bit .I'm not goin to sleep",
  "i just jussttt need to rest my eyes so let's try to make this one simple. wear a mask",
  "wear a mask and try to make i5t a lesson about yourselves like how your selfish or something",
  "and umh, oh yea. your phone is about to get loudSo turn down the volume headphoes",
  "i just jump scares are lame. you gotta be ready for ,m I'm gonna play Nickelback",
  "and also hawaii"
  /*
ALOhA!
means hello and goodbye in hawaii
but, uh Aloha means has nothin to do with this app
I'm so fuckin drunk
okay, here's the deal i I'm gonna rest my eyes for a bit
I'm not goin to sleep. i just just need to rest my eyes so
let's make this one simple just
try to hit some 3 pointers

let's say you have to hit 5 3 pointers in 5 minutes or i dunno the whole place
the whole planet will get blown up with a neutrino bomb

and try to make it a lesson about yourselves like like how selfish you are or something
and also hawaii
  */
];

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "./tumblr_ounrfqsPuy1v4j5emo4_500.jpeg";
const PERSON_IMG = "";
const BOT_NAME = "Rick";
const PERSON_NAME = "";

msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = "";

  botResponse();
});

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

var rickResponseNum = 0;
function botResponse() {
  // const r = random(0, BOT_MSGS.length - 1);

  const msgText = BOT_MSGS[rickResponseNum];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
  if (rickResponseNum == 6) {
    console.log('running rick roll');
    rickRoll();
  }
  rickResponseNum = rickResponseNum + 1;
}
/*
function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}
*/
// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
