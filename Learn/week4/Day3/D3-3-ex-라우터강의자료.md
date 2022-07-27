
<div class="sc-gsTEea gleZcK emd-markdown material-simple-view__note"><p class="sc-hKgJUU kTpEyo elicemd elicemd--theme-light" style="transition: opacity 300ms ease-in-out 0s; opacity: 1;"><h2 id="react-router-dom-라이브러리-v6">React-Router-Dom 라이브러리 v6</h2><hr><p>앞서 배운 <code>react-router</code> 라이브러리는 <strong>React의 싱글페이지 웹 앱(어플리케이션) 구현에 사용</strong>됩니다.<br>본래 v5, 즉 버전 5였는데, 2021년 말에 v6로 버전 업데이트가 이루어졌습니다.</p><p>버전 업데이트를 통해 달라진 점은 대표적으로 다음과 같습니다.</p><ol><li>Switch 대신 <code>Routes</code> 사용</li></ol><pre><code class="hljs">&lt;<span class="hljs-title class_">Routes</span>&gt;
 ~~~
&lt;/<span class="hljs-title class_">Routes</span>&gt;
</code></pre><br><ol start="2"><li>컴포넌트 샌드위치 구조, component props 대신 <code>element props</code> 사용</li></ol><pre><code class="hljs">&lt;<span class="hljs-title class_">Route</span> path=<span class="hljs-string">"/login"</span> element={<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">LoginForm</span> /&gt;</span></span>} /&gt;
</code></pre><br><ol start="3"><li>. useHistory 대신 <code>useNavigate</code> 사용</li></ol><pre><code class="hljs"><span class="hljs-keyword">const</span> navigate = <span class="hljs-title function_">useNavigate</span>();  
<span class="hljs-title function_">navigate</span>(<span class="hljs-string">"/login"</span>);  <span class="hljs-comment">// 로그인 페이지로 이동</span>
</code></pre><br><ol start="4"><li>Redirect 대신 <code>path="*"</code>사용</li></ol><pre><code class="hljs">&lt;<span class="hljs-title class_">Route</span> path=<span class="hljs-string">"*"</span> element={<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">NotFound</span> /&gt;</span></span>} /&gt;
</code></pre><br><p><span style="font-size:1.2rem;color:#5c4b66;display:inline-block;background-color:#f2e6f2;font-weight:700">(1) Routes, element 사용하기</span></p><p>본래 SPA(싱글페이지앱) 구현의 핵심은 Router 안에 Switch 안에 Route 였습니다.<br>이제는 <strong>Router 안에 Routes 안에 Route</strong>입니다.</p><p>또한 컴포넌트 샌드위치 구조, component props 대신 <strong>element props</strong>를 이용합니다.</p><h3 id="v5">v5</h3><pre><code class="hljs"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">BrowserRouter</span> <span class="hljs-keyword">as</span> <span class="hljs-title class_">Router</span>, <span class="hljs-title class_">Switch</span>, <span class="hljs-title class_">Route</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"react-router-dom"</span>;

<span class="hljs-keyword">function</span> <span class="hljs-title function_">App</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Router</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Switch</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Route</span> <span class="hljs-attr">exact</span> <span class="hljs-attr">path</span>=<span class="hljs-string">"/"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Portfolio</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Route</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Route</span> <span class="hljs-attr">path</span>=<span class="hljs-string">"/login"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">LoginForm</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Route</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Route</span> <span class="hljs-attr">path</span>=<span class="hljs-string">"/register"</span> <span class="hljs-attr">component</span>=<span class="hljs-string">{Register}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">Switch</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Router</span>&gt;</span></span>
  );
}
</code></pre><br><h3 id="v6">v6</h3><pre><code class="hljs"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">BrowserRouter</span> <span class="hljs-keyword">as</span> <span class="hljs-title class_">Router</span>, <span class="hljs-title class_">Routes</span>, <span class="hljs-title class_">Route</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"react-router-dom"</span>;

<span class="hljs-keyword">function</span> <span class="hljs-title function_">App</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Router</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Routes</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Route</span> <span class="hljs-attr">path</span>=<span class="hljs-string">"/"</span> <span class="hljs-attr">element</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">Portfolio</span> /&gt;</span>} /&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">Route</span> <span class="hljs-attr">path</span>=<span class="hljs-string">"/login"</span> <span class="hljs-attr">element</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">LoginForm</span> /&gt;</span>} /&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">Route</span> <span class="hljs-attr">path</span>=<span class="hljs-string">"/register"</span> <span class="hljs-attr">element</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">RegisterForm</span> /&gt;</span>} /&gt;
      <span class="hljs-tag">&lt;/<span class="hljs-name">Routes</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Router</span>&gt;</span></span>
  );
}
</code></pre><br><p>원래 SPA라우팅은 아래 2개중 1개 방법을 썼습니다.<br>(v5 예시는 설명 편의를 위해, 2개 동시에 사용했습니다)</p><ol><li>Route를 한 줄로 쓰고, component props 사용</li></ol><pre><code class="hljs">&lt;<span class="hljs-title class_">Route</span> path=<span class="hljs-string">"/login"</span> component={<span class="hljs-title class_">Login</span>} /&gt;
</code></pre><br><ol start="2"><li>Route 안에 컴포넌트를 넣어서, 샌드위치 구조 사용</li></ol><pre><code class="hljs">&lt;<span class="hljs-title class_">Route</span> path=<span class="hljs-string">"/login"</span>&gt;
  <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">LoginForm</span> /&gt;</span></span>
&lt;/<span class="hljs-title class_">Route</span>&gt;
</code></pre><br><p>이제는 <strong>아래와 같은 한 줄 구조로 통일</strong>입니다.</p><pre><code class="hljs">&lt;<span class="hljs-title class_">Route</span> path=<span class="hljs-string">"/login"</span> element={ <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">LoginForm</span> /&gt;</span></span> }
</code></pre><br><p><span style="font-size:1.2rem;color:#5c4b66;display:inline-block;background-color:#f2e6f2;font-weight:700">(2) useNavigate 사용하기</span></p><p>원래 로그인 페이지로 이동하려면 아래와 같이 useHistory 훅을 사용했습니다.</p><pre><code class="hljs"><span class="hljs-keyword">const</span> history = <span class="hljs-title function_">useHistory</span>()

history.<span class="hljs-title function_">push</span>(<span class="hljs-string">"/login"</span>)
history.<span class="hljs-title function_">replace</span>(<span class="hljs-string">"/login"</span>)
</code></pre><br><p>지금은 아래와 같이 <strong>useNavigate 훅을 사용</strong>합니다.</p><pre><code class="hljs"><span class="hljs-keyword">const</span> navigate = <span class="hljs-title function_">useNavigate</span>()

<span class="hljs-title function_">navigate</span>(<span class="hljs-string">"/login"</span>)
<span class="hljs-title function_">navigate</span>(<span class="hljs-string">"/login"</span>, {<span class="hljs-attr">replace</span>: <span class="hljs-literal">true</span>})
</code></pre><br><p><span style="font-size:1.2rem;color:#5c4b66;display:inline-block;background-color:#f2e6f2;font-weight:700">(3) path=”*” 사용하기</span></p><p>SPA라우팅에 걸러지지 않는 링크의 경우 원래 Redirect를 사용했습니다.</p><pre><code class="hljs">&lt;<span class="hljs-title class_">Router</span>&gt;
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Switch</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Route</span> <span class="hljs-attr">exact</span> <span class="hljs-attr">path</span>=<span class="hljs-string">"/"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Portfolio</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Route</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Route</span> <span class="hljs-attr">path</span>=<span class="hljs-string">"/login"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">LoginForm</span> /&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">Route</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Route</span> <span class="hljs-attr">path</span>=<span class="hljs-string">"/register"</span> <span class="hljs-attr">component</span>=<span class="hljs-string">{Register}</span> /&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Redirect</span> <span class="hljs-attr">to</span>=<span class="hljs-string">"/notfound"</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Switch</span>&gt;</span></span>
&lt;/<span class="hljs-title class_">Router</span>&gt;
</code></pre><br><p>위 예시는, 사용자가 접속한 링크(url)가 <strong>~/, ~/login, ~/register 중 하나가 아닐때 자동으로</strong> /notfound 페이지로 이동하도록 만듭니다.</p><p>이제는 아래와 같이 작성합니다.</p><pre><code class="hljs">&lt;<span class="hljs-title class_">Router</span>&gt;
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Routes</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Route</span> <span class="hljs-attr">path</span>=<span class="hljs-string">"/"</span> <span class="hljs-attr">element</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">Portfolio</span> /&gt;</span>} /&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">Route</span> <span class="hljs-attr">path</span>=<span class="hljs-string">"/login"</span> <span class="hljs-attr">element</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">LoginForm</span> /&gt;</span>} /&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">Route</span> <span class="hljs-attr">path</span>=<span class="hljs-string">"/register"</span> <span class="hljs-attr">element</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">RegisterForm</span> /&gt;</span>} /&gt;
        <span class="hljs-tag">&lt;<span class="hljs-name">Route</span> <span class="hljs-attr">path</span>=<span class="hljs-string">"*"</span> <span class="hljs-attr">element</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">NotFound</span> /&gt;</span>} /&gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">Routes</span>&gt;</span></span>
&lt;/<span class="hljs-title class_">Router</span>&gt;
</code></pre></p><div class="sc-dlfnuX bJgQKs" style="transition: opacity 300ms ease-in-out 0s; opacity: 0; width: 0px; height: 0px; overflow: hidden;"><div class="sc-bdfBQB DIWNs" role="alert" aria-busy="true" style="margin-bottom: 1rem; width: 10rem; height: 2.25rem; background-size: 100rem 2.25rem; animation-duration: 1.5s, 200ms;"></div><div class="sc-bdfBQB DIWNs" role="alert" aria-busy="true" style="margin-bottom: 0.75rem; width: 70%; height: 1rem; background-size: 700% 1rem; animation-duration: 1.5s, 200ms;"></div><div class="sc-bdfBQB DIWNs" role="alert" aria-busy="true" style="margin-bottom: 0.75rem; width: 60%; height: 1rem; background-size: 600% 1rem; animation-duration: 1.5s, 200ms;"></div><div class="sc-bdfBQB DIWNs" role="alert" aria-busy="true" style="margin-bottom: 0rem; width: 50%; height: 1rem; background-size: 500% 1rem; animation-duration: 1.5s, 200ms;"></div></div></div>