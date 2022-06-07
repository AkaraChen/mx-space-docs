import{m as s,o as a,c as e,t as l,b as n,p,a as c,d as i}from"./app.2bc15fd8.js";const o={class:"badge"},t=s({__name:"badge",props:{text:{type:String,required:!0}},setup:s=>(n,p)=>(a(),e("span",o,l(s.text),1))}),r=c('<h1 id="文本宏替换" tabindex="-1">文本宏替换 <a class="header-anchor" href="#文本宏替换" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这是一个实验性特征，可能会造成系统的不稳定。</p><p>经过测试，使用大量文本宏会造成请求文章的接口变慢。</p></div><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>使用使功能需要先在后台中开启，设置 - 系统 - 文本设定 - 文本宏替换</p></div>',4),d=i("Required: "),g=c('<p>Environment: Server/NodeJS</p><p>文本宏是一个以 <code>[[ ]]</code> 包裹的语法，例如 <code>[[ $created ]]</code> 是一个合法的语法。在文章中可以插入文本宏，和 Markdown 一样，但是这个语法不是用 Markdown 解析和渲染，而是直接会在服务端进行替换。因此可以通过这个特征在文章中插入一些来自服务端的数据，也可以执行一些函数。</p><p>例如说一篇文章的标题为「实例标题」，他的正文内容为：</p><div class="language-"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#dbd7ca;">一个句子。[[ $title ]]</span></span>\n<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393a34;">一个句子。[[ $title ]]</span></span>\n<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>将会输出。</p><div class="language-md"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#DBD7CA;">一个句子。实例标题</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393A34;">一个句子。实例标题</span></span>\n<span class="line"></span></code></pre></div><p>又比如说：</p><div class="language-md"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#DBD7CA;">&lt;p align=&quot;right&quot;&gt;更新于 [[ #dayjs($modified).format(&#39;YY-MM&#39;) ]]&lt;/p&gt;</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393A34;">&lt;p align=&quot;right&quot;&gt;更新于 [[ #dayjs($modified).format(&#39;YY-MM&#39;) ]]&lt;/p&gt;</span></span>\n<span class="line"></span></code></pre></div><p>将会输出。</p><div class="language-md"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#DBD7CA;">&lt;p align=&quot;right&quot;&gt;更新于 22-04&lt;/p&gt;</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393A34;">&lt;p align=&quot;right&quot;&gt;更新于 22-04&lt;/p&gt;</span></span>\n<span class="line"></span></code></pre></div><p>这是一个动态的数据，<code>dayjs</code> 函数由服务端提供。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>所有的函数方法均在服务端执行，请注意内存的泄露造成系统的不稳定。</p></div><h2 id="语法格式" tabindex="-1">语法格式 <a class="header-anchor" href="#语法格式" aria-hidden="true">#</a></h2><p>以 <code>[[ </code> 开头，<code> ]]</code> 结尾，注意一个空格是必须的。</p><h3 id="访问变量" tabindex="-1">访问变量 <a class="header-anchor" href="#访问变量" aria-hidden="true">#</a></h3><p>访问变量使用 <code>$</code> 前缀。</p><p>目前可以访问的变量有：当前记录的所有字段（数据库记录值）。</p><p><code>title</code> <code>created</code> <code>slug</code> <code>nid</code> <code>_id</code> ..</p><p>如：</p><div class="language-"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#dbd7ca;">[[ $created ]]</span></span>\n<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393a34;">[[ $created ]]</span></span>\n<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h3 id="使用函数" tabindex="-1">使用函数 <a class="header-anchor" href="#使用函数" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>使用函数可能会造成系统不稳定。</p><p>函数的执行和 Serverless 的执行保持一致。</p></div><p>执行函数使用 <code>#</code> 前缀。</p><p>你可以使用任意 JS 代码去执行一个函数，也可以是一个 JS 语句。</p><p>如：</p><div class="language-"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#dbd7ca;">[[ #$title.slice(0, 5) ]]</span></span>\n<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393a34;">[[ #$title.slice(0, 5) ]]</span></span>\n<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>使用内置方法。</p><p>如：</p><div class="language-"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#dbd7ca;">[[ #dayjs($created).format(&#39;YYYY&#39;) ]]</span></span>\n<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393a34;">[[ #dayjs($created).format(&#39;YYYY&#39;) ]]</span></span>\n<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><p>内置方法目前有：</p><ul><li><p><a href="https://day.js.org/zh-CN/" target="_blank" rel="noopener noreferrer">dayjs</a></p></li><li><p>formatNow(time: Date | string): string, 相对时间</p></li><li><p>center(text: string): string, 居中</p></li><li><p>right(text: string): string, 居右</p></li><li><p>opacity(text: string, opacity: number): string, 透明文本</p></li><li><p>blur(text: string, blur: number): string, 高斯模糊化文字</p></li><li><p>color(text: string, color: string): string, 给文字上色</p></li><li><p>size(text: string): string, 给文字上色</p></li></ul>',31),h='{"title":"文本宏替换","description":"","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介"},{"level":2,"title":"语法格式","slug":"语法格式"},{"level":3,"title":"访问变量","slug":"访问变量"},{"level":3,"title":"使用函数","slug":"使用函数"}],"relativePath":"feature/text-macors.md"}',f=Object.assign({},{__name:"text-macors",setup:s=>(s,l)=>(a(),e("div",null,[r,n("p",null,[d,p(t,{text:"mx-server >=3.26.0"})]),g]))});export{h as __pageData,f as default};
