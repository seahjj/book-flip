# Simple 3D Flip Book Library

웹사이트 [sogithehuman.neocities.org](https://sogithehuman.neocities.org/)의 전환 방식을 적용한 간단한 3D 플립북 라이브러리입니다.

## 특징

- **CSS 3D Transform 기반**: 복잡한 JavaScript 대신 CSS 3D transform을 사용하여 부드러운 전환 효과
- **간단한 API**: turn.js와 유사하지만 더 간단한 인터페이스
- **2초 전환 애니메이션**: 웹사이트와 동일한 2초 ease-out 전환
- **반응형 디자인**: 다양한 화면 크기에 대응
- **jQuery 기반**: jQuery를 사용하여 쉽게 통합 가능

## 설치

1. `turn-simple.js`와 `turn-simple.css` 파일을 프로젝트에 추가
2. jQuery가 필요합니다 (3.x 이상 권장)

```html
<link rel="stylesheet" href="turn-simple.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="turn-simple.js"></script>
```

## 기본 사용법

### HTML 구조

```html
<div class="flipbook" id="myFlipbook">
    <div class="page">
        <div class="page-content">
            <!-- 페이지 1 내용 -->
        </div>
    </div>
    <div class="page">
        <div class="page-content">
            <!-- 페이지 2 내용 -->
        </div>
    </div>
    <!-- 더 많은 페이지... -->
</div>
```

### JavaScript 초기화

```javascript
$(document).ready(function() {
    $('#myFlipbook').flipbook({
        width: 600,
        height: 600,
        duration: 2000,      // 전환 시간 (밀리초)
        easing: 'ease-out', // 전환 이징
        perspective: 3000,   // 3D 원근감
        autoCenter: true,   // 자동 중앙 정렬
        when: {
            ready: function() {
                console.log('플립북 준비 완료');
            },
            turning: function(event, page) {
                console.log('페이지 넘기는 중:', page);
            },
            turned: function(event, page) {
                console.log('페이지 넘김 완료:', page);
            }
        }
    });
});
```

## API

### 초기화 옵션

| 옵션 | 타입 | 기본값 | 설명 |
|------|------|-------|------|
| `width` | Number | 800 | 플립북 너비 (px) |
| `height` | Number | 600 | 플립북 높이 (px) |
| `duration` | Number | 2000 | 전환 애니메이션 시간 (ms) |
| `easing` | String | 'ease-out' | CSS transition easing |
| `perspective` | Number | 3000 | 3D 원근감 값 |
| `autoCenter` | Boolean | true | 자동 중앙 정렬 |
| `when` | Object | null | 이벤트 핸들러 객체 |

### 메서드

#### `flipbook('page', pageNumber)`
특정 페이지로 이동

```javascript
$('#myFlipbook').flipbook('page', 3); // 3페이지로 이동
```

#### `flipbook('page')`
현재 페이지 번호 반환

```javascript
var currentPage = $('#myFlipbook').flipbook('page');
```

#### `flipbook('next')`
다음 페이지로 이동

```javascript
$('#myFlipbook').flipbook('next');
```

#### `flipbook('previous')`
이전 페이지로 이동

```javascript
$('#myFlipbook').flipbook('previous');
```

#### `flipbook('pages')`
전체 페이지 수 반환

```javascript
var totalPages = $('#myFlipbook').flipbook('pages');
```

#### `flipbook('size', width, height)`
플립북 크기 변경

```javascript
$('#myFlipbook').flipbook('size', 800, 600);
```

### 이벤트

플립북은 다음 이벤트를 발생시킵니다:

- `ready`: 플립북 초기화 완료
- `turning`: 페이지 넘기는 중 (event, pageNumber)
- `turned`: 페이지 넘김 완료 (event, pageNumber)

```javascript
$('#myFlipbook').on('turned', function(event, page) {
    console.log('현재 페이지:', page);
});
```

## 웹사이트 전환 방식과의 차이점

### 웹사이트 방식
- 각 `.leaf` 요소를 클릭하면 `flipped` 클래스가 토글됨
- z-index가 1초 후 변경됨
- 단순한 클릭 기반 전환

### 이 라이브러리
- turn.js와 유사한 API 제공
- 프로그래밍 방식으로 페이지 제어 가능
- 이벤트 시스템 포함
- 자동 z-index 관리

## 기존 turn.js에서 마이그레이션

기존 turn.js 코드:

```javascript
$('#flipbook').turn({
    width: 800,
    height: 600,
    autoCenter: true
});
```

새 라이브러리로 변경:

```javascript
$('#flipbook').flipbook({
    width: 800,
    height: 600,
    autoCenter: true
});
```

대부분의 API가 호환되지만, 일부 고급 기능은 제한될 수 있습니다.

## 예제

`example-simple.html` 파일을 참고하세요.

## 브라우저 지원

- Chrome/Edge (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- 모바일 브라우저 (iOS Safari, Chrome Mobile)

CSS 3D Transform을 지원하는 모든 브라우저에서 작동합니다.

## 라이선스

이 라이브러리는 웹사이트 [sogithehuman.neocities.org](https://sogithehuman.neocities.org/)의 전환 방식을 참고하여 제작되었습니다.
