const menu = document.querySelector(".menuClick");
const bnrs = document.querySelector(".bnrs-bnrs");
const menuWrap = document.querySelector(".menu-wrap");
const BNRSTYLE = bnrs.style;
const moveslide = ['0%', '-100%', '-200%'];
const btn = document.querySelector(".bnr-btn");
let width = window.innerHeight;
// 이미지 목록 불러오기
const imgbtn = document.querySelectorAll(".btn-img");
let i = 0;

const interval = setInterval(() => {
    // 슬라이드 이동
    bnrs.style = (`margin-left: ${moveslide[i]}`);
    i++;
    if (i === 3) {
        i = 0;
    }
    return i;
}, 5000);

function onMouseOpenMenu(isOpen) {
    if(isOpen)
    {
        menuWrap.style.display = "block";
    }
    else
    {
        menuWrap.style.display = "none";
    }
}

function scrollToMain(e) {
    e.preventDefault();

    let container = document.querySelector(".container");
    let containerTop = container.getBoundingClientRect().top;
    console.log(containerTop);
    // e.pre
    // let windoWidth = window.innerWidth;
    // scrollTo()
}

setInterval(() => {

}, 5000);

function clickImg(e) {
    e.preventDefault();
    // 클릭 시 감지된 태그를 받기
    let imgnbr = Number(e.target.id);
    // i값에 넣어주기
    i = imgnbr;
    bnrs.style = (`margin-left: ${moveslide[i]}`);
    console.log(i);
    return i;
}

// 클릭 이밴트 확인
imgbtn[0].addEventListener("click", clickImg);
imgbtn[1].addEventListener("click", clickImg);
imgbtn[2].addEventListener("click", clickImg);

// 메뉴 이벤트
menu.addEventListener("mouseover", () => {
    onMouseOpenMenu(true);
});
menuWrap.addEventListener("mouseleave", () => {
    onMouseOpenMenu(false);
});

//슬라이드 선택
const btnbg = document.querySelector(".btnbg");
