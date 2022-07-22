//document.ready(콜백) 형태는
// CSR방식으로 일단 클라이언트가 브라우저에 html폼을 보내주고 준비됐을 시,
// 그에 맞는 데이터를 서버로 요청해 (서버는 다시 DB로부터 받아와) 적절한 데이터를 응답받아 뿌려주고자 할때 사용

$(document).ready(() => {
  let header = `<header>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">투두성우</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/view/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/view/todos/todoList.html">Todo</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</header>`;

  // document의 container 클래스태그 내에 삽입해줌

  $(".container").prepend(header);
});
