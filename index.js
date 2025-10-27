// 제품 정보 객체
const products = {
    'original': {
        image: 'images/drinkables/original_green.png',
        description: '지구상에서 가장 쿨한 에너지 음료인 몬스터 에너지를 만나보세요. 몬스터 에너지만의 강력함을 부드럽고 상쾌한 블렌드에 담아, 넘치는 에너지를 선사합니다!',
        buyLink: 'https://brand.naver.com/monsterenergy/products/6697647421',
        mallLink: 'https://smartstore.naver.com/monsterenergy'
    },

    'zero': {
        image: 'images/drinkables/original_zero sugar.png',
        description: '오리지널 몬스터 에너지의 맛을 그대로 제로 슈거로 담았습니다. 설탕은 뺐지만 넘치는 에너지는 그대로 담았으니 몬스터 에너지 제로 슈거와 함께 피로를 날려보세요.',
        buyLink: 'https://brand.naver.com/monsterenergy/products/6829387585',
        mallLink: 'https://smartstore.naver.com/monsterenergy'
    },

    'ultra': {
        '울트라': {
            image: 'images/drinkables/ultra_ultra.png',
            description: '몬스터 에너지 울트라는 가볍고 시원한 맛으로 무엇을 기대하시든 그 이상의 경험을 선사합니다. 낮은 칼로리에 제로 슈거, 그리고 몬스터 에너지만의 강력함으로 일상에서 에너지를 느껴보세요.',
            buyLink: 'https://brand.naver.com/monsterenergy/products/6697660209',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        },
        '울트라 피치 킨': {
            image: 'images/drinkables/ultra_peachy_keen.png',
            description: '울트라 시리즈의 새로운 라인업, 저칼로리 & 제로 슈거의 몬스터 에너지 울트라 피치 킨의 풍부한 복숭아 향을 느껴보세요.',
            buyLink: 'https://brand.naver.com/monsterenergy/products/10069303464',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        },
        '울트라 시트라': {
            image: 'images/drinkables/ultra_citra.png',
            description: '오직 한국에서만 만날 수 있는 몬스터 에너지 울트라 시트라는 칼로리 걱정 없이 온세상 상큼함을 가득 담은 특별한 맛을 선사합니다.',
            buyLink: 'https://brand.naver.com/monsterenergy/products/6697679078',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        },
        '울트라 선라이즈': {
            image: 'images/drinkables/ultra_sunrise.png',
            description: '아침부터 밤까지 당신의 일상을 책임져주는 몬스터 에너지 울트라 선라이즈는 가볍고 톡톡 터지는 상큼한 오렌지 맛을 낮은 칼로리에 담았습니다.',
            buyLink: 'https://brand.naver.com/monsterenergy/products/8283060956',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        },
        '울트라 스트로베리': {
            image: 'images/drinkables/ultra_strawberry.png',
            description: '제로 슈거로 만나는 꿈 같은 맛! 몬스터 에너지 울트라 스트로베리 드림즈',
            buyLink: 'https://brand.naver.com/monsterenergy/products/11383350611',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        },
    },

    'juice': {
        '오지 스타일': {
            image: 'images/drinkables/juice_오지 스타일.png',
            description: '클래식한 레모네이드에 몬스터만의 방식으로 상큼함과 달콤함의 이상적인 밸런스를 찾아 시트러스 향을 더했습니다.',
            buyLink: 'https://brand.naver.com/monsterenergy/products/10334689054',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        },
        '파피용': {
            image: 'images/drinkables/juice_파피용.png',
            description: '작은 나비의 뜻을 가진 몬스터 파피용은 향긋한 복숭아 맛이 조화롭게 어우러진 섬세한 맛을 자랑합니다.',
            buyLink: 'https://brand.naver.com/monsterenergy/products/11746006278',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        },
        '파이프라인 펀치': {
            image: 'images/drinkables/juice_파이프라인 펀치.png',
            description: '하와이를 대표하는 과일들인 패션후르츠, 오렌지, 구아바에 우리의 대표적인 에너지 블렌드를 더해 몬스터화 해냈습니다.',
            buyLink: 'https://brand.naver.com/monsterenergy/products/6697664509',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        },
        '망고 로코': {
            image: 'images/drinkables/juice_Mango Loco.png',
            description: '신비한 분위기 속의 메리골드 꽃과 추억들은 떠난 이들을 축제로 이끕니다. 누구나 매혹될 이국적인 천상의 주스 블렌드, 망고 로코 환상적인 맛과 몬스터 에너지 만의 마법으로 파티는 계속될 것입니다.',
            buyLink: 'https://brand.naver.com/monsterenergy/products/6697666533',
            mallLink: 'https://smartstore.naver.com/monsterenergy'
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {

    // -----------------------------------------------------------------
    // 1. 제품 페이지 (original, ultra, juice) 전용 스크립트
    // -----------------------------------------------------------------
    const productTabs = document.querySelectorAll('.product-tabs button');
    if (productTabs.length > 0) {
        
        productTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // 모든 탭에서 active 클래스 제거
                productTabs.forEach(t => t.classList.remove('active'));
                // 클릭된 탭에 active 클래스 추가
                this.classList.add('active');
                
                const productName = this.textContent.replace('몬스터 에너지 ', '');
                const productImageEl = document.getElementById('productImage');
                const productDescEl = document.getElementById('productDescription');
                const buyBtnEl = document.getElementById('buyBtn');
                const mallBtnEl = document.getElementById('mallBtn');

                // 현재 페이지가 어떤 라인인지 확인
                const isUltraLine = window.location.pathname.includes('ultra_line');
                const isJuiceLine = window.location.pathname.includes('juice_line');
                
                let productInfo;

                if (isUltraLine) {
                    // 울트라 라인 페이지
                    productInfo = products.ultra[productName];
                } else if (isJuiceLine) {
                    // 주스 라인 페이지
                    productInfo = products.juice[productName];
                } else {
                    // 오리지널 라인 페이지
                    const productType = this.textContent.includes('제로') ? 'zero' : 'original';
                    productInfo = products[productType];
                }

                // 정보 업데이트
                if (productInfo) {
                    productImageEl.src = productInfo.image;
                    productDescEl.textContent = productInfo.description;
                    buyBtnEl.href = productInfo.buyLink;
                    mallBtnEl.href = productInfo.mallLink;
                }
            });
        });

        // 페이지 로드시 기본 버튼 링크도 세팅 (초기 active 탭 기준)
        const buyBtnEl = document.getElementById('buyBtn');
        const mallBtnEl = document.getElementById('mallBtn');
        if (buyBtnEl && mallBtnEl) {
            const isUltraLine = window.location.pathname.includes('ultra_line');
            const isJuiceLine = window.location.pathname.includes('juice_line');
            if (isUltraLine) {
                buyBtnEl.href = products.ultra['울트라'].buyLink;
                mallBtnEl.href = products.ultra['울트라'].mallLink;
            } else if (isJuiceLine) {
                buyBtnEl.href = products.juice['오지 스타일'].buyLink;
                mallBtnEl.href = products.juice['오지 스타일'].mallLink;
            } else { // original_line
                buyBtnEl.href = products.original.buyLink;
                mallBtnEl.href = products.original.mallLink;
            }
        }
    }

    // -----------------------------------------------------------------
    // 2. 메인 페이지 (main.html) 전용 스크립트
    // -----------------------------------------------------------------

    // 'animate-on-scroll' 공통 옵저버
    const scrollObserverElements = document.querySelectorAll(".animate-on-scroll");
    if (scrollObserverElements.length > 0) {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: "0px"
        };
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                } else {
                    entry.target.classList.remove("active");
                }
            });
        }, observerOptions);

        scrollObserverElements.forEach(el => {
            scrollObserver.observe(el);
        });
    }

    // ⭐️ .product-nav 관련 스크립트 제거됨 ⭐️

    // Monster Army 로고 축소 및 텍스트 등장
    const armySection = document.querySelector('.monster-army');
    if (armySection) {
        const armyLogo = armySection.querySelector('.army-logo');
        let isShrunk = false;

        function handleArmyScroll() {
            const rect = armySection.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.4) {
                if (!isShrunk) {
                    armyLogo.classList.add('shrink');
                    setTimeout(() => {
                        armySection.classList.add('show-army-title');
                    }, 700);
                    isShrunk = true;
                }
            } else {
                if (isShrunk) {
                    armyLogo.classList.remove('shrink');
                    armySection.classList.remove('show-army-title');
                    isShrunk = false;
                }
            }
        }
        window.addEventListener('scroll', handleArmyScroll);
    }

    // Mission 아이템 순차 등장
    const missionSection = document.querySelector('.army-mission');
    if (missionSection) {
        const missionItems = document.querySelectorAll('.mission-item');
        let timeoutIds = [];
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    missionItems.forEach((item, idx) => {
                        timeoutIds[idx] = setTimeout(() => {
                            item.classList.add('visible');
                        }, idx * 500);
                    });
                } else {
                    timeoutIds.forEach(id => clearTimeout(id));
                    missionItems.forEach(item => item.classList.remove('visible'));
                }
            });
        }, { threshold: 0.5 });
        observer.observe(missionSection);
    }

    // History 아이템 등장
    const historyItems = document.querySelectorAll('.history-item');
    if (historyItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, { threshold: 0.3 });
        historyItems.forEach(item => observer.observe(item));
    }

    // Moments 타이틀 및 그리드 애니메이션
    const momentsTitle = document.getElementById('moments-title');
    const momentsGrid = document.getElementById('moments-grid');
    if (momentsTitle && momentsGrid) {
        const text = momentsTitle.textContent;
        momentsTitle.textContent = '';
        [...text].forEach(char => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            momentsTitle.appendChild(span);
        });

        const momentsSection = document.querySelector('.moments-section');
        let animating = false;
        function animateMomentsTitle() {
            const rect = momentsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
                if (!animating) {
                    animating = true;
                    const spans = momentsTitle.querySelectorAll('span');
                    spans.forEach(span => span.classList.remove('visible'));
                    momentsGrid.style.opacity = 0;
                    spans.forEach((span, idx) => {
                        setTimeout(() => {
                            span.classList.add('visible');
                            if (idx === spans.length - 1) {
                                setTimeout(() => {
                                    momentsGrid.style.opacity = 1;
                                }, 200);
                            }
                        }, idx * 60);
                    });
                }
            } else {
                animating = false;
                const spans = momentsTitle.querySelectorAll('span');
                spans.forEach(span => span.classList.remove('visible'));
                momentsGrid.style.opacity = 0;
            }
        }
        window.addEventListener('scroll', animateMomentsTitle);
        animateMomentsTitle();
    }

    // 섹션 도트 네비게이션 (main.html 에만 있음)
    const sectionDots = document.querySelectorAll('.section-dots .dot');
    const mainSections = document.querySelectorAll('section[id]');
    if (sectionDots.length > 0 && mainSections.length > 0) {
        
        function updateActiveDot() {
            const scrollPosition = window.scrollY;
            mainSections.forEach((section, index) => {
                if (index >= sectionDots.length) return; 
                
                const sectionTop = section.offsetTop - window.innerHeight / 2;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    sectionDots.forEach(dot => dot.classList.remove('active'));
                    sectionDots[index].classList.add('active');
                }
            });
        }

        sectionDots.forEach(dot => {
            dot.addEventListener('click', function() {
                const targetId = dot.getAttribute('data-target');
                const section = document.getElementById(targetId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        window.addEventListener('scroll', updateActiveDot);
        window.addEventListener('load', updateActiveDot);
    }
    
    // ⭐️ .product-line-nav 관련 스크립트 제거됨 ⭐️

    // ⭐️ 메인 페이지 네비게이션 (도트) 스크롤에 따라 보이기/숨기기 (푸터에서 숨기기 기능 추가)
    const sectionDotsContainer = document.querySelector('.section-dots');
    const heroSection = document.querySelector('.hero');
    const footer = document.querySelector('.footer'); // ⭐️ 푸터 선택
    
    if (sectionDotsContainer && heroSection && footer) { // ⭐️ footer가 있는지 확인
        function handleMainPageNavScroll() {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            const scrollPosition = window.scrollY;
            
            // ⭐️ 푸터 관련 변수 추가
            const windowBottom = scrollPosition + window.innerHeight;
            const footerTop = footer.offsetTop;
            
            // ⭐️ 히어로 섹션의 절반쯤 스크롤되고, 푸터가 보이기 전까지만 보이도록 수정
            if (scrollPosition >= heroBottom - (window.innerHeight / 2) && windowBottom < footerTop + 50) { // (50px 버퍼)
                sectionDotsContainer.classList.add('visible');
            } else {
                sectionDotsContainer.classList.remove('visible');
            }
        }
        window.addEventListener('scroll', handleMainPageNavScroll);
        window.addEventListener('load', handleMainPageNavScroll);
    }

});