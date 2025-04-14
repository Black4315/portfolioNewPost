

let header = document.querySelector('#header');
let logoH1 = document.querySelector('.logo-786987807983848966 h1');
let scrollUp = document.querySelector('.scrollUp');
let card = document.querySelectorAll('#card');
const menuNavBtn = document.querySelectorAll('.menu--nav-el-786987807983848966');
const navBtn = document.querySelectorAll('.nav-el-786987807983848966');
let menuBtn = document.querySelector('#nav-menu-btn')
let menuBtnPath = document.querySelectorAll('#nav-menu-btn path')
let menuBtnClose = document.getElementById('nav-menu-btn-close')
let menuBtnPathClose = document.querySelectorAll('#nav-menu-btn-clos path')
let menu = document.getElementById('menu-786987807983848966');
let menuNav = document.querySelector('.menu-nav-menu-786987807983848966')
let secoundHeaders = document.querySelector('.header')
if (secoundHeaders !== null) {
    secoundHeaders.style.backgroundColor = '#40484e';
}


scroll({
    top: 0
})

document.querySelectorAll('#home-href').forEach(e => e.href = window.location.origin);

window.onscroll = function () {

    if (header !== null) {
        if (scrollY >= 50 && menuBtn.getAttribute('onclick') === 'openMenu()') {


            header.style.backgroundColor = '#2f363b';
            header.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
            header.style.transition = '0.4s';

        }
        else {
            header.style={}

        }
    }
    if (scrollY >= 350) {

        scrollUp.style.display = 'flex';
        scrollUp.style.opacity = '1';
    }
    else {
        scrollUp.style.display = 'none';
        scrollUp.style.opacity = '0';
    }



}



scrollUp.onclick = function () {
    window.scroll({
        top: 0
        , behavior: 'smooth'

    })
}

navBtn.forEach((item) => {

    item.addEventListener('click', () => {

        let el = document.getElementById(item.getAttribute('data-link'))
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })

    })


})



function openMenu() {


    menuBtn.setAttribute('onclick', 'closeMenu()')
    menuBtnPath[0].style.transition = '0s'
    menuBtnPath[0].style.opacity = '0'
    menuBtnPath[1].setAttribute('d', `M 20,80 L 80,20`)
    menuBtnPath[2].setAttribute('d', ` M 20,20 L 80,80`)
    document.body.style.overflow = 'hidden'
    menu.classList.add('menu-active')
    if (header !== null) {
        header.style.backgroundColor = 'transparent';
    }
    scrollUp.style.display = 'none';
    if (secoundHeaders !== null) {
        secoundHeaders.style.backgroundColor = '';
    }

}



function closeMenu() {
    menuBtn.setAttribute('onclick', 'openMenu()')
    menuBtnPath[0].style.transition = '0.25s'
    menuBtnPath[0].style.opacity = '1'
    menuBtnPath[1].setAttribute('d', `M 20,22.5 L 80,22.5`)
    menuBtnPath[2].setAttribute('d', `M 28,76.5 L 80,76.5`)
    menu.classList.remove('menu-active')
    if (scrollY >= 50) {
        if (header !== null) {
            header.style.backgroundColor = '#40484e';
        }
    }

    if (secoundHeaders !== null) {
        secoundHeaders.style.backgroundColor = '#40484e';
    }
    document.body.style.overflowY = 'auto'
    scrollUp.style.display = 'flex';

}

function myFunction(x) {
    if (x.matches) {
        closeMenu()
        menuBtn.style.stroke = ''
    }

}

let x = window.matchMedia("(min-width: 947px)")
setInterval(function () {
    if (menuBtn.getAttribute('onclick') === 'closeMenu()') {
        myFunction(x)

    }
}, 1)

x.addListener(myFunction);
let homeNavMenu = document.querySelector('.menu--services-list-786987807983848966 ul li')

homeNavMenu.onclick = function () {
    window.location.href = 'https://newpost-1.firebaseapp.com/'
}

menuNavBtn.forEach((item) => {

    item.addEventListener('click', () => {
        closeMenu()
        let el = document.getElementById(item.getAttribute('data-link'))
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })


    })


})
//card

let skillCard = document.querySelectorAll('.skill-section .card:not(.html-card) ')
let sectionContent = document.querySelectorAll('.content-786987807983848966:not(.tel-section-786987807983848966 .content)')
let skillSectionContent = document.querySelector('.skill-section .content-786987807983848966')
let skillSectionCard = document.querySelectorAll('.skill-section .content-786987807983848966 .card')
let skillPageCardSection = document.querySelectorAll('.card-pages-section')
let cssRule = document.styleSheets[1].cssRules
let skillPageSection = document.querySelector('.card-pages-section')

//change colors part

skillCard.forEach(card => {

    let cardSkillProgessSpan = card.querySelector(' .card-body-text .skill-progress span');
    let cardSkillH2 = card.querySelector(' .card-body-text h2');
    let cardSkilviewPageSpan = card.querySelector('.view-page span a');

    if (card.getAttribute('cardMainColor') != '') {
        cardSkillProgessSpan.style.color = `var(--${card.getAttribute('cardMainColor')})`
        cardSkilviewPageSpan.style.color = `var(--${card.getAttribute('cardMainColor')})`
        cardSkillH2.style.color = `var(--${card.getAttribute('cardMainColor')})`

    }
    else {
        cardSkillProgessSpan.style.color = 'var(--primary-sec-2-color)'

    }

});



skillSectionCard.forEach(card => {
    let cardSkilviewPageSpan = card.querySelector('.view-page span a');
    cardSkilviewPageSpan.href = `${card.getAttribute('pageLink')}.html`
})


//change colors part

function configerationOfCardChildren() {

    sectionContent.forEach(element => {
        let allcards = element.querySelectorAll('.card')
        let result = allcards.length

        if (result % 2 != 0) {
            allcards[allcards.length - 1].classList.add('card2')
        }

    });

}
configerationOfCardChildren()






if (localStorage.pageMood == 'skillCardPage') {
    if (skillPageSection != null) {
        let cssNewSheet = document.createElement('style')
        let cssvarPrimary2Color = document.createTextNode(`body {--primary-sec-2-color:var(--${skillPageSection.getAttribute('cardMainColor')});}`)
        document.head.appendChild(cssNewSheet)
        cssNewSheet.appendChild(cssvarPrimary2Color)

    }
}

//card

fetch('./skill.json')
    .then((allSkillCardsInfo) => allSkillCardsInfo.json())
    .then((skillCardInfo) => {
        skillCardInfo.forEach(cardInfo => {

            //card

            skillSectionCard.forEach(card => {
                let cardSkillP = card.querySelector('.card-body-text  p');
                if (cardInfo.cardName == card.getAttribute('cardName')) {
                    cardSkillP.innerHTML = cardInfo.cardContent + " " + cardSkillP.innerHTML
                    let cardSkillProgessSpan = card.querySelector('.card-body-text .skill-progress span');
                    cardSkillProgessSpan.innerHTML = ` ${cardInfo.progress}%`
                
                    
                }

            })
            //card
            //page card

            if (skillPageSection != null) {
                let skillPageSectionCardContent = skillPageSection.querySelector('.main-part-pages-section .intro-text p')
                let skillPageSectionCardProgress = skillPageSection.querySelector('.main-part-pages-section .main-details--progress .progress svg circle')
               
                if (cardInfo.cardName == skillPageSection.getAttribute('cardName')) {
                    skillPageSectionCardContent.innerHTML = cardInfo.cardContent;


                    if (cardInfo.cardDetails != null) {
                    for (let i = 0; i < cardInfo.cardDetails.length; i++) {
                        let skillPageSectionCardDetails = document.createElement('p');
                        let skillPageSectionCardMainDetails = skillPageSection.querySelector('.main-part-pages-section .main-details')
                        let skillPageSectionCardDetailsMark = document.createElement('span')

                        skillPageSectionCardDetailsMark.classList.add('content-mark')
                        skillPageSectionCardDetailsMark.innerHTML = `${i + 1} - `

                        skillPageSectionCardDetails.appendChild(skillPageSectionCardDetailsMark)
                        skillPageSectionCardMainDetails.appendChild(skillPageSectionCardDetails)

                        skillPageSectionCardDetails.innerHTML += cardInfo.cardDetails[i]


                    }

                }
              
              
                    let sad = document.createTextNode(`@keyframes progress-circle{100%{stroke-dashoffset: ${470-472 * cardInfo.progress/100 }; }}`)
                    document.querySelector('style').appendChild(sad)


            }
            }

            //page card

        });


    })
   


    

///header//
let mainFooter = document.getElementById('footer');
let mainheader = document.getElementById('header');

let headerFooterArray = [mainheader.innerHTML, mainFooter.innerHTML, menu.innerHTML]

 
    function setheaderFooterArray() {

        localStorage.setItem('headerFooter', JSON.stringify(headerFooterArray))
    
    }
    setheaderFooterArray()
    
    

///header//

