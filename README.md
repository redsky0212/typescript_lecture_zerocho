# 제로초 TypeScript 유료강좌 실시간.
## 강좌 1일차
* 링크
  - [TypeScript 공식문서](https://www.typescriptlang.org/)
  - [zerocho github ts-lecture](https://github.com/ZeroCho/ts-lecture)

* IDE 선택
  - jet brains의 [webstorm](https://www.jetbrains.com/ko-kr/webstorm/)
  - [Visual Studio Code](https://code.visualstudio.com/)
* NodeJs 설치 (https://nodejs.org/en/)
* 소스코드 github (https://github.com/zerocho/ts-lecture)
* 명령프롬프트 사용법 설명
* TypeScript설치 (npm i typescript)
  - npm i -g typescript 이렇게 글로벌로 설치하면 typescript명령어를 사용할 수 있다. ex) tsc
  - ts파일을 만들어 typescript코딩을 한다음 tsc명령어로 js파일을 생성한 다음 html파일에는 컴파일된 js파일을 로드한다.
  - tsc lecture.ts -w 로 실행하면 코드 수정하면 바로 컴파일 해준다. (-w)는 watch라는 뜻.
  - 에러발생시 TS222 와 같이 에러코드를 복사해서 검색하면 해당 에러에 대한 내용을 찾을 수 있다.
* 1강코드 gugudan_r.ts파일 코딩한다.
  - 우선 type을 코딩하지말고 거의 js코딩식으로 코딩해서 tsc 컴파일해서 생성된 js파일을 로드해도 잘 됨.
  - 미리 typescript가 만들어둔 type으로 이동해서 보는법은 해당 변수에서 오른쪽클릭하면 Go to type definition 메뉴 클릭으로 볼 수 있다.
  - 뭐뭐.d.ts파일로 type을 모아두는 파일을 만들어 나중에 ts.config.js파일에서 로드해서 사용할 수 있게끔 할 수 있다.
* npx tsc 파일명.ts 로 하면 내가 설치한 typescript로 실행해준다.
* 질문타임
  - package.json 에서 버전에 '^' 가 범위를 뜻하는 것(애매함)이므로 package-lock.json은 정확히 버전을 정해준 파일이다.
* 변수에 type을 정해준다.
  - 해당 변수에 마우스를 올리면 type이 뭔지 IDE에서 보여주므로 바로 알 수 있다.

## 강좌 2일차
* tsconfig.json 관련 강의
  - ts, js 파일 동시에 띄우면 코드상에 에러가 생기는데 그건 tsconfig.json파일에 설정이 없어서 그러는거임.
  - [컴파일옵션 관련 문서](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
  - tsconfig에 넣을 수 있는 옵션을 위에 사이트에서 보면서 작성하면 된다.
  - .ts, d.ts 파일의 차이점... d.ts파일은 type만 다 적어둔 파일. d.ts파일로 분리해서 config에서 declaration 을 true. types옵션을 적용한다. -- 좀 더 체크 필요.
  - 외워지지 않으므로 나중에 에러나면 찾아보고 익히는게 좋음.
* 변수에 type지정하기 설명.
  - type에는 대문자 타입을 넣으면 안됨. 전혀 다른 타입이 됨.
  - 배열과 객체
    - 배열값을 아예 상수처럼 쓰고싶으면 let arr = [true, 2, '3'] as const; 와 같이 const를 붙이면 된다.
  - enum 타입관련 설명.
    - 잘 안쓰게 됨.
    - 속성이름에 index를 붙여줌.
  - ?.연산자 관련 설명 (ts연산자임)
  - 타입 강제로 바꾸기   hello as unknown as string  ---> 꼼수 (변환하는 타입이 상속관계에 있다면 unknown안넣어도 됨)
* 숫자야구 코딩.
  - 보통은 남이만든 타입은 타입을 안붙이고 내가 만든 type은 붙인다. 남이만든 type은 변경될 수도 있으므로.

## 강좌 3일차
* interface 관련 강의
  - 처음 코딩시 최대한 js코딩으로 하고 나중에 ts type을 적용한다.
  - dom 상의 textContent를 가져올 때. 이벤트 시 event.target.textContent할 수도 있고 this.textContent 할 수 있다.
  - Object.keys(객체) 하면 key로 이루어진 배열이 된다.
  - interface에 readonly 적용하면 값을 재바인딩 할 수 없다.
  - 같은 이름의 interface가 두개 이상 있으면 그것들은 모두 합쳐져서 적용된다. - 남이 만들어놓은 interface를 수정해서 사용하고자 할때 유용함.
  - type으로 선언해서 사용하는 경우도 있다. (같은 이름의 type이 여러개 있으면 그것들은 합쳐지지 않는다.)
  - type은 interface보다 좀 더 넓은 개념이다. type Hello = string | number; 이렇게 객체 외에도 다른 것들도 type에서는 적용할 수 있다.
  - RSP[keyof RSP] 키들을 가져올때 keyof를 사용.
  - indexable type정하기 [a:string] : 타입. 이런식으로 interface에 적용하면 어떤 key값도 적용할 수 있다는 뜻.
  - ! 느낌표 관련 설명 : 값이 무조건 있을거라고 표시한것. 값이 안들어갈수도 있어서 애러날 확률이 있다.
* error났을때 상황대처가 중요.
  - 일단 npm i 되었는지를 먼저 생각해보기
  - 에러난 곳에 type설정이 범위에 맞게 잘 셋팅 되었는지.
  - 그래도 모르면 구글링 해보기.

## 강좌 4일차
* class
  - null과 undefined를 구분하려면 tsconfig에서 strictNullChecks를 true 해준다.
    - strictNullChecks 이게 어떤 역할을 하는지 알아봐야함.
  - class 속성데이터는 기본 private로 하고 점차 필요에 따라 protected, public으로 넓혀가는게 좋음.
  - ?. 연산자 관련 공부필요. (https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#optional-chaining)
  ```
  let x = foo?.bar.baz();
  ```
  ```
  let x = (foo === null || foo === undefined) ?
    undefined :
    foo.bar.baz();
  ```
  - 위는 같은 코드임.
  - 아래와 같이 연결해서 체크를 할 수도 있다.
  ```
  // Before
  if (foo && foo.bar && foo.bar.baz) {
      // ...
  }

  // After-ish
  if (foo?.bar?.baz) {
      // ...
  }
  ```

## 강좌 5일차
* 제너릭
  - 어떤 함수에 같은 타입의 인자를 여러개 넘기는 형식의 함수를 만들고 싶을때 사용하면 좋음.
  - 제너릭 타입에 제한을 두는것 extends keyof 관련 파악필요.

## 강좌 6일차
* module
  - 남이 만든 lib를 다운 받을때 유형 5가지
    1. 자체적으로 typescript를 제공해주는 라이브러리.
    2. @types/파일명 과 같이 type을 제공해주는 라이브러리.
    3. type을 제공하지 않아 내가 만들어서 사용하는 경우. 파일명.d.ts 파일을 만들어서 적용.
    4. type을 제공하나 타입핑이 잘못된 경우는 .d.ts파일을 지우고 내가 다시 만든다.(최악의 경우)

  - .d.ts파일을 남이 만든것을 확장할때 쓰는거고 내가 만든 타입은 그냥 interface로 만들어서 쓰면 된다.
  - window같은거는 global로 만들어서 확장한다. 

  - tsconfig.json에 "declaration" : true 를 하면 ts파일을 d.ts파일로 자동 생성해준다.

### SideBar.vue
* 메뉴 데이터에서 가져와 보여주기.
  - [X] 데이터는 store에 만들어서 가져오기.
  - [X] store개발방법 정리.
* 메뉴 클릭시 화면전환 라우터 작업하기.
  - [X] 메뉴클릭시 화면전환
  - [ ] 화면이동 후 메뉴선택 모양 UI 유지