import{_ as s,o as n,c as a,a as l}from"./app.24d44924.js";const p=JSON.parse('{"title":"Windows 安装","description":"","frontmatter":{"title":"Windows 安装"},"headers":[{"level":2,"title":"安装 Core","slug":"安装-core"},{"level":3,"title":"安装 MongoDB","slug":"安装-mongodb"},{"level":3,"title":"Redis","slug":"redis"},{"level":3,"title":"安装 Node.js","slug":"安装-node-js"},{"level":3,"title":"安装 msvc 编译环境","slug":"安装-msvc-编译环境"},{"level":3,"title":"拉取仓库","slug":"拉取仓库"},{"level":3,"title":"安装依赖","slug":"安装依赖"},{"level":3,"title":"构建 & 启动","slug":"构建-启动"},{"level":2,"title":"安装 kami","slug":"安装-kami"},{"level":3,"title":"拉取仓库","slug":"拉取仓库-1"},{"level":3,"title":"安装依赖","slug":"安装依赖-1"},{"level":3,"title":"配置","slug":"配置"},{"level":3,"title":"构建","slug":"构建"},{"level":3,"title":"启动 kami","slug":"启动-kami"},{"level":2,"title":"存在的问题","slug":"存在的问题"}],"relativePath":"deploy/windows.md"}'),o={name:"deploy/windows.md"},e=[l('<h1 id="windows-安装-mix-space" tabindex="-1">Windows 安装 Mix-Space <a class="header-anchor" href="#windows-安装-mix-space" aria-hidden="true">#</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>本节内容是文档贡献者单方面的支持，文中提到的问题不会被修复，不推荐使用 Windows 部署 Mix-Space</p></div><h2 id="安装-core" tabindex="-1">安装 Core <a class="header-anchor" href="#安装-core" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果你的不是基于虚拟化的服务器（即可以进行虚拟化），还是非常推荐使用 <a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noreferrer">Docker Desktop For Windows</a> 去部署 Core；如果你是基于虚拟化的服务器上（即不支持再次虚拟化），那仅能使用源码进行部署，这种存在安装方式比较繁琐，且存在将来也不会修复的 BUG</p></div><p>Mix-Space 的 Core 需要 MongoDB ，Node.js 以及 Redis ，如果你有 Scoop 管理器，可以很方便的安装</p><div class="language-powershell"><button class="copy"></button><span class="lang">powershell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ scoop install mongodb redis nodejs</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">lts</span></span>\n<span class="line"></span></code></pre></div><p>如果你没有 Scoop 作为包管理器，接下来带你手动下载安装，并处理环境变量问题(可选)</p><h3 id="安装-mongodb" tabindex="-1">安装 MongoDB <a class="header-anchor" href="#安装-mongodb" aria-hidden="true">#</a></h3><p>官方链接如下 <a href="https://www.mongodb.com/try/download/community" target="_blank" rel="noreferrer">https://www.mongodb.com/try/download/community</a></p><p>下载最新版本的 <code>msi</code> 安装包 ，安装，一路下一步即可。</p><p>启动 MongoDB 的方式也很简单，直接双击 MongoDB 安装目录下的 <code>mongod.exe</code> 即可；不过一般情况下 MongoDB 默认会作为服务启动。</p><p><img src="https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/windows-mongodb.png" alt=""></p><h3 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-hidden="true">#</a></h3><p>Redis 对 Windows 的原生支持停留在了 3.x 版本，不过有人实现了部分 POSIX 接口标准，以此来复刻实现 Windows 版本的 Redis。</p><p><a href="https://github.com/tporadowski/redis/releases" target="_blank" rel="noreferrer">https://github.com/tporadowski/redis/releases</a></p><p>下载 <code>msi</code> 安装包，一路下一步即可</p><p>启动的 Redis 的方式也很简单，直接双击 Redis 安装目录下的 <code>redis-server.exe</code> 即可</p><p><img src="https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/windows-redis-server.png" alt=""></p><p>当然如果你觉得这样启动麻烦，你可以创建快捷方式，或者将两者的执行目录添加到 Windows 环境变量</p><h3 id="安装-node-js" tabindex="-1">安装 Node.js <a class="header-anchor" href="#安装-node-js" aria-hidden="true">#</a></h3><p>我们可以在官网上下载 Node.js 安装包，链接如下 <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">https://nodejs.org/en/</a> ，下载 16.x 版本，一路下一步即可。当你安装完成后，请自行把 Node.js 的执行目录添加到 Windows 环境变量，如果你不会，请自行搜索</p><p>当你添加完成后，我们需要安装 pm2 pnpm yarn</p><div class="language-powershell"><button class="copy"></button><span class="lang">powershell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm i </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">g pm2 pnpm yarn</span></span>\n<span class="line"></span></code></pre></div><h3 id="安装-msvc-编译环境" tabindex="-1">安装 msvc 编译环境 <a class="header-anchor" href="#安装-msvc-编译环境" aria-hidden="true">#</a></h3><p>mscv 编译环境，目前获取的渠道只有使用 VS 安装 C++ 的桌面开发环境才能获得</p><p>所以，我们去 VS 官网下载 VS 的构建工具，链接如下 <a href="https://visualstudio.microsoft.com/zh-hans/downloads/" target="_blank" rel="noreferrer">https://visualstudio.microsoft.com/zh-hans/downloads/</a></p><p>我们仅需安装以下功能组件即可</p><p><img src="https://fastly.jsdelivr.net/gh/mx-space/docs-images@latest/images/vs-install-msvc.png" alt=""></p><h3 id="拉取仓库" tabindex="-1">拉取仓库 <a class="header-anchor" href="#拉取仓库" aria-hidden="true">#</a></h3><p>首先，你得自行安装 git</p><p>在你喜欢的地方打开 powershell / cmd / other terminal</p><div class="language-powershell"><button class="copy"></button><span class="lang">powershell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git clone https:</span><span style="color:#89DDFF;">//</span><span style="color:#82AAFF;">github.com</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mx</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">space</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">core.git </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">depth </span><span style="color:#F78C6C;">1</span></span>\n<span class="line"></span></code></pre></div><p>或者下载 <a href="https://github.com/mx-space/core/releases" target="_blank" rel="noreferrer"><code>core</code> 的稳定发行包</a> <code>Source code (zip)</code> ，解压到你喜欢的地方</p><h3 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a></h3><div class="language-powershell"><button class="copy"></button><span class="lang">powershell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ pnpm i</span></span>\n<span class="line"></span></code></pre></div><p>修改允许的域名</p><p>移动到 /src/app.config.ts 文件</p><p>13-30 行的内容如下</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> CROSS_DOMAIN </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">allowedOrigins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> argv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">allowed_origins</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> argv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">allowed_origins</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">innei.ren</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.innei.ren</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">shizuri.net</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.shizuri.net</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost:*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mbp.cc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">local.innei.test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">22333322.xyz</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.dev</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      ]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// allowedReferer: &#39;innei.ren&#39;,</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>其中，按照 17-26 行一样，按照格式，追加你的域名</p><p>例如，我想要添加 <code>server.example.com</code> ，那么仅仅这样追加一行即可。</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> CROSS_DOMAIN </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">allowedOrigins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> argv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">allowed_origins</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> argv</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">allowed_origins</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">?.</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">innei.ren</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.innei.ren</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">shizuri.net</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.shizuri.net</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost:*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">127.0.0.1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mbp.cc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">local.innei.test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">22333322.xyz</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.dev</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">server.example.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">//追加的新域名</span></span>\n<span class="line"><span style="color:#A6ACCD;">      ]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// allowedReferer: &#39;innei.ren&#39;,</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><h3 id="构建-启动" tabindex="-1">构建 &amp; 启动 <a class="header-anchor" href="#构建-启动" aria-hidden="true">#</a></h3><p>构建</p><div class="language-powershell"><button class="copy"></button><span class="lang">powershell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ pnpm build</span></span>\n<span class="line"></span></code></pre></div><p>使用 pm2 托管 Core ，我们还需要修改一下脚本，移动到 <code>ecosystem.config.js</code></p><p>它看起来是如下内容</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> cpus </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">os</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> execSync </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">child_process</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> nodePath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">execSync</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">npm root --quiet -g</span><span style="color:#89DDFF;">`</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">encoding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#A6ACCD;">(</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">)[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cpuLen </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cpus</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>\n<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">apps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mx-server</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">index.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">autorestart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">exec_mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cluster</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">watch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">instances</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> cpuLen</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">max_memory_restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">200M</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">--color</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">NODE_ENV</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">NODE_PATH</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> nodePath</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>将 12 行的 <code>index.js</code> 修改为 <code>dist/src/main.js</code> ，即把 <code>ecosystem.dev.config.js</code> 的内容复制过去</p><p>看起如下</p><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> cpus </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">os</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> execSync </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">child_process</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> nodePath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">execSync</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">npm root --quiet -g</span><span style="color:#89DDFF;">`</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">encoding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#A6ACCD;">(</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">)[</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">]</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> cpuLen </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cpus</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span></span>\n<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">apps</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mx-server</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">dist/src/main.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">autorestart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">exec_mode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">cluster</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">watch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">instances</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> cpuLen</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">max_memory_restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">200M</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">--color</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">env</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">NODE_ENV</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">production</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">NODE_PATH</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> nodePath</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>\n<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span></span>\n<span class="line"></span></code></pre></div><p>使用 pm2 托管</p><div class="language-powershell"><button class="copy"></button><span class="lang">powershell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ pnpm prod:pm2</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">或者</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">$ pm2 start</span></span>\n<span class="line"></span></code></pre></div><h2 id="安装-kami" tabindex="-1">安装 kami <a class="header-anchor" href="#安装-kami" aria-hidden="true">#</a></h2><h3 id="拉取仓库-1" tabindex="-1">拉取仓库 <a class="header-anchor" href="#拉取仓库-1" aria-hidden="true">#</a></h3><p>在你喜欢的地方打开 powershell / cmd / other terminal</p><div class="language-powershell"><button class="copy"></button><span class="lang">powershell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ git clone https:</span><span style="color:#89DDFF;">//</span><span style="color:#82AAFF;">github.com</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mx</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">space</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">kami.git </span><span style="color:#89DDFF;">--</span><span style="color:#A6ACCD;">depth </span><span style="color:#F78C6C;">1</span></span>\n<span class="line"></span></code></pre></div><p>或者下载 <a href="https://github.com/mx-space/kami/releases" target="_blank" rel="noreferrer"><code>kami</code> 的稳定发行包</a> <code>Source code (zip)</code> ，解压到你喜欢的地方</p><h3 id="安装依赖-1" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖-1" aria-hidden="true">#</a></h3><p>由于使用 <code>pnpm</code> 会存在目录链接，符号链接等，容易出现权限问题，导致心态炸裂的问题，故这里采用 <code>yarn</code> 作为依赖管理器</p><div class="language-powershell"><button class="copy"></button><span class="lang">powershell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ yarn </span></span>\n<span class="line"></span></code></pre></div><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h3><p>将 <code>.env.example</code> 复制并重命名为 <code>.env</code> ，编辑内容如下</p><div class="language-text"><button class="copy"></button><span class="lang">text</span><pre><code><span class="line"><span style="color:#A6ACCD;"># API 地址</span></span>\n<span class="line"><span style="color:#A6ACCD;">NEXT_PUBLIC_API_URL=https://server.test.cn/api/v2</span></span>\n<span class="line"><span style="color:#A6ACCD;"># GATEWAY 地址</span></span>\n<span class="line"><span style="color:#A6ACCD;">NEXT_PUBLIC_GATEWAY_URL=https://server.test.cn</span></span>\n<span class="line"><span style="color:#A6ACCD;">#前端使用的配置项名字</span></span>\n<span class="line"><span style="color:#A6ACCD;">NEXT_PUBLIC_SNIPPET_NAME=kami</span></span>\n<span class="line"><span style="color:#A6ACCD;"># 如果使用 CDN, 修改产物前缀；一般留空</span></span>\n<span class="line"><span style="color:#A6ACCD;">ASSETPREFIX=</span></span>\n<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-hidden="true">#</a></h3><div class="language-powershell"><button class="copy"></button><span class="lang">powershell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ yarn build</span></span>\n<span class="line"></span></code></pre></div><h3 id="启动-kami" tabindex="-1">启动 kami <a class="header-anchor" href="#启动-kami" aria-hidden="true">#</a></h3><p>在 Kami 的目录下，打开 powershell / cmd / other terminal</p><div class="language-powershell"><button class="copy"></button><span class="lang">powershell</span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npx next start </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">p </span><span style="color:#F78C6C;">2323</span></span>\n<span class="line"></span></code></pre></div><p>该终端窗口不能关闭，否则前端将会关闭，你可以把它最小化</p><h2 id="存在的问题" tabindex="-1">存在的问题 <a class="header-anchor" href="#存在的问题" aria-hidden="true">#</a></h2><ul><li>Core： <ul><li>备份功能失效</li><li>评论模板编辑功能失效</li><li>终端功能可能失效</li><li>任务功能无法查看，但是可能运行正常</li></ul></li></ul>',72)];const c=s(o,[["render",function(s,l,p,o,c,r){return n(),a("div",null,e)}]]);export{p as __pageData,c as default};
