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
        
        // 페이지가 완전히 렌더링될 때까지 대기
        setTimeout(function() {
            const $flipbook = $(".flipbook");
            
            // CSS vw 기반 크기를 실제 픽셀 값으로 계산
            // CSS: width: 90vw, height: 60vw
            const viewportWidth = $(window).width();
            
            // vw 기반 계산 (90vw, 60vw)
            let flipbookWidth = viewportWidth * 0.9;
            let flipbookHeight = viewportWidth * 0.6; // width 기준으로 비율 유지
            
            // 최대 크기 제한 (CSS max-width, max-height와 동일)
            flipbookWidth = Math.min(flipbookWidth, 1400);
            flipbookHeight = Math.min(flipbookHeight, 900);
            
            // cornerSize를 적절히 설정 (너무 크면 콘텐츠가 잘림)
            // 모서리 감지 영역은 작게, 콘텐츠 보호를 위해
            const cornerSize = Math.min(flipbookWidth * 0.12, flipbookHeight * 0.12, 120);
            
            // 커서 이미지 경로 설정 (images 폴더에 위치)
            const cursorConfig = {
                flipBase: 'images/flip-cursor.png', // 기본 flip 커서 (선택사항)
                flipNext: 'images/flip-next.png',  // 앞으로 넘기기 커서
                flipPrev: 'images/flip-prev.png'   // 뒤로 넘기기 커서
            };
            
            // turn.js 초기화 (CSS는 vw로 유지, turn.js에는 px 값 전달)
            $flipbook.turn({
                width: flipbookWidth,
                height: flipbookHeight,
                autoCenter: true,
                gradients: true,
                elevation: 30, // elevation을 낮춰서 덜 들리도록
                cornerSize: cornerSize, // 페이지 크기에 비례한 감지 영역
                turnCorners: 'all', // 모든 모서리에서 페이지 넘김 가능
                duration: 700, // 애니메이션 속도 조정
                when: {
                    turning: function(event, page, view) {
                        // 페이지 넘김 중 콘텐츠 보호
                        const $turningPage = $(view[0]);
                        if ($turningPage.length) {
                            $turningPage.find('.page-content').css({
                                'overflow': 'hidden',
                                'pointer-events': 'none'
                            });
                        }
                    },
                    turned: function(event, page, view) {
                        // 페이지 넘김 완료 후 원래대로
                        $('.flipbook .page-content').css({
                            'overflow': '',
                            'pointer-events': ''
                        });
                    }
                }
            });
            
            // 기본 드래그 인터랙션 비활성화
            $flipbook.turn('disable', true);
            
            // 커서 기반 클릭 인터랙션 설정
            setupCursorInteraction($flipbook, cornerSize, cursorConfig);
            
            // 윈도우 리사이즈 시 크기 업데이트
            let resizeTimer;
            $(window).off('resize.flipbook').on('resize.flipbook', function() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function() {
                    const $flipbook = $(".flipbook");
                    const newViewportWidth = $(window).width();
                    let newWidth = newViewportWidth * 0.9;
                    let newHeight = newViewportWidth * 0.6;
                    
                    newWidth = Math.min(newWidth, 1400);
                    newHeight = Math.min(newHeight, 900);
                    
                    if ($flipbook.data('turn')) {
                        $flipbook.turn('size', newWidth, newHeight);
                    }
                }, 250);
            });
        }, 500); // 렌더링 대기 시간 증가
    }

    // 페이지 넘김 인디케이터 설정
    function setupCursorInteraction($flipbook, cornerSize, cursorConfig) {
        let hoveredArea = null; // 'left' 또는 'right'
        
        // 커서 이미지 경로 (선택사항 - 나중에 사용 가능)
        const cursorImages = {
            flipNext: cursorConfig.flipNext || null,
            flipPrev: cursorConfig.flipPrev || null
        };
        
        // 페이지 넘김 인디케이터 생성 (flipbook 외부에 배치)
        const $prevIndicator = $('<div class="page-nav-indicator page-nav-prev"><span class="nav-text">이전</span></div>');
        const $nextIndicator = $('<div class="page-nav-indicator page-nav-next"><span class="nav-text">다음</span></div>');
        
        // flipbook-page에 인디케이터 추가 (flipbook 외부)
        const $flipbookPage = $('#flipbook-page');
        $flipbookPage.append($prevIndicator, $nextIndicator);
        
        // 인디케이터 숨기기
        function hideIndicators() {
            $prevIndicator.removeClass('active');
            $nextIndicator.removeClass('active');
        }
        
        // 인디케이터 표시
        function showIndicator(type) {
            hideIndicators();
            if (type === 'prev') {
                $prevIndicator.addClass('active');
            } else if (type === 'next') {
                $nextIndicator.addClass('active');
            }
        }
        
        // 인디케이터 위치 업데이트 함수
        function updateIndicatorPosition() {
            const $flipbook = $('.flipbook');
            const flipbookOffset = $flipbook.offset();
            const flipbookWidth = $flipbook.outerWidth();
            const flipbookHeight = $flipbook.outerHeight();
            const flipbookTop = flipbookOffset.top;
            const flipbookLeft = flipbookOffset.left;
            
            // 왼쪽 인디케이터: flipbook 왼쪽 외부
            $prevIndicator.css({
                left: '5%',
                top: '50%',
                transform: 'translateY(-50%)'
            });
            
            // 오른쪽 인디케이터: flipbook 오른쪽 외부
            $nextIndicator.css({
                left: '90%',
                top: '50%',
                transform: 'translateY(-50%)'
            });
        }
        
        // 초기 위치 설정 및 리사이즈 시 업데이트
        setTimeout(updateIndicatorPosition, 100);
        $(window).on('resize', updateIndicatorPosition);
        
        // 마우스 이동 이벤트로 페이지 영역 감지 (좌우 절반)
        $flipbook.on('mousemove.cursor', function(e) {
            e.stopPropagation();
            const offset = $flipbook.offset();
            const x = e.pageX - offset.left;
            const width = $flipbook.width();
            
            // 현재 페이지 확인
            const currentPage = $flipbook.turn('page');
            const totalPages = $flipbook.turn('pages');
            
            // 페이지를 좌우로 나눔
            const halfWidth = width / 2;
            let detectedArea = null;
            
            // 왼쪽 절반 (이전 페이지)
            if (x < halfWidth && currentPage > 1) {
                detectedArea = 'left';
            }
            // 오른쪽 절반 (다음 페이지)
            else if (x >= halfWidth && currentPage < totalPages) {
                detectedArea = 'right';
            }
            
            // 인디케이터 표시/숨김 및 커서 변경
            if (detectedArea) {
                if (hoveredArea !== detectedArea) {
                    hoveredArea = detectedArea;
                    // 인디케이터 표시
                    if (detectedArea === 'left') {
                        showIndicator('prev');
                    } else if (detectedArea === 'right') {
                        showIndicator('next');
                    }
                    // 커서 변경 (이미지가 있으면 이미지 사용, 없으면 pointer)
                    let cursorValue = 'pointer';
                    
                    // 커서 이미지가 있고 로드되었으면 사용
                    if (detectedArea === 'left' && cursorImages.flipPrev) {
                        cursorValue = 'url("' + cursorImages.flipPrev + '"), pointer';
                    } else if (detectedArea === 'right' && cursorImages.flipNext) {
                        cursorValue = 'url("' + cursorImages.flipNext + '"), pointer';
                    }
                    
                    $flipbook.css('cursor', cursorValue);
                    $flipbook.find('*').css('cursor', cursorValue);
                    $('body').css('cursor', cursorValue);
                }
            } else {
                if (hoveredArea !== null) {
                    hoveredArea = null;
                    hideIndicators();
                    // 커서를 기본값으로 복원
                    $flipbook.css('cursor', 'default');
                    $flipbook.find('*').css('cursor', '');
                    $('body').css('cursor', 'default');
                }
            }
        });
        
        // 마우스가 flipbook 영역을 벗어날 때
        $flipbook.on('mouseleave.cursor', function() {
            hoveredArea = null;
            hideIndicators();
            // 커서를 기본값으로 복원
            $flipbook.css('cursor', 'default');
            $flipbook.find('*').css('cursor', '');
            $('body').css('cursor', 'default');
        });
        
        // 인디케이터 클릭 이벤트
        $prevIndicator.on('click', function(e) {
            e.stopPropagation();
            const currentPage = $flipbook.turn('page');
            if (currentPage > 1) {
                $flipbook.turn('disable', false);
                $flipbook.turn('previous');
                setTimeout(function() {
                    $flipbook.turn('disable', true);
                }, 100);
            }
            hideIndicators();
        });
        
        $nextIndicator.on('click', function(e) {
            e.stopPropagation();
            const currentPage = $flipbook.turn('page');
            const totalPages = $flipbook.turn('pages');
            if (currentPage < totalPages) {
                $flipbook.turn('disable', false);
                $flipbook.turn('next');
                setTimeout(function() {
                    $flipbook.turn('disable', true);
                }, 100);
            }
            hideIndicators();
        });
        
        // 페이지 영역 클릭 이벤트로 페이지 넘김 (좌우 절반)
        $flipbook.on('click.cursor', function(e) {
            if (hoveredArea) {
                const currentPage = $flipbook.turn('page');
                const totalPages = $flipbook.turn('pages');
                
                // turn.js 활성화
                $flipbook.turn('disable', false);
                
                // 페이지 넘김 방향 결정
                if (hoveredArea === 'left') {
                    // 이전 페이지
                    if (currentPage > 1) {
                        $flipbook.turn('previous');
                    }
                } else if (hoveredArea === 'right') {
                    // 다음 페이지
                    if (currentPage < totalPages) {
                        $flipbook.turn('next');
                    }
                }
                
                // 페이지 넘김 완료 후 다시 비활성화
                setTimeout(function() {
                    $flipbook.turn('disable', true);
                }, 100);
                
                // 인디케이터 숨기기
                hoveredArea = null;
                hideIndicators();
            }
        });
    }

    // 데이터 기반 페이지 렌더링 함수
    function renderPagesFromData() {
        const $flipbook = $('.flipbook');
        
        // 기존 콘텐츠 페이지 제거 (hard 페이지는 유지)
        $flipbook.find('.page-content').remove();
        
        // 첫 번째 hard 페이지(앞표지) 바로 다음에 콘텐츠 페이지 삽입
        const $firstHard = $flipbook.find('.hard').first();
        
        // 모든 페이지를 먼저 생성
        const pages = [];
        Object.values(pageData).forEach(function(data) {
            // 왼쪽 페이지 (텍스트 중심)
            const $leftPage = $('<div class="page-content" data-slug="' + data.slug + '"></div>');
            $leftPage.append(createLeftPageContent(data));
            
            // 오른쪽 페이지 (이미지 중심)
            const $rightPage = $('<div class="page-content" data-slug="' + data.slug + '"></div>');
            $rightPage.append(createRightPageContent(data));
            
            pages.push($leftPage, $rightPage);
        });
        
        // 모든 페이지를 첫 번째 하드 커버 바로 다음에 삽입
        if (pages.length > 0) {
            $firstHard.after(pages);
        }
        
        // 뒷표지 추가 (기존 뒷표지 제거 후 마지막에 추가)
        $flipbook.find('.hard').not($firstHard).remove();
        const $backCover = $('<div class="hard">Thank You <small>~ 아카이브 北</small></div>');
        $flipbook.append($backCover);
    }

    // 왼쪽 페이지 콘텐츠 생성
    function createLeftPageContent(data) {
        const $page = $('<div class="archive-page-left"></div>');
        
        // 큰 제목과 레터링
        const $titleSection = $('<div class="page-title-section"></div>');
        $titleSection.append(`<h1 class="page-main-title">${data.title}</h1>`);
        $titleSection.append(`<h2 class="page-title-kr">${data.titleKr}</h2>`);
        const $speakerIcon = $('<span class="speaker-icon" data-audio="' + data.audioUrl + '">🔊</span>');
        $titleSection.append(`<div class="page-subtitle">${data.subtitle} </div>`);
        $titleSection.find('.page-subtitle').append($speakerIcon);
        $titleSection.find('.page-subtitle').append(`<span class="page-code">${data.code}</span>`);
        $page.append($titleSection);
        
        // 본문 텍스트 (번호 박스를 텍스트와 함께 인라인으로 배치)
        const $contentSection = $('<div class="page-content-text"></div>');
        const $numberBox = $('<div class="page-number-box">' + data.number + '</div>');
        const $contentParagraph = $('<p></p>');
        $contentParagraph.append($numberBox);
        $contentParagraph.append(data.content);
        $contentSection.append($contentParagraph);
        $page.append($contentSection);
        
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
        
        // 참조 섹션 (이미지 캡션 자리에 배치)
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

    // speaker-icon 클릭 이벤트
    $(document).on('click', '.speaker-icon', function() {
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

