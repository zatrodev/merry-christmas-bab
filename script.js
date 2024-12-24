class Section {
  constructor(title, date, text, ps, backgroundSize = null) {
    this.title = title;
    this.date = date;
    this.text = text;
    this.ps = ps;
    this.backgroundSize = backgroundSize;
  }

  createDOM(reverse) {
    const sectionWrapper = document.createElement("div");
    sectionWrapper.classList.add("section");

    const img = document.createElement("div");
    img.classList.add("img");
    img.style.backgroundImage = this.img;

    const captionWrapper = document.createElement("div");
    captionWrapper.classList.add("caption");

    const title = document.createElement("h1");
    title.textContent = this.title;

    const date = document.createElement("p");
    date.textContent = this.date;

    const text = document.createElement("p");
    text.innerHTML = this.text;

    const ps = document.createElement("p");
    ps.innerHTML = this.ps;

    captionWrapper.appendChild(title);
    captionWrapper.appendChild(date);
    captionWrapper.appendChild(document.createElement("br"));
    captionWrapper.appendChild(text);
    captionWrapper.appendChild(document.createElement("br"));
    captionWrapper.appendChild(ps);

    if (reverse) {
      sectionWrapper.append(captionWrapper, img);
    } else {
      sectionWrapper.append(img, captionWrapper);
    }

    return sectionWrapper;
  }

  empty() {
    const sectionWrapper = document.createElement("div");
    sectionWrapper.classList.add("section");

    return sectionWrapper;
  }
}

const sections = [];

const data = [
  new Section(
    "The first time I met you.",
    "June 26, 2024",
    `
    You already probably know how I saw this image: You told me your name,
          I looked it up on Facebook (oo na, stalker na), and wow! Nakita ko si
          Iana Laura Nato Notario. Unang naisip ko diyan, "Wow, beach girl..."
          At pangalawa, "Shet, ganda ni ate. Mukhang sinwerte ako dito ah." At
          pangatlo, "Ge, landiin natin to."
    `,
    `
    I didn't know it back then but that third thought turned out to be the
          best decision I've ever made.
    `
  ),
  new Section(
    "The egg heart (???)",
    "July 9, 2024",
    `
     July 9 and I'm already sending you this??? Angas mo naman. Di, sa
          totoo lang kasi wala na akong masabing interesting sayo, kaya ayan,
          nagpasikat nalang ako hehe. Gumana ba? 😎
    `,
    `
     Foreshadowing ata to, bab. Panay egg niluto natin sa dorm mo, tapos tayo yung dalawang yolk :o hehehehehe.
    `
  ),
  new Section(
    "What's ahead of us.",
    "July 20, 2024",
    `
    I was watching "She's Dating the Gangster". It somehow made me think of you, made me think of our future.
    Will we last until I see you? I hope so, because unfortunately, I am starting to like you. 
    `,
    `
    Sensya na sa unfortunately, but you know me bab. I always end up hurting those people who care about me. 
    But fortunately, you wouldn't be one of those people. Why, you ask? I just know.
    `
  ),
  new Section(
    "Comforting you.",
    "July 22, 2024",
    `
    Yes, yes, ang witty ko sa part na 'to kahit 50 pesos lang talaga laman ng GCash ko. haha.
    `,
    `
     At this point, I may have annoyed you more than I comfort you (hehe). Pero, sa lahat ng inis, tampo, at toyo mo bab, hinding hindi ako mapapagod suyuin ka. 
    `,
    "contain"
  ),
  new Section(
    `"Gusto ko lang ishare" #1`,
    "July 24, 2024",
    `
    Legit yung frustration ko dito. Amp, nasa isip ko non, "Wala na, sign na to." 
    Hays. Sorry uli, inang bulsa kasi yan.
    `,
    `
    Qpal, delete pa kasi nang delete ng pics, nadamay tuloy convo natin. 
    Jokes on "July 24" Robbie though, the sign was wrong 😏.
    `,
    "contain"
  ),
  new Section(
    "I can't wait to see you, pretty.",
    "July 27, 2024",
    `
    There's only one thing in my mind, "I can't wait to see you, Yana." 
    Only a few days left, and I get to see the gorgeous woman who's been bothering me for a month.
    `,
    `
    Now, I see you everyday.
    <br />
    You're bothering me now everyday. 
    <br /> <br />
    Guess what, I am looking forward to more of it.
    `
  ),
  new Section(
    "Nagpapapogi si qpal.",
    "August 3, 2024",
    `
    Excuse lang talaga yung nagpapa-approve ako sayo ng outfit. Di talaga ako bibili, nagpapapogi lang 😏.
    `,
    `
    True yan, bab.
    `
  ),
  new Section(
    "TODOs.",
    "August 5, 2024",
    `
    I was really excited doing these things with you; made me even more excited to see you. 
    Awit, ngayon palang dami na nating balak gawin. Weird mo, Yana. Gusto na nga ata talaga kita. 
    I hope we get to do it all.
    `,
    `
    Turns out, you're much weirder than I thought. And now, I'm in love with you. 
    `
  ),
  new Section(
    "First date.",
    "August 15, 2024",
    `
    I don't know why pero for some reason sobrang kabado ko sayo. I had no idea what to say. 
    Tangina bilis ko naubos ng tubig ko ay. But, I had fun—especially when we're at Melt Street. 
    We weren't talking at all, just eating our ice cream, listening to Cup of Joe. It was magical.
    <strong>You</strong> were magical.
    `,
    `
    I still get nervous when we go out. You are <strong>that</strong> beautiful, lovey.
    `
  ),
  new Section(
    "Blooming.",
    "August 19, 2024",
    `
    All I could think of was how your smile would look like when I give you your flowers.
    Iniisip ko pa, "Hindi ba parang ang aga magbigay ng flowers?" Heh, bala na. 
    `,
    `
    I still remember it. Your smile was perfect.
    `
  ),
  new Section(
    "Hehe.",
    "August 25, 2024",
    `
    Yun oh, comfy na siya sa akin. Sumasandal na sa balikat ko 'yan! 
    Maybe we can be like this for a long time. 
    `,
    `
    Dark days ahead. Skip na natin, wala rin ako mahanap na matinong pics hehe. But, it was the right move!
    Though, they were not that dark. 
    `
  ),
  new Section(
    "Maybe.",
    "September 22, 2024",
    `
    Di ko alam kung bakit kita kinukuhanan ng picture dito. We're still friends that day. 
    But I remember finding you beautiful. Maybe that's why. Panget mo.
    `,
    `
    Ang <strong>panget mo</strong> nga talaga.
    `
  ),
  new Section(
    `"Gusto ko lang ishare" #2`,
    "October 8, 2024",
    `
    Eyyy, nasa kama ko siya. Hi, friend! Ay mali. Hi, bestie!
    `,
    `
    You already had me this time. I've straight up fallen for you.
    `,
    "contain"
  ),
  new Section(
    "cute mo.",
    "October 11, 2024",
    `
    My favorite pic of you of all time.
    `,
    `
    Pero baka mapalitan ng pic natin as an official couple. 
    <br />
    Hmmm...
    `
  ),
  new Section(
    "damn.",
    "October 21, 2024",
    `
    I remember being completely dumbstruck when I first saw you in that outfit. 
    `,
    `
    Damn baby, you are gorgeous.
    `
  ),
  new Section(
    "Bagyo.",
    "October 24, 2024",
    `
    That day, I realized I really wanted you to be mine. 
    I tried to give everything you needed, and you tried to gave mine.
    `,
    `
    Ups and downs, I'm with you, baba. Like you said, it's you and I against the problem.
    `
  ),
  new Section(
    "your day.",
    "October 28, 2024",
    `
    Happy birthday, mahal! 
    `,
    `
    I pray na sana next year tayo pa rin.
    `
  ),
  new Section(
    "😳",
    "November 8, 2024",
    `
    Wow. 
    `,
    `
    just wow.
    `
  ),
  new Section(
    "Second date!",
    "November 10, 2024",
    `
    Cute natin bab kahit panay upo lang ginawa natin sa date. Hehe.
    I still very much enjoyed it. <br /> You were as beautiful as that sunset. 
    Sayang nga lang daming tao.
    `,
    `
    I would've kissed you if there were no one around.
    `
  ),
  new Section(
    "1v1.",
    "November 15, 2024",
    `
    Eyyy, sinabayan ako uminom ni qpal. I know na ayaw mo uminom pero sinamahan mo pa rin ako.
    Thank you, love ko. I'm glad you're here for my birthday.
    `,
    `
    I still have something to say pero wag na.
    <br /> <br />
    I'll just do it to you soon.
    `
  ),
  new Section(
    "good morning.",
    "November 22, 2024",
    `
    Lagi ka nalang maganda, bab. Ang sarap gumising pag ikaw nakikita ko sa umaga.
    Paamoy nga ng hininga! I love you so much, baba.
    `,
    `
    ♪ At pag gising sa umaga 
    <br />
    Maamo mong mukha ang nakikita
    <br />
    Na sa akin ay lubos na nagpa-paligaya ♪
    `,
    "contain"
  ),
];

window.onload = async (e) => {
  const section = document.getElementsByClassName("section")[0];
  function clearDiv(div) {
    div.removeChild(div.firstElementChild);
  }

  function createTextElement(text) {
    const div = document.createElement("h1");
    div.textContent = text;

    return div;
  }

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function showText(text, delay) {
    const div = createTextElement(text);
    section.appendChild(div);

    await wait(delay);

    clearDiv(section);
  }

  function showButton() {
    const button = document.createElement("button");
    button.classList.add("button-30");
    button.textContent = "start";
    button.onclick = async (e) => {
      button.remove();

      await showText("gamitin mo ↑ and ↓ keys mo for navigation.", 2000);

      section.remove();
      loadSections(e);
    };

    section.appendChild(button);
  }

  await showText("hi baba!", 2000);
  await showText("panis, ganto na naman", 2000);
  await showText("pero di", 2000);
  await showText("sabi mo kasi, di ako masyadong nagshashare", 2500);
  await showText("kaya...", 2000);
  await showText("I wanted to share you my perspective this time", 3000);

  showButton();
};

let currentIndex = 0;

function loadSections(e) {
  sections.push(new Section().empty());

  data.forEach((section, index) => {
    section.img = `url(./img/${index + 1}.jpg)`;

    const sectionDOM = section.createDOM(index % 2 != 0);
    sectionDOM.getElementsByClassName("img")[0].style.backgroundSize =
      section.backgroundSize;
    sections.push(sectionDOM);
  });

  sections.push(createLastSection());

  document.body.append(...sections);

  sections[currentIndex].classList.add("active");
  setTimeout(showNextSection, 10);

  document.body.appendChild(createLastSection());
}

function createLastSection() {
  const sectionWrapper = document.createElement("div");
  sectionWrapper.classList.add("section");

  const captionWrapper = document.createElement("div");
  captionWrapper.classList.add("caption");

  const title = document.createElement("h1");
  title.textContent = "Merry Christmas, Iana Laura aka lovey.";

  const date = document.createElement("p");
  date.textContent = "December 24, 2024";

  const text = document.createElement("p");
  text.innerHTML = `
      It's now Christmas and I get to spend it with you. 
      <br />
      Alam mo ba, you're the first girl that I get to spend Christmas with?
      <br />
      I hope you're also the last. 
       `;

  const ps = document.createElement("p");
  ps.innerHTML = "I love you.";

  captionWrapper.appendChild(title);
  captionWrapper.appendChild(date);
  captionWrapper.appendChild(document.createElement("br"));
  captionWrapper.appendChild(text);
  captionWrapper.appendChild(document.createElement("br"));
  captionWrapper.appendChild(ps);

  sectionWrapper.appendChild(captionWrapper);

  return sectionWrapper;
}

function showNextSection() {
  if (currentIndex < sections.length - 1) {
    sections[currentIndex].classList.remove("active");
    currentIndex++;
    sections[currentIndex].classList.add("active");
  }
}

function showPreviousSection() {
  if (currentIndex > 1) {
    sections[currentIndex].classList.remove("active");
    currentIndex--;
    sections[currentIndex].classList.add("active");
  }
}

document.body.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    showNextSection();
  } else if (e.key === "ArrowUp") {
    showPreviousSection();
  }
});
