# Hooks

컴포넌트에서 데이터(state)를 관리하고<br>
데이터가 변경될 때 상호작용(Effect)하기 위해 사용

<br>

## 등장배경
기존에는 컴포넌트 내에서 State와 생명주기를 관리하기 위해, 반드시 클래스형 컴포넌트를 사용했음.
<br>
다소 가독성이 떨어지고 복잡한 클래스 컴포넌트를 보완한 `함수형 컴포넌트`가 도입되고, 함수 컴포넌트에서 위의 기능들을 구현하기 위해 리액트에 추가된 기능이 Hook
<br>

## 유의사항
1. Hook은 React함수(컴포넌트,Hook)내에서만 사용 가능

2. Hook의 이름은 반드시 `use`로 시작

3. 컴포넌트의 최상위 Level에서만 Hook을 호출
    - if문,for문 안쪽 또는 콜백함수 내에서 호출하지 말 것.


### 1. useState (State hook)

### 2. useEffect
   
### 3. useRef

### 4. useMemo 

### 5. useCallback