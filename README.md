# fe-course-study
[ 인프런 x 코드캠프] front-end course: React/ Next/ Firebase ...etc
---
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


**목차**

1. [기본 정보](#sec1)
2. [퍼블리싱 개발환경](#sec2)
3. [파일 디렉토리](#sec3)
4. [퍼블리싱 가이드](#sec4)
	1. [Style Guide](#sec4-1)
	2. [SCSS 구조](#sec4-2)
	3. [HTML 구조](#sec4-3)
	4. [이미지 경량화](#sec4-4)
	5. [이미지 스프라이트 자동화](#sec4-5)

- - -

## 1. 기본 정보 <a href="#sec1" id="sec1">#</a>

- 문서타입 : `HTML5`
- 기본언어 : `ko`
- 인코딩 : `UTF-8`
- 작업 범위 :
	- Mobile웹, Mobile앱 한국어
- 브라우저 지원범위
	- **Chrome, Firefox, Safari, Opera** : Last 10 versions
	- **iOS** : 12+
	- **Android** : 8+

## 2. 퍼블리싱 개발환경 <a href="#sec2" id="sec2">#</a>

프로젝트 소스 빌드를 위해 **[node.js](https://nodejs.org/)**와 **[gulp](https://gulpjs.com/)**를 사용합니다.  
퍼블리싱 개발환경을 실행하고 소스파일을 빌드해서 배포용 HTML, CSS를 생성하는 구조입니다.

프로젝트에서 사용되는 주요 모듈은 아래와 같습니다.

모듈명 | 설명
---- | ----
gulp | task 자동화 도구
browser-sync | 로컬 웹서버
gulp-sass | CSS 전처리기 SASS 사용
gulp-autoprefixer | CSS prefix 자동화
stylelint | CSS 컨벤션 검사 및 자동수정
gulp-pxtorem | px단위를 rem단위로 변경 (font-size 한정)
gulp-nunjucks-render | html 모듈화를 위한 템플릿 엔진
gulp-htmlhint | HTML 컨벤션 검사
gulp-babel | 브라우저 지원범위에 맞게 JS 컴파일 (common.js 한정)
gulp-imagemin | .jpg, .png 이미지파일 경량화
gulp.spritesmith-multi | 이미지 스프라이트 및 스프라이트 CSS 자동 생성

### 퍼블리싱 개발환경 설치

**node.js**  
[node.js 웹사이트(https://nodejs.org/)](https://nodejs.org/)에서 다운로드 후 설치  
(참고: 구축 시점에 사용된 node.js 버전은 v16.13.0 입니다.)

**Install**  
package.json이 있는 프로젝트 폴더에서 명령프롬프트를 열고 아래 명령을 실행하면 프로젝트에 필요한 모듈이 설치됩니다.
``` bash
npm install
```

### 퍼블리싱 개발환경 실행

기본으로 **default task**가 실행되면서 **watch** 상태가 되어 소스파일이 변경되면 자동으로 컴파일됩니다.  
그리고 dist폴더 기준으로 웹서버가 실행되어 http://localhost:8010/ 또는 네트워크에서 http://컴퓨터IP:8010/ 으로 접속 가능합니다.

##### (참고) npm start 실행 에러 발생 시 확인사항
- 프로젝트 폴더에서 `package-lock.json` 파일과 설치 후 생성된 `node_modules` 폴더를 삭제하고, 다시 `npm install` 후 실행
- 웹서버 포트 충돌 가능성 : 다른 터미널에서 이미 퍼블리싱 개발환경이 구동되고 있는 지 확인

#### NPM Scripts Task

프로젝트에 구성된 Task 정보는 아래와 같습니다.  
`npm run Task명`과 같이 실행할 수 있습니다. (start Task는 run 생략가능)

Task Name | 내용
---- | ----
start | 퍼블리싱 개발환경 실행 (build + watch + webserver)
build | 웹서버와 watch 기능없이 소스 빌드만 수행합니다.
watch | 웹서버와 watch 기능을 실행합니다.
validate | dist폴더의 HTML파일들에 대해 W3C 유효성 검사를 수행하고 터미널에 오류 내역을 출력합니다.

#### Gulp Task

NPM Task에 의해 실행되는 gulp task들에 대한 설명입니다.

Task Name | 내용
---- | ----
serve | **퍼블리싱 개발환경 웹서버 실행.**<br>dist폴더경로 기준으로 웹서버를 실행합니다.
html | **HTML 템플릿.**<br>src의 HTML에 대해 템플릿 및 include 기능을 적용하여 결과파일을 dist폴더에 생성합니다.
optimizeImage | **이미지 경량화.**<br> src의 이미지파일을 dist폴더에 압축된 이미지를 생성합니다.
sprite | **스프라이트이미지 생성.**<br> src의 이미지파일을 dist폴더에 폴더단위로 스프라이트 이미지를 생성합니다.
style | **SSAS 컴파일.**<br> src의 SCSS파일들을 dist폴더에 CSS파일로 컴파일합니다.
babelJs | **Javascript 컴파일.**
watchFiles | **파일 변경을 감지.**

- - -

## 3. 파일 디렉토리 <a href="#sec3" id="sec3">#</a>

본 프로젝트는 html, scss, image, js를 `src`에서 관리하고 `dist`로 생성되는 구조입니다.  
font, library 등의 리소스는 `dist`에서 관리합니다.

전체페이지 HTML 목록은 아래 파일에서 관리합니다.
- **dist/index.html**
