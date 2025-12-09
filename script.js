// 슬러그 기반 페이지 데이터 구조
const pageData = {
    'libertas': {
        slug: 'libertas',
        title: 'Libertas',
        titleKr: '리베르타스',
        subtitle: ':자유의 악마',
        code: '002459B',
        number: 3,
        audioUrl: 'audio/libertas.mp3', // 음성 파일 경로
        content: '리베르타스는 30년대부터 850년대까지 관찰된 악마로, 문명을 파괴하고 자연을 형성할 수 있는 능력을 가진 것으로 알려져 있습니다. 동물적인 외형을 가지고 있으며, 이를 길들이려는 시도는 매우 위험합니다. 인간과 유사하거나 그보다 낮은 수준의 지능을 가지고 있으며, 약한 악마들을 제어할 수 있는 능력이 있습니다. 리베르타스는 "거세의 악마"로 알려진 카스트라티오(Castratio)의 형제이며, 카스트라티오가 리베르타스의 형으로 확인되었습니다.',
        image: 'images/libertas-illustration.png', // 흰색 투명 PNG 이미지
        imageCaption: '리베르타스는 30년대부터 850년대까지 관찰되었으며, 9세기 인류는 이를 알고 사회를 형성했습니다. 리베르타스는 문명을 짓밟고 자연을 형성한 악마로, 가축의 외형을 가지고 있습니다.',
        references: [
            { text: '카스트라티오', slug: 'castratio' },
            { text: '악마 분류법', slug: 'demon-classification' }
        ]
    },
    'castratio': {
        slug: 'castratio',
        title: 'Castratio',
        titleKr: '카스트라티오',
        subtitle: ':거세의 악마',
        code: '002460A',
        number: 4,
        audioUrl: 'audio/castratio.mp3',
        content: '카스트라티오는 리베르타스의 형으로 알려진 악마입니다. 거세의 악마라는 이름으로 불리며, 특별한 능력을 가지고 있는 것으로 추정됩니다. 리베르타스와의 관계는 복잡하며, 두 악마 간의 상호작용에 대한 연구가 진행 중입니다.',
        image: 'images/castratio-illustration.png',
        imageCaption: '카스트라티오는 리베르타스의 형으로, 거세의 악마라는 이름으로 알려져 있습니다.',
        references: [
            { text: '리베르타스', slug: 'libertas' }
        ]
    },
    'demon-classification': {
        slug: 'demon-classification',
        title: 'Demon Classification',
        titleKr: '악마 분류법',
        subtitle: ':체계적 분류',
        code: '000001A',
        number: 1,
        audioUrl: 'audio/classification.mp3',
        content: '악마들은 그들의 능력, 위험도, 관찰 기간에 따라 체계적으로 분류됩니다. 각 악마는 고유한 식별 코드를 부여받으며, 이는 연구와 문서화의 기준이 됩니다. 분류 체계는 지속적으로 업데이트되며, 새로운 발견이 있을 때마다 재검토됩니다.',
        image: 'images/classification-diagram.png',
        imageCaption: '악마 분류 체계는 체계적이고 과학적인 접근을 통해 유지됩니다.',
        references: [
            { text: '리베르타스', slug: 'libertas' }
        ]
    }
};

$(document).ready(function() {
    let currentPage = 'archive';

    // 아카이브 책 클릭 이벤트
    $('#archive-book').on('click', function() {
        const $book = $(this);
        const $archivePage = $('#archive-page');
        
        // 책 색상 전환 애니메이션
        $book.addClass('flipped');
        $archivePage.addClass('flipped');
        
        // 색상 전환 후 인트로 페이지로 이동
        setTimeout(function() {
            switchPage('archive', 'intro');
            startIntroAnimation();
        }, 800);
    });

    // 다음 버튼 클릭 이벤트
    $('#next-btn').on('click', function() {
        // 페이드 아웃 처리
        $('#intro-page').addClass('fade-out');
        
        setTimeout(function() {
            // 아카이브 페이지로 돌아가기
            $('#archive-page').removeClass('active');
            $('#archive-book').removeClass('flipped');
            $('#archive-page').removeClass('flipped');
            
            // 플립북 페이지로 이동
            switchPage('intro', 'flipbook');
            initFlipbook();
        }, 800);
    });

    // 페이지 전환 함수
    function switchPage(from, to) {
        const pageMap = {
            'archive': '#archive-page',
            'intro': '#intro-page',
            'flipbook': '#flipbook-page'
        };

        $(pageMap[from]).removeClass('active');
        setTimeout(function() {
            $(pageMap[to]).addClass('active');
            currentPage = to;
        }, 300);
    }

    // 인트로 애니메이션 시작
    function startIntroAnimation() {
        setTimeout(function() {
            $('#intro-page').addClass('active');
            
            // "Intro..." 제목이 먼저 나타난 후, 약간의 딜레이를 두고 줄글이 나타나도록
            setTimeout(function() {
                const textLines = $('.intro-text-line');
                let delay = 0;
                
                textLines.each(function(index) {
                    const $line = $(this);
                    setTimeout(function() {
                        $line.addClass('visible');
                        
                        // 마지막 줄이 나타난 후 버튼 표시
                        if (index === textLines.length - 1) {
                            setTimeout(function() {
                                $('#next-btn').show().addClass('visible');
                            }, 600);
                        }
                    }, delay);
                    delay += 500; // 각 줄마다 0.5초 간격
                });
            }, 1000); // "Intro..." 제목이 나타난 후 1초 뒤에 줄글 시작
        }, 100);
    }

    // 플립북 초기화
    function initFlipbook() {
        // 데이터 기반으로 페이지 생성
        renderPagesFromData();
        
        setTimeout(function() {
            $(".flipbook").turn({
                width: 1000,
                height: 600,
                autoCenter: true,
                gradients: true,
                elevation: 50,
                when: {
                    turning: function(event, page, view) {
                        // 페이지 넘김 효과
                    }
                }
            });
        }, 300);
    }

    // 데이터 기반 페이지 렌더링 함수
    function renderPagesFromData() {
        const $flipbook = $('.flipbook');
        
        // 기존 콘텐츠 페이지 제거 (hard 페이지는 유지)
        $flipbook.find('.page-content').remove();
        
        // 첫 번째 hard 페이지 다음에 삽입할 위치 찾기
        const $firstHard = $flipbook.find('.hard').first();
        const $insertAfter = $firstHard.next('.hard');
        
        // 각 데이터 항목에 대해 페이지 생성
        Object.values(pageData).forEach(function(data, index) {
            // 왼쪽 페이지 (텍스트 중심)
            const $leftPage = $('<div class="page-content" data-slug="' + data.slug + '"></div>');
            $leftPage.append(createLeftPageContent(data));
            
            // 오른쪽 페이지 (이미지 중심)
            const $rightPage = $('<div class="page-content" data-slug="' + data.slug + '"></div>');
            $rightPage.append(createRightPageContent(data));
            
            // 첫 번째 항목이면 첫 번째 hard 다음에 삽입
            if (index === 0) {
                $insertAfter.after($leftPage);
                $leftPage.after($rightPage);
            } else {
                // 그 외에는 마지막 페이지 뒤에 추가
                $flipbook.find('.page-content').last().after($leftPage);
                $leftPage.after($rightPage);
            }
        });
    }

    // 왼쪽 페이지 콘텐츠 생성
    function createLeftPageContent(data) {
        const $page = $('<div class="archive-page-left"></div>');
        
        // 큰 제목과 레터링
        const $titleSection = $('<div class="page-title-section"></div>');
        $titleSection.append(`<h1 class="page-main-title">${data.title}</h1>`);
        $titleSection.append(`<h2 class="page-title-kr">${data.titleKr}</h2>`);
        $titleSection.append(`<div class="page-subtitle">${data.subtitle} <span class="speaker-icon">🔊</span> <span class="page-code">${data.code}</span></div>`);
        $page.append($titleSection);
        
        // 번호 박스와 음성 버튼
        const $numberSection = $('<div class="page-number-section"></div>');
        $numberSection.append(`<div class="page-number-box">${data.number}</div>`);
        const $audioBtn = $('<button class="audio-button" data-audio="' + data.audioUrl + '">🔊 음성 재생</button>');
        $numberSection.append($audioBtn);
        $page.append($numberSection);
        
        // 본문 텍스트
        const $contentSection = $('<div class="page-content-text"></div>');
        $contentSection.append(`<p>${data.content}</p>`);
        $page.append($contentSection);
        
        // 참조 섹션
        if (data.references && data.references.length > 0) {
            const $refSection = $('<div class="page-references"></div>');
            $refSection.append('<div class="ref-label">참조:</div>');
            const $refList = $('<div class="ref-list"></div>');
            data.references.forEach(function(ref) {
                const $refLink = $('<a href="#" class="ref-link" data-slug="' + ref.slug + '">' + ref.text + '</a>');
                $refList.append($refLink);
            });
            $refSection.append($refList);
            $page.append($refSection);
        }
        
        return $page;
    }

    // 오른쪽 페이지 콘텐츠 생성
    function createRightPageContent(data) {
        const $page = $('<div class="archive-page-right"></div>');
        
        // 이미지
        if (data.image) {
            const $imageSection = $('<div class="page-image-section"></div>');
            $imageSection.append(`<img src="${data.image}" alt="${data.title}" class="page-main-image" />`);
            $page.append($imageSection);
        }
        
        // 이미지 하단 텍스트
        if (data.imageCaption) {
            const $captionSection = $('<div class="page-image-caption"></div>');
            $captionSection.append(`<p>${data.imageCaption}</p>`);
            $page.append($captionSection);
        }
        
        return $page;
    }

    // 페이지로 이동하는 함수
    function navigateToPage(slug) {
        if (!pageData[slug]) {
            console.error('페이지를 찾을 수 없습니다:', slug);
            return;
        }
        
        const $flipbook = $('.flipbook');
        
        // 해당 슬러그를 가진 왼쪽 페이지 찾기
        const $targetPage = $flipbook.find('.page-content[data-slug="' + slug + '"]').first();
        
        if ($targetPage.length === 0) {
            console.error('페이지 요소를 찾을 수 없습니다:', slug);
            return;
        }
        
        // 모든 페이지 요소 찾기 (hard 포함)
        const allPages = $flipbook.children();
        const targetIndex = allPages.index($targetPage);
        
        if (targetIndex >= 0) {
            // turn.js의 페이지 번호는 1부터 시작
            const pageNumber = targetIndex + 1;
            $flipbook.turn('page', pageNumber);
        }
    }

    // 참조 링크 클릭 이벤트
    $(document).on('click', '.ref-link', function(e) {
        e.preventDefault();
        const slug = $(this).data('slug');
        navigateToPage(slug);
    });

    // 음성 재생 버튼 클릭 이벤트
    $(document).on('click', '.audio-button', function() {
        const audioUrl = $(this).data('audio');
        if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.play().catch(function(error) {
                console.error('음성 재생 실패:', error);
                alert('음성 파일을 찾을 수 없습니다.');
            });
        }
    });
});

