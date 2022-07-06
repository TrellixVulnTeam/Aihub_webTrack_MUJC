# REST OPERATOR
rest operator는 ...var 형식으로 복수의 인자를 배열 형태로 매개변수로 넘겨주며, 각각에 대해서 실행하여 결과를 배열값으로 반환함.


- 함수의 인자 , 배열 , 객체 중 나머지 값을 묶어 사용하도록 한다

- 함수의 인자 중 나머지를 가리킨다

- 배열의 나머지 인자를 가리킨다

- 객체의 나머지 필드를 가리킨다

<br><br>
```js
a1(1,2,3,4,5);

function a1(...rest) {
    console.log(rest);
}

---
a1 실행 시 rest는
0: 1
1: 2
2: 3
3: 4
4: 5

를 가지고 출력함을 볼 수 있음.
```

<br><br>

```js
function sumArray(sum,arr){
    if (arr.length === 0) return sum;
    const [heawd, ...tail] = arr;
    return sumArray(sum + head, tail);
}

sumArray(0, [1,2,3,4,5] ); 
//결과값 = 15
```

배열의 rest operator는 나머지 인자를 다시
배열로 묶는다.
- sumArray의 tail 변수는, 첫 번째 원소
head를 제외한 나머지 값들을 다시 배열로
묶는다.
- tail은 하나씩 줄어들게 되며, 길이가 0이
되면 합을 반환한다.

<br><br>

---

<br><br>

# Spread Operator
객체의 properties를 펼치는 것.

- 묶인 배열 혹은 객체를 각각의 필드로 변환한다
- 객체는 또 다른 객체로의 spread 를 지원한다
- 배열은 또 다른 배열의 인자 , 함수의 인자로의 spread 를 지원한다

```js
let o = {
    name: "Daniel",
    age: 23,
    address: "Street",
    job: "Software Engineer",
}

let o2 = { ...o, name: "Tom", age: 24 } // spreawd operator가 앞에 등장했으므로, 뒤에 등장한 property 인자들이 o와 중복해 등장한 properties를 덮어썼음.

let o3 = { name: "Tom", age: 24, ...o } // spread operator가 뒤에 등장했으므로, spread operator로 등장한 o의 값들이 앞의 인자 속성들을 덮어썼음

o2.job // 결과값= Software Engineer
o3.name // 결과값= Daniel
```

<br><br>

### Q5. Spread Operator 관련 추가설명

1. 배열은 iterable 성질을 가진 객체이므로, 객체에 spread operator로 합쳐도 에러가 발생하지 않습니다. 배열의 각 index에 있는 값들이 ‘0’: 1, ‘1’: 2 처럼 객체에 합쳐집니다.

2. 일반 객체는 iterable 성질이 없으므로, 배열 같은 iterable 객체에 합치려 하면 에러가 발생합니다. 단, iterable을 지원하는 객체는 spread operator로 합칠 수 있습니다.

3. 객체나 배열 필드는 단순히 reference만 복사됩니다. 따라서, deep copy를 위한 별도의 작업을 해주어야 합니다.