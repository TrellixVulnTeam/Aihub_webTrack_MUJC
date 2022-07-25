# React 구조

`public`<br>
ㄴ`index.html`<br>
`src`<br>
ㄴ`index.js`<br>
ㄴ`App.js`<br>
ㄴ`App.css`<br>
ㄴ``<br>
`package.json 등`

<br><br>


## JSX란
`JSX`는 함수 호출과 객체 생성을 위한 문법적 편의를 제공하는 Javascript의 확장<br>

특징
- HTML과 비슷하게 생겼으나 JS이고 HTML과는조금 다름
- `JSX`는 `Babel`에 의해서 Transcompile된다
- JSX를 Babel이 적절한 js파일로 컴파일시킴<br><br>

장단점
1. 편의성 향상
2. 협업 용이 / 생산성 향상
3. 문법 오류와 코드량 감소

<br><br>

## JSX의 특징과 HTML 차이점
1. HTML 태그 내에서 {JS}연산 가능하여, 편의성
2. class -> className 규칙
3. 스타일은 object로
    - 인라인 스타일 정의법 : `style={{ backgroundColor: 'blue'}}`
4. JSX는 대부분 `CamelCase` 표기법 사용
5. 닫는 태그 필수임
6. 컴포넌트 내의 최상단 element(태그:Node)는 반드시 하나만 존재
    - 적어도 `react.Fragment : <></>`라도 최상위에 사용
    - 해당 최상단 element 하위에 다른 요소들 넣어주는 것
    - 최상단 element는 반드시 `key` prop을 가져야 함

<br><br>


#### HTML 태그 내 JS연산
```JSX
const App = () => {
    const a = 3;
    const b = 6;
    
    return <div>{a} + {b} = {a+b}</div>
    // 중괄호 내에 JS코드를 작성하여 JS연산 가능
}
```

#### className 
```JSX
<div className="greeting" style={{ padding: 1, color: 'red'}}>
</div>
```

<br><br><br>

## 컴포넌트 : 중요
리액트에서 페이지를 구성하는 최소단위

1. Component의 이름은 대문자로 시작함
2. Class Component 와 Function Component 두가지 방식 존재
3. Controlled Component 와 Uncontrolled Component 존재

<br><br>

### Component란?
JSX를 모듈화(컴포넌트화)하여 APP.JS에서 import하여 컴포넌트들을 모아 rendering하는 블록단위의 코드. (함수/컴포넌트)

<br><br>

### Class Component vs Function Component
- 초기 리액트 대부분 클래스 컴포넌트
- v16부터 Function Component와 hooks 개념 추가됨
- 현재는 Functional이 주류


#### 클래스형 컴포넌트
```jsx
class Hello extends Component {
    render() {
        const {name} = this.props
        return <div>{name}님 안녕하세요</div>
    }
}
```
<br>

#### 함수형 컴포넌트
```jsx
const Hello = (props) => {
    const {name} = props
    return <div>{name}님 안녕하세요</div>
}
```

<br><br>

## props
리액트의계층적 컴포넌트 관계에서 (부모-자식), 부모 컴포넌트가 자식 컴포넌트에게 넘겨주는 값을 의미함. 
