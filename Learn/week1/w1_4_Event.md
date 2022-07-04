# 이벤트

## 이벤트

## 이벤트 핸들러

## 이벤트 타입
발생한 이벤트의 종류 ( 폼,키보드,마우스,HTML DOM,Window 객체 등)
```
+ 윈도우 객체란? 

ex)
window.onload
```
```js
// 마우스 클릭 이벤트 예시
<p onclick="changeText(this)">여길 클릭하세요!</p>
    // this에 대한 이해 필요: 
<script>
function changeText(element) {
    element.innerHTML = "내용이 바뀌었습니다!";
}
</script>

```
## 