# MongoDB
대표적인 NoSQL, Document DB<br>
대용량 데이터를 처리하기 좋게 만들어짐<br><br>

## RDB와 NoSQL
1. RDB - 관계형 데이터베이스
    - 자료들의 관계를 주요하게 다룸
    - SQL 질의어를 사용하기 위해 데이터를 구조화해야 함

2. NoSQL (Non SQL, Not Only SQL)
    - 구조화된 쿼리를 사용하지 않는 DB
    - 자료 간의 관계에 초점을 두지 않음
    - 데이터를 구조화하지 않고, 유연하게 저장

### NoSQL의 특장점
SQL 사용을 위해선 데이터 구조화(DDL)이 필수<br>
-> 스키마에 정의된 데이터가 아니면 저장할 수 없는 제약이 따름<br><br>

NoSQL을 사용하면 사전작업 없이 DB사용 가능<br>
-> DB작업에 크게 관여 않고, 프로젝트 빠른 진행 가능<br><br>

NoSQL은 다양한 종류가 있지만,
대표적으로 자료를 Document로 저장하는 Document DB가 일반적, 이외에도 키-값, 그래프, 라지 컬렉션 등의 NoSQL DB 존재<br><br>

## MongoDB 기본 개념
DB > Collection > Document <br><br>

1. Database : 하나 이상의 collection을 가질 수 있는 저장소, SQL에서의 DB와 유사

2. Collection : 하나 이상의 Document가 저장되는 공간, SQL의 table과 유사<br>

collection이 document구조를 정의하지는 않음

3. Document: MongoDB에 저장되는 자료, SQL에서 row와 유사하지만 구조제약 없이 유연하게 저장 가능, JSON과 유사한 BSON을 사용해 다양한 자료형을 지원<br>

    - objectID : 각 document의 유일한 키 값, SQL의 Primary key 개념, 하나씩 증가하는 값이 아닌 document를 생성할 때 관련 함수를 통해 자동 생성됨
<br><br>

### MongoDB 사용 방법
직접 설치 or Cloud 서비스<br>
직접 설치 시 원하는 만큼 데이터 사용 가능

### MongoDB Compass
DB, 컬렉션, 다큐먼트 등을 시각화하여 관리할 수 있게 도와주는 도구, MySQL 워크벤치와 유사

<br><br>

## Mongoose ODM
ODM : Object Data Modeling<br><br>

MongoDB의 Collection에 집중하여 관리하도록 도와주는 패키지<br>
colleciton을 모델화하여, 관련 기능들을 쉽게 사용할 수 있도록 도와줌<br><br>

기능
1. 연결 관리
    - MongoDB의 기본 node.js드라이버는 연결상태 관리 어려움
    - 몽구스 사용 시 간단하게 DB와의 연결상태 관리
2. 스키마 관리
    - 스키마 정의않고 데이터 사용하는 것이 NoSQL의 장점이지만, 데이터형식 미리 정의해야 코드작성과 프로젝트 관리에 유용
    - Mongoose는 Code-Level에서 스키마를 정의하고 관리할 수 있게 해줌

3. Populate
    - MongoDB는 기본적으로 join 제공 안함
    - join과 유사 기능 사용 위해 aggregate라는 복잡한 쿼리 작성해야 하나, 몽구스는 populate를 사용하여 간단 구현 가능

<br><br>

## Mongoose ODM 사용
1. 스키마 정의
   - 컬렉션에 저장될 다큐먼트의 스키마를 Code-Level에서 관리할 수 있도록 스키마 작성 가능
   - 다양한 형식 미리 지정, 생성/수정 작업 시 데이터 형식 체크 기능 제공
   - timestamps 옵션 사용 시 생성/수정 시간 자동 기록

2. 모델 만들기
    - 작성된 스키마를 mongoose에서 사용할 수 있는 모델로 만들어야 함
    - 모델의 이름을 지정하여 Populate등에서 해당 이름으로 모델 호출 가능

3. 데이터베이스 연결
    - connet함수를 이용해 간단하게 DB 연결 가능
    - 몽구스는 자동으로 연결관리 해주어, 직접 연결상태 체크하지 않아도, 모델 사용시 이를 확인핳여 사용이 가능할 때 작업을 실행함

4. 모델 사용<br>
   
   작성된 모델을 이용해 CRUD 수행 가능
   - CREATE : create
        - 단일 obj 인자 전달 : 단일 Document 생성
        - 배열 objs 인자 전달 : 복수 Documents 생
   - READ : find, findById, findOne
        - find관련 함수 : Document 검색, query 혹은 findById로 검색

   - UPDATE: updateOne, updateMany, findByIdAndUpdate, findOneAndUpdate
        - Document를 수정

   - DELETE : deleteOne, deleteMany, findByIdAndDelete, findOneAndDelete
        - Document 삭제
<br><br>

#### Query

MongoDB에도 SQL의 where와 유사한 조건절 사용 가능<br>

MongoDB의 query는 BSON 형식으로, 기본 문법 그대로 몽구스에서도 사용 가능<br><br>

**자주 사용되는 쿼리**

1. $lt, $lte,$gt,$gte: range query 사용
2. $in : 다중 값 검색
3. $or : 다중 조건 검색
4. {key:value} : exact match
- 기타 :  https://docs.mongodb.com/manual/reference/operator/query/

#### populate 

Document안에 Document를 담지 않고, obj ID를 가지고 참조하여 사용할 수 있는 방법 제공<br>

Document에는 reference되는 objId를 담고, 사용할 때 populate하여, 하위 Document처럼 사용할 수 있게 해줌

