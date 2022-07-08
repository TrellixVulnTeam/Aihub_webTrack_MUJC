1. 자바스크립트 실행 환경에 따라, 전역 객체는 다릅니다. 브라우저의 경우 window, nodejs 환경의 경우 global로 각각 프로퍼티가 다른 객체입니다.

2. globalThis는 환경의 전역 변수를 가리킵니다. 따라서 window와 globalThis는 같은 객체를 가리킵니다.

3. document 객체는 createElement 함수로 DOM 노드를 생성할 수 있습니다.