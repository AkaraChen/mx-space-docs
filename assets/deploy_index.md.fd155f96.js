import{_ as s,o as a,c as n,a as p}from"./app.3d02ad1f.js";const l=JSON.parse('{"title":"部署 Mix Space","description":"","frontmatter":{"title":"部署 Mix Space"},"headers":[{"level":2,"title":"示例和准备","slug":"示例和准备","link":"#示例和准备","children":[]},{"level":2,"title":"安装软件包","slug":"安装软件包","link":"#安装软件包","children":[]},{"level":2,"title":"安装 Docker","slug":"安装-docker","link":"#安装-docker","children":[]},{"level":2,"title":"安装 nvm","slug":"安装-nvm","link":"#安装-nvm","children":[]},{"level":2,"title":"使用预设脚本部署","slug":"使用预设脚本部署","link":"#使用预设脚本部署","children":[{"level":3,"title":"整个环境","slug":"整个环境","link":"#整个环境","children":[]},{"level":3,"title":"仅部署服务和主站前端","slug":"仅部署服务和主站前端","link":"#仅部署服务和主站前端","children":[]}]},{"level":2,"title":"手动部署","slug":"手动部署","link":"#手动部署","children":[{"level":3,"title":"视频","slug":"视频","link":"#视频","children":[]},{"level":3,"title":"部署 Core","slug":"部署-core","link":"#部署-core","children":[]},{"level":3,"title":"部署 Kami","slug":"部署-kami","link":"#部署-kami","children":[]}]},{"level":2,"title":"下一步","slug":"下一步","link":"#下一步","children":[]}],"relativePath":"deploy/index.md"}'),e={name:"deploy/index.md"},o=[p('<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在看完介绍后你一定很想尝试部署 Mix Space ! 那本节内容带你完成部署，请有耐心的一点点看完</p></div><h2 id="示例和准备" tabindex="-1">示例和准备 <a class="header-anchor" href="#示例和准备" aria-hidden="true">#</a></h2><p>国内服务器部署请完成备案后再进行</p><p>后端示例域名：<a href="http://server.test.cn" target="_blank" rel="noreferrer">server.test.cn</a></p><p>前端示例域名：<a href="http://www.test.cn" target="_blank" rel="noreferrer">www.test.cn</a></p><p>操作系统：建议 Ubuntu 20.04 / Debian 11 及以上版本，或其他 Linux 发行版本</p><p>如果你想在 Windows 部署，请看这里 <a href="/deploy/windows.html">Windows 安装 Mix Space</a></p><p>Linux 内核版本：大于 4.18 ，建议 5.x</p><p>构建需要的内存：大于 1 GiB</p><p>运行需要的内存：不小于 768 MiB</p><p>内存建议：大于 1 GiB</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>使用小于 4.18 版本的 Linux 内核将无法正常部署 Mix Space</p></div><hr><br><h1 id="环境安装" tabindex="-1">环境安装 <a class="header-anchor" href="#环境安装" aria-hidden="true">#</a></h1><h2 id="安装软件包" tabindex="-1">安装软件包 <a class="header-anchor" href="#安装软件包" aria-hidden="true">#</a></h2><p>Debian / Ubuntu</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ apt update </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> apt install git curl vim wget git-lfs -y</span></span>\n<span class="line"></span></code></pre></div><p>CentOS</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ yum check-update </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> yum install git curl vim wget git-lfs -y</span></span>\n<span class="line"></span></code></pre></div><h2 id="安装-docker" tabindex="-1">安装 Docker <a class="header-anchor" href="#安装-docker" aria-hidden="true">#</a></h2><p>SSH 连接到服务器，使用一键脚本，可以便捷地安装 Docker 和 Docker Compose</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ curl -fsSL https://get.docker.com </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> bash -s docker --mirror Aliyun</span></span>\n<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>该过程可能比较慢（受限于你的服务器配置和网络），请不要断开 SSH 连接；该脚本仅支持 Debian，Ubuntu，CentOS，其他系统请自行安装</p></div><h2 id="安装-nvm" tabindex="-1">安装 nvm <a class="header-anchor" href="#安装-nvm" aria-hidden="true">#</a></h2><p>nvm 用于管理 Node.js</p><p>打开终端，使用一键脚本，可以便捷地安装 nvm</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ bash -c </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">curl -fsSL https://gitee.com/RubyKids/nvm-cn/raw/master/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>\n<span class="line"></span></code></pre></div><p>重启终端即可生效</p><p>安装 Node.js 最新的 LTS 版本</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ nvm install --lts</span></span>\n<span class="line"></span></code></pre></div><p>安装需要的模块</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm i -g pnpm pm2</span></span>\n<span class="line"></span></code></pre></div><hr><h1 id="部署系统" tabindex="-1">部署系统 <a class="header-anchor" href="#部署系统" aria-hidden="true">#</a></h1><p>Mix Space 目前支持以下安装方法</p><p><a href="#%E4%BD%BF%E7%94%A8%E9%A2%84%E8%AE%BE%E8%84%9A%E6%9C%AC%E9%83%A8%E7%BD%B2"><strong>使用预设脚本部署</strong></a> ： 安装方便，但是前端可以修改的地方非常有限</p><p><a href="#%E6%89%8B%E5%8A%A8%E9%83%A8%E7%BD%B2"><strong>手动部署</strong></a> ： 安装略微麻烦，前端可以修改任意地方更细分，更新频率最快</p><h2 id="使用预设脚本部署" tabindex="-1">使用预设脚本部署 <a class="header-anchor" href="#使用预设脚本部署" aria-hidden="true">#</a></h2><p>克隆仓库</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> mkdir mx-space </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> mx-space</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ git clone https://github.com/mx-space/docker --depth=1</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">如果克隆缓慢，可以使用以下镜像地址</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ git clone https://github.1qi777.com/mx-space/docker.git --depth 1</span></span>\n<span class="line"></span></code></pre></div><h3 id="整个环境" tabindex="-1">整个环境 <a class="header-anchor" href="#整个环境" aria-hidden="true">#</a></h3><p>所部署的环境：Kami + Core + Caddy2</p><p>在此之前，你需要将域名解析完毕</p><p>使用一键脚本</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> docker</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ bash install.sh</span></span>\n<span class="line"></span></code></pre></div><p>实例输入：</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">你的域名为：（需要提前绑定）: innei.ren</span></span>\n<span class="line"><span style="color:#A6ACCD;">你的邮箱为: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">若该步留空，则不部署 Caddy 服务</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">: tukon@gmail.com</span></span>\n<span class="line"><span style="color:#A6ACCD;">是否部署 Caddy 2.0？ </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">y/n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">: y</span></span>\n<span class="line"></span></code></pre></div><p>待流程执行完毕，进入 <code>https://server.test.cn/proxy/qaqdmin</code> ，进行初始化</p><h3 id="仅部署服务和主站前端" tabindex="-1">仅部署服务和主站前端 <a class="header-anchor" href="#仅部署服务和主站前端" aria-hidden="true">#</a></h3><p>所部署的环境：Kami + Core</p><p>你不需要 IP 指向。但是需要手动处理服务器反代</p><p>使用一键脚本</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> docker</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ bash ./build.sh</span></span>\n<span class="line"></span></code></pre></div><p>实例输入：</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">你的域名为：（需要提前绑定）: innei.ren</span></span>\n<span class="line"><span style="color:#A6ACCD;">你的邮箱为: </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">此步留空，则不部署 Caddy 服务</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">:</span></span>\n<span class="line"></span></code></pre></div><p>待流程执行完毕，进入 <code>http://127.0.0.1:2333/proxy/qaqdmin</code></p><h2 id="手动部署" tabindex="-1">手动部署 <a class="header-anchor" href="#手动部署" aria-hidden="true">#</a></h2><p>手动部署，是使用最多更新速度最快的部署方式，如果后续需要魔改前端，推荐使用手动部署</p><h3 id="视频" tabindex="-1">视频 <a class="header-anchor" href="#视频" aria-hidden="true">#</a></h3><p>很高兴，我们的文档贡献者提供了视频教程；建议配合本文档进行操作</p><iframe src="https://api.paugram.com/bili?bv=BV14N4y137ZW&amp;style=gray" style="height:176px;width:100%;"></iframe><hr><h3 id="部署-core" tabindex="-1">部署 Core <a class="header-anchor" href="#部署-core" aria-hidden="true">#</a></h3><p>一般情况下，我们推荐使用 Docker 进行部署，接下来将带你使用 Docker 部署 Core，步骤非常简单</p><hr><h4 id="docker-部署" tabindex="-1">Docker 部署 <a class="header-anchor" href="#docker-部署" aria-hidden="true">#</a></h4><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">新建文件夹</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> mkdir -p mx-space/core </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">_</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">拉取docker-compose.yml 文件</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ wget https://fastly.jsdelivr.net/gh/mx-space/core@master/docker-compose.yml</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">拉取 Core 配置文件</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ wget https://fastly.jsdelivr.net/gh/mx-space/core@master/.env.example -O .env</span></span>\n<span class="line"></span></code></pre></div><p>我们编辑 .env 文件，它看起来应该是这个样子的</p><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;"># THIS ENV FILE EXAMPLE ONLY FOR DOCKER COMPOSE</span></span>\n<span class="line"><span style="color:#A6ACCD;"># SEE https://docs.docker.com/compose/environment-variables/#the-env-file</span></span>\n<span class="line"><span style="color:#A6ACCD;">JWT_SECRET=7294c34e0b28ad28          #此处填写一个长度不小于16个字符，不大于32个字符的字符串</span></span>\n<span class="line"><span style="color:#A6ACCD;">ALLOWED_ORIGINS=test.cn,www.test.cn  #此处填写被允许的域名，通常是kami的域名，如果允许多个域名访问，用英文逗号,分隔</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如此，就可以了，接下来我们启动后端</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#676E95;"># docker compose up -d</span></span>\n<span class="line"></span></code></pre></div><p>我们可以查看后端是否正常运行</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ curl  http://127.0.0.1:2333/api/v2</span></span>\n<span class="line"></span></code></pre></div><p>返回如下内容，认为正常</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">➜  </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> curl  http://127.0.0.1:2333/api/v2</span></span>\n<span class="line"><span style="color:#A6ACCD;">{</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@mx-space/core</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">author</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Innei &lt;https://innei.ren&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3.36.4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">homepage</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://github.com/mx-space/core#readme</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">issues</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://github.com/mx-space/core/issues</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">}</span></span>\n<span class="line"></span></code></pre></div><hr><h4 id="从源码进行部署" tabindex="-1">从源码进行部署 <a class="header-anchor" href="#从源码进行部署" aria-hidden="true">#</a></h4><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果你是为了使用，而不是开发，建议使用 <a href="/deploy/#docker-部署">Docker 部署</a> ，当然，如果你有比较好的功能，欢迎 PR</p></div><p>拉取源代码</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git clone https://github.com/mx-space/core.git --depth 1</span></span>\n<span class="line"></span></code></pre></div><p>安装依赖</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ pnpm i</span></span>\n<span class="line"></span></code></pre></div><p>本地开发</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ pnpm dev</span></span>\n<span class="line"></span></code></pre></div><p>如果你想这样部署 Core 并对外提供服务 ，请移动到 <code>/src/app.config.ts</code> 文件</p><p>它 13-30 行的内容如下，看起来似乎是这样的</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> CROSS_DOMAIN </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">allowedOrigins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> argv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">allowed_origins</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> argv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">allowed_origins</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">innei.ren</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.innei.ren</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">shizuri.net</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.shizuri.net</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost:*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mbp.cc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">local.innei.test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">22333322.xyz</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.dev</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      ]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// allowedReferer: &#39;innei.ren&#39;,</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>其中，按照 17-26 行一样，按照格式，追加你的域名</p><p>例如，我想要添加 <code>server.example.com</code> ，那么仅仅这样追加一行即可。</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> CROSS_DOMAIN </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">allowedOrigins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> argv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">allowed_origins</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> argv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">allowed_origins</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">innei.ren</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.innei.ren</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">shizuri.net</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.shizuri.net</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost:*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mbp.cc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">local.innei.test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">22333322.xyz</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.dev</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">server.example.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//追加的新域名</span></span>\n<span class="line"><span style="color:#A6ACCD;">      ]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// allowedReferer: &#39;innei.ren&#39;,</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>构建 &amp; 启动</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ pnpm build</span></span>\n<span class="line"></span></code></pre></div><p>我们可以使用 pm2 托管</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ pm2 start</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">或者</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">$ pnpm prod:pm2</span></span>\n<span class="line"></span></code></pre></div><hr><h3 id="部署-kami" tabindex="-1">部署 Kami <a class="header-anchor" href="#部署-kami" aria-hidden="true">#</a></h3><p>Kami 是 Mix Space 的默认前端，不过如果你想尝试其他风格的话，可以去 <a href="https://github.com/mx-space/mx-web-yun" target="_blank" rel="noreferrer">mx-web-yun</a> 看看。</p><h4 id="拉取源文件" tabindex="-1">拉取源文件 <a class="header-anchor" href="#拉取源文件" aria-hidden="true">#</a></h4><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> mx-space</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ git clone https://github.com/mx-space/kami.git --depth 1</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">如果克隆缓慢，可以使用下面的镜像地址</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ git clone https://github.1qi777.com/mx-space/kami.git --depth 1</span></span>\n<span class="line"></span></code></pre></div><h4 id="切换到最新的-tag" tabindex="-1">切换到最新的 tag <a class="header-anchor" href="#切换到最新的-tag" aria-hidden="true">#</a></h4><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> kami </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> git fetch --tags </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> git checkout </span><span style="color:#89DDFF;">$(</span><span style="color:#C3E88D;">git rev-list --tags --max-count=1</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"></span></code></pre></div><h4 id="拉取图片文件" tabindex="-1">拉取图片文件 <a class="header-anchor" href="#拉取图片文件" aria-hidden="true">#</a></h4><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git lfs fetch --all</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">$ git lfs pull</span></span>\n<span class="line"></span></code></pre></div><p>注意：如果无法正常拉取，可以到 GitHub 上手动下载文件并放到相应目录。</p><h4 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-hidden="true">#</a></h4><p>复制 .env.example 为 .env</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ cp .env.example .env</span></span>\n<span class="line"></span></code></pre></div><p>编辑 .env 文件，它看起来应该是这个样子的</p><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;"># API 地址</span></span>\n<span class="line"><span style="color:#A6ACCD;">NEXT_PUBLIC_API_URL=https://server.test.cn/api/v2</span></span>\n<span class="line"><span style="color:#A6ACCD;"># GATEWAY 地址</span></span>\n<span class="line"><span style="color:#A6ACCD;">NEXT_PUBLIC_GATEWAY_URL=https://server.test.cn</span></span>\n<span class="line"><span style="color:#A6ACCD;">#前端使用的配置项名字</span></span>\n<span class="line"><span style="color:#A6ACCD;">NEXT_PUBLIC_SNIPPET_NAME=kami</span></span>\n<span class="line"><span style="color:#A6ACCD;"># 如果使用 CDN, 修改产物前缀；一般留空</span></span>\n<span class="line"><span style="color:#A6ACCD;">ASSETPREFIX=</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-hidden="true">#</a></h4><p>这里选用 pnpm 作为包管理器</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">安装必需的模块</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ pnpm i</span></span>\n<span class="line"><span style="color:#A6ACCD;">构建</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ pnpm build</span></span>\n<span class="line"></span></code></pre></div><h4 id="启动前端" tabindex="-1">启动前端 <a class="header-anchor" href="#启动前端" aria-hidden="true">#</a></h4><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ pnpm prod:pm2</span></span>\n<span class="line"><span style="color:#A6ACCD;">可选</span></span>\n<span class="line"><span style="color:#A6ACCD;">$ pm2 start</span></span>\n<span class="line"></span></code></pre></div><p>我们可以查看前端是否正常运行</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ curl http://127.0.0.1:2323</span></span>\n<span class="line"></span></code></pre></div><p>如果有返回数据，则认为正常</p><h2 id="下一步" tabindex="-1">下一步 <a class="header-anchor" href="#下一步" aria-hidden="true">#</a></h2><p><a href="/use/">开始使用~</a></p>',121)];const c=s(e,[["render",function(s,p,l,e,c,t){return a(),n("div",null,o)}]]);export{l as __pageData,c as default};
