// ^ ======== SHOW SIDEBAR ========
const navMenu=document.getElementById('side_bar');
const navToggle=document.getElementById('nav_toggle');
const navClose=document.getElementById('nav_close');
let link=document.querySelectorAll('.nav_menu li a');
function showSidebar(){
    navMenu.classList.add('show-sidebar');
}
function hiddenSidebar(){
    navMenu.classList.remove('show-sidebar');
}
navToggle.addEventListener('click',showSidebar);
navClose.addEventListener('click',hiddenSidebar);
for(let i=0;i<link.length;i++){
    link[i].addEventListener('click',function(){
        navMenu.classList.remove('show-sidebar');
    })
}
// ^ ======== SKILLS TABS ========
const tabs =document.querySelectorAll('[data-target]');
const tabsContent=document.querySelectorAll('[data-content]');
tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)
    tabsContent.forEach(tabsContents=>{
        tabsContents.classList.remove('skills_active')
    });
    target.classList.add('skills_active')
    tabs.forEach(tab=>{
        tab.classList.remove('skills_active')
    })
    tab.classList.add('skills_active')
    })
});

// ^ ========== MIXITUP FILTER ==========

let portfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },
    animation: {
        duration: 300
    }
});
// ^ ========== Link Active Work ==========
const linkWork=document.querySelectorAll('.work_item');

function activeLink(){
    linkWork.forEach(l=>l.classList.remove('active-work'));
    this.classList.add('active-work')
}
linkWork.forEach(l=>l.addEventListener('click',activeLink));
// ^ ========== Work popup  ==========
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("work_button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
});
function togglePortfolioPopup(){
    document.querySelector(".portfolio_popup").classList.toggle("open");

}
document.querySelector(".portfolio_popup").addEventListener('click',togglePortfolioPopup);
function portfolioItemDetails(portfolioItem){
    document.querySelector('.pop_thumbnail img').src=portfolioItem.querySelector('.work_img').src;
    document.querySelector('.portfolio_popup-subtitle span').innerHTML=portfolioItem.querySelector('.work_title').innerHTML;
    document.querySelector('.portfolio_popup-body').innerHTML=portfolioItem.querySelector('.portfolio_item-details').innerHTML;
}
// ^ ============= SERVICES MODEL ==================
const modelViews=document.querySelectorAll('.services_model');
const modelBtns=document.querySelectorAll('.services_button');
const modelCloses=document.querySelectorAll('.services_model-close');

let model=function(modelClick){
    modelViews[modelClick].classList.add('active-model')
}
modelBtns.forEach((modelBtn, i ) => {
    modelBtn.addEventListener('click',()=>{
        model(i)
    })
});

modelCloses.forEach((modelClose)=>{
    modelClose.addEventListener('click',()=>{
        modelViews.forEach((modelView)=>{
            modelView.classList.remove('active-model')
        })
    })
})
//^ ================ INPUT ANIMATION =====================
const inputs=document.querySelectorAll('.input');
function focusFun(){
    let parent =this.parentNode;
    parent.classList.add('focus');
}
function blurFun(){
    let parent =this.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus')
    }
} 
inputs.forEach((input)=>{
    input.addEventListener('focus',focusFun)
    input.addEventListener('blur',blurFun)

})


// ^ ==================== ACTIVE LINK NAVBAR ====================

const navlinksEls=document.querySelectorAll(".nav_link")
const sectionEls=document.querySelectorAll(".sec")
let currentSection='home';
window.addEventListener('scroll',()=>{
    sectionEls.forEach(sectionEl=>{
        if(window.scrollY >= sectionEl.offsetTop){
            currentSection=sectionEl.id
        }
    });

    navlinksEls.forEach(navlinksEl=>{
        if(navlinksEl.href.includes(currentSection)){
            document.querySelector(".active-link").classList.remove("active-link")
            navlinksEl.classList.add("active-link");
        }
    })
})


