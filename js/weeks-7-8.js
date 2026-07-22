// ============================================================
// 小克代码学习系统 — 第7-8周：DOM操作与综合项目
// ============================================================

const WEEKS_7_8 = [
  // ==================== 第7周 ====================
  {
    topic: '实战篇（上）— DOM操作和事件',
    days: [
      // ---- Day 1 ----
      {
        title: 'Day 1：让网页互动起来',
        desc: '认识DOM，用JavaScript找到网页元素',
        cards: [
          {
            tag: '🎯 什么是DOM',
            title: 'DOM是什么？',
            explain:
              '<strong>DOM</strong>（文档对象模型）是浏览器把网页变成的一种<strong>树形结构</strong>。<br>每个HTML标签、每段文字，在DOM里都是一个<strong>对象</strong>。<br>JavaScript通过DOM来<strong>读取、修改、删除</strong>网页上的任何内容。',
            code: '<span class="comment">// DOM = 网页的"遥控器"</span><br><span class="tag">const</span> <span class="text">title</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"myTitle"</span>);',
            analogy:
              '想象你在用电视遥控器：网页是电视画面，DOM就是遥控器，JavaScript就是你按按钮的手指——不用碰电视，就能换台、调音量！📺',
            tip: '打开浏览器按 F12，在 Console 里输入 `document` 回车，就能看到整个DOM树！'
          },
          {
            tag: '🌳 树形结构',
            title: '网页像一棵大树',
            explain:
              'DOM的结构像一棵<strong>倒过来的树</strong>：最上面是<strong>根节点</strong>（`<html>`），下面分出<strong>树枝</strong>（`<head>`和`<body>`），再分出<strong>树叶</strong>（各种标签）。<br>理解这棵树，你就知道如何用代码「摸」到任何一个元素。',
            code: '<span class="text">html</span><br>├── <span class="text">head</span><br>│   └── <span class="text">title</span> = "我的看板"<br>└── <span class="text">body</span><br>    ├── <span class="text">h1</span> = "达人刊例"<br>    └── <span class="text">table</span>',
            analogy:
              '就像公司的组织架构图：CEO（html）下面有VP（head/body），VP下面有各部门（标签），每个部门里是员工（文字内容）。你想找谁，顺着架构图就能找到！🏢',
            tip: '画一棵你自己的网页DOM树，把HTML标签画上去，理解会更深刻！'
          },
          {
            tag: '🎮 document对象',
            title: 'document对象 — 一切的起点',
            explain:
              '<strong>document</strong>是浏览器提供的全局对象，代表整个网页。<br>所有DOM操作都从它开始，它是你进入网页世界的<strong>大门</strong>。<br>没有document，JavaScript就看不到网页上的任何东西。',
            code: '<span class="comment">// document 代表整个网页</span><br><span class="text">document</span>.<span class="attr">title</span> <span class="comment">// → "达人刊例看板"</span><br><span class="text">document</span>.<span class="attr">body</span> <span class="comment">// → &lt;body&gt;...</span>',
            analogy:
              'document就像你家的门禁卡——有了它你才能进房子。进了门之后，你才能去开灯、开冰箱、看电视。🏠',
            tip: '试试 `document.title = \'新标题\'`，看浏览器标签页标题会不会变！'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: 'DOM到底是什么？',
            options: [
              '一种编程语言',
              '浏览器把网页HTML变成的树形对象模型',
              '一种CSS样式',
              '一种服务器技术'
            ],
            answer: '浏览器把网页HTML变成的树形对象模型',
            explanation: 'DOM（Document Object Model）是浏览器解析HTML后生成的树形结构对象，JavaScript通过它来操作网页内容。'
          },
          {
            type: '判断题',
            question: 'document对象是JavaScript用来操作网页的起点。',
            options: ['正确 ✅', '错误 ❌'],
            answer: '正确 ✅',
            explanation: 'document是浏览器提供的全局对象，代表整个网页页面，所有DOM操作都从document开始。'
          },
          {
            type: '选择题',
            question: '在浏览器Console中输入 `document.title = "新标题"` 后，会发生什么？',
            options: [
              '报错，不能修改title',
              '浏览器标签页标题变成「新标题」',
              '网页内容变成「新标题」',
              '什么都没有发生'
            ],
            answer: '浏览器标签页标题变成「新标题」',
            explanation: 'document.title 属性控制浏览器标签页上显示的标题，修改它会立即生效，不需要刷新页面。'
          }
        ]
      },
      // ---- Day 2 ----
      {
        title: 'Day 2：精准找到元素',
        desc: '学习getElementById、querySelector等方法，精准定位网页元素',
        cards: [
          {
            tag: '🔍 getElementById',
            title: '用ID精准定位',
            explain:
              '<strong>getElementById</strong>通过元素的<strong>id属性</strong>来查找元素。<br>id在页面中是<strong>唯一</strong>的，所以这个方法只会返回一个元素。<br>这是最快、最常用的查找方式，就像用身份证号找人一样准确！',
            code: '<span class="comment">// HTML: &lt;h1 id="title"&gt;达人刊例&lt;/h1&gt;</span><br><span class="tag">const</span> <span class="text">title</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"title"</span>);<br><span class="text">console</span>.<span class="attr">log</span>(<span class="text">title</span>); <span class="comment">// → &lt;h1&gt;达人刊例&lt;/h1&gt;</span>',
            analogy:
              '就像在微信群里 @一个人：@小明 只会找到那一个特定的小明，不会找错。📱',
            tip: 'id不能重复！一个页面里同一个id只能出现一次，否则会找错元素。'
          },
          {
            tag: '🎯 querySelector',
            title: '万能查找器 querySelector',
            explain:
              '<strong>querySelector</strong>可以用CSS选择器的方式查找元素。<br>它可以找标签名、类名、id，甚至组合条件。<br>它返回找到的<strong>第一个</strong>匹配元素，非常灵活强大。',
            code: '<span class="comment">// 用标签名找</span><br><span class="text">document</span>.<span class="attr">querySelector</span>(<span class="val">"h1"</span>)<br><span class="comment">// 用类名找（注意前面的点）</span><br><span class="text">document</span>.<span class="attr">querySelector</span>(<span class="val">".card"</span>)<br><span class="comment">// 用id找（注意前面的#）</span><br><span class="text">document</span>.<span class="attr">querySelector</span>(<span class="val">"#totalSales"</span>)',
            analogy:
              '就像用淘宝搜索：你可以搜「手机」（标签名），也可以搜「苹果手机」（组合条件），querySelector帮你找到第一个最匹配的商品！🔍',
            tip: 'querySelector的语法和CSS一模一样！之前学的CSS选择器知识可以直接用上。'
          },
          {
            tag: '📦 querySelectorAll',
            title: '一次找出所有匹配的元素',
            explain:
              '<strong>querySelectorAll</strong>和querySelector类似，但它会返回<strong>所有</strong>匹配的元素。<br>返回的是一个类似数组的集合，可以用<strong>for循环</strong>来逐个处理。<br>非常适合批量操作，比如同时修改所有卡片的颜色。',
            code: '<span class="comment">// 找出所有带 .card 类的元素</span><br><span class="tag">const</span> <span class="text">cards</span> = <span class="text">document</span>.<span class="attr">querySelectorAll</span>(<span class="val">".card"</span>);<br><span class="comment">// 逐个修改背景色</span><br><span class="tag">for</span> (<span class="tag">const</span> <span class="text">card</span> <span class="tag">of</span> <span class="text">cards</span>) {<br>  <span class="text">card</span>.<span class="attr">style</span>.<span class="attr">backgroundColor</span> = <span class="val">"#f0f8ff"</span>;<br>}',
            analogy:
              '如果querySelector是「给我第一个穿红衣服的人」，那querySelectorAll就是「把所有穿红衣服的人都叫来」——一喊全到！👥',
            tip: '返回的集合不是真正的数组，不能直接用map/filter，但可以用for...of循环遍历。'
          },
          {
            tag: '📊 看板实战',
            title: '在看板中找到数据元素',
            explain:
              '在你的达人刊例看板中，每个数据指标都可以用id标记：<br><strong>总销售额</strong>、<strong>达人数量</strong>、<strong>转化率</strong>。<br>用getElementById就能精准拿到这些元素，然后用JavaScript更新数值。',
            code: '<span class="comment">// 找到看板中的销售额元素</span><br><span class="tag">const</span> <span class="text">salesEl</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"total-sales"</span>);<br><span class="comment">// 找到所有机构卡片</span><br><span class="tag">const</span> <span class="text">orgs</span> = <span class="text">document</span>.<span class="attr">querySelectorAll</span>(<span class="val">".org-card"</span>);<br><span class="text">console</span>.<span class="attr">log</span>(<span class="val">`找到 </span><span class="text">$</span>{<span class="text">orgs</span>.<span class="attr">length</span>}<span class="val"> 个机构`</span>);',
            analogy:
              '就像Excel里用单元格地址（A1、B2）来引用数据一样，DOM方法就是用代码版的「单元格地址」来找网页上的数据。📊',
            tip: '给重要数据元素加上有意义的id，比如 `total-sales`、`conversion-rate`，代码可读性会大大提高。'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: '如果页面上有3个 class="card" 的元素，querySelector(".card") 会返回什么？',
            options: [
              '所有3个卡片元素',
              '第1个匹配的卡片元素',
              'null',
              '报错'
            ],
            answer: '第1个匹配的卡片元素',
            explanation: 'querySelector只返回第一个匹配的元素。如果要获取所有匹配的，需要用querySelectorAll。'
          },
          {
            type: '选择题',
            question: '以下哪个方法可以通过id查找元素？',
            options: [
              'document.querySelector("#myId")',
              'document.getElementById("myId")',
              '两个都可以',
              '两个都不行'
            ],
            answer: '两个都可以',
            explanation: 'querySelector("#myId") 和 getElementById("myId") 都能通过id找到元素，效果相同。getElementById性能略快一些。'
          },
          {
            type: '选择题',
            question: 'querySelectorAll(".card") 返回的结果是什么类型？',
            options: [
              '真正的JavaScript数组',
              '单个DOM元素',
              '类似数组的集合（NodeList），可用for...of遍历',
              '字符串'
            ],
            answer: '类似数组的集合（NodeList），可用for...of遍历',
            explanation: 'querySelectorAll返回的是NodeList，它类似数组但不是真正的数组，不能直接用map/filter，但可以用for...of循环遍历。'
          }
        ]
      },
      // ---- Day 3 ----
      {
        title: 'Day 3：修改内容和样式',
        desc: '用JavaScript修改元素的文字、HTML、颜色和样式',
        cards: [
          {
            tag: '✏️ innerHTML',
            title: 'innerHTML — 修改HTML内容',
            explain:
              '<strong>innerHTML</strong>可以获取或设置元素的<strong>HTML内容</strong>。<br>不仅能改文字，还能插入完整的HTML标签（加粗、链接等）。<br>适合需要<strong>动态生成HTML</strong>的场景，比如看板上显示新的数据卡片。',
            code: '<span class="tag">const</span> <span class="text">card</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"data-card"</span>);<br><span class="comment">// 修改纯文字</span><br><span class="text">card</span>.<span class="attr">innerHTML</span> = <span class="val">"销售额：¥128,000"</span>;<br><span class="comment">// 插入带样式的HTML</span><br><span class="text">card</span>.<span class="attr">innerHTML</span> = <span class="val">"&lt;strong&gt;¥128,000&lt;/strong&gt; &lt;span style=\'color:green\'&gt;+15%&lt;/span&gt;"</span>;',
            analogy:
              'innerHTML就像Word里的「替换全部」功能——不仅能换文字，还能连带格式一起换，连加粗、颜色、链接都能塞进去！📝',
            tip: 'innerHTML可以插入HTML标签，但如果内容是用户输入的，要小心XSS安全问题。纯文字场景优先用textContent。'
          },
          {
            tag: '📝 textContent',
            title: 'textContent — 安全的纯文字修改',
            explain:
              '<strong>textContent</strong>只修改<strong>纯文本</strong>，不会解析HTML标签。<br>更安全，性能也更好。<br>当只需要改文字（比如数字、标题）时，推荐使用这个。',
            code: '<span class="tag">const</span> <span class="text">title</span> = <span class="text">document</span>.<span class="attr">querySelector</span>(<span class="val">"h1"</span>);<br><span class="text">title</span>.<span class="attr">textContent</span> = <span class="val">"2026年7月达人刊例"</span>;<br><span class="comment">// 即使写了HTML标签，也只当普通文字</span><br><span class="text">title</span>.<span class="attr">textContent</span> = <span class="val">"你好&lt;b&gt;世界&lt;/b&gt;"</span>;<br><span class="comment">// 页面上会显示：你好&lt;b&gt;世界&lt;/b&gt;（不是加粗）</span>',
            analogy:
              'textContent就像在便利贴上重新写字——不管你在便利贴上写什么，它都只是文字，不会变成什么特殊格式。📋',
            tip: '更新看板的数字指标（比如销售额、转化率）时，用textContent是最安全的选择！'
          },
          {
            tag: '🎨 style属性',
            title: '用JS修改CSS样式',
            explain:
              '每个DOM元素都有<strong>style属性</strong>，可以修改它的CSS样式。<br>注意JS里用<strong>驼峰命名</strong>：background-color变成backgroundColor。<br>可以改颜色、大小、位置……几乎任何CSS属性都能用JS改！',
            code: '<span class="tag">const</span> <span class="text">card</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"sales-card"</span>);<br><span class="comment">// 改背景色</span><br><span class="text">card</span>.<span class="attr">style</span>.<span class="attr">backgroundColor</span> = <span class="val">"#e8f5e9"</span>;<br><span class="comment">// 改字体大小</span><br><span class="text">card</span>.<span class="attr">style</span>.<span class="attr">fontSize</span> = <span class="val">"24px"</span>;<br><span class="comment">// 改边框</span><br><span class="text">card</span>.<span class="attr">style</span>.<span class="attr">border</span> = <span class="val">"2px solid #4caf50"</span>;<br><span class="comment">// 隐藏元素</span><br><span class="text">card</span>.<span class="attr">style</span>.<span class="attr">display</span> = <span class="val">"none"</span>;',
            analogy:
              '就像给房间换装修：刷墙漆（改背景色）、换家具大小（改字体）、挂窗帘（加边框）——房间还是那个房间，但看起来完全不一样了！🏠✨',
            tip: 'JS里CSS属性用驼峰命名：font-size → fontSize，text-align → textAlign。记住这个规则就不会错了！'
          },
          {
            tag: '📊 看板实战',
            title: '用JS更新看板数据',
            explain:
              '看板的核心价值是<strong>数据实时更新</strong>。<br>结合前面学的方法，我们可以<strong>找到数据元素</strong>，然后<strong>更新数字和颜色</strong>。<br>比如：销售额达标时变绿色，未达标时变红色。',
            code: '<span class="comment">// 更新销售额并变色</span><br><span class="tag">const</span> <span class="text">el</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"total-sales"</span>);<br><span class="text">el</span>.<span class="attr">textContent</span> = <span class="val">"¥128,000"</span>;<br><span class="tag">const</span> <span class="text">rate</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"conversion-rate"</span>);<br><span class="tag">if</span> (<span class="text">rateNum</span> >= <span class="val">5</span>) {<br>  <span class="text">rate</span>.<span class="attr">style</span>.<span class="attr">color</span> = <span class="val">"#4caf50"</span>; <span class="comment">// 绿色 ✅</span><br>} <span class="tag">else</span> {<br>  <span class="text">rate</span>.<span class="attr">style</span>.<span class="attr">color</span> = <span class="val">"#f44336"</span>; <span class="comment">// 红色 ❌</span><br>}',
            analogy:
              '就像汽车仪表盘：速度超过限速时指针区域变红，正常行驶是绿色。你的看板数据也应该「活」起来，用颜色告诉你数据的健康状态！🚗',
            tip: '在实际看板中，把数据更新逻辑封装成函数，比如 `updateSales(newNumber)`，以后调用就方便多了。'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: 'innerHTML 和 textContent 的区别是什么？',
            options: [
              '没有区别，完全一样',
              'innerHTML会解析HTML标签，textContent只当纯文字',
              'textContent会解析HTML标签，innerHTML只当纯文字',
              'innerHTML只能改文字，不能改HTML'
            ],
            answer: 'innerHTML会解析HTML标签，textContent只当纯文字',
            explanation: 'innerHTML会把内容当作HTML来解析和渲染，可以包含标签；textContent则把所有内容当作纯文本显示，即使写了HTML标签也会原样输出。'
          },
          {
            type: '选择题',
            question: '在JavaScript中，CSS属性 background-color 应该怎么写？',
            options: [
              'background-color',
              'background_color',
              'backgroundColor',
              'Backgroundcolor'
            ],
            answer: 'backgroundColor',
            explanation: 'JavaScript中CSS属性使用驼峰命名法（camelCase），去掉连字符并把后面的字母大写。background-color → backgroundColor。'
          },
          {
            type: '找错题',
            question: '以下代码有什么错误？\n`card.style.background-color = "red";`',
            options: [
              '没有错误，代码正确',
              '应该用驼峰命名：backgroundColor',
              '应该用下划线：background_color',
              '颜色值不能用字符串'
            ],
            answer: '应该用驼峰命名：backgroundColor',
            explanation: 'JavaScript中style属性的CSS属性名必须用驼峰命名法，background-color应写成backgroundColor，否则会导致语法错误（减号会被当作减法运算符）。'
          }
        ]
      },
      // ---- Day 4 ----
      {
        title: 'Day 4：事件处理',
        desc: '学习点击事件，让按钮和元素可以响应用户操作',
        cards: [
          {
            tag: '👆 onclick',
            title: 'onclick — 最简单的点击事件',
            explain:
              '<strong>onclick</strong>是最常用的事件处理方式。<br>当用户<strong>点击</strong>元素时，就会执行绑定的函数。<br>可以直接写在HTML里，也可以用JS来绑定。',
            code: '<span class="comment">// 方式1：HTML内联写法</span><br><span class="val">&lt;button onclick="alert(\'你好！\')"&gt;点我&lt;/button&gt;</span><br><br><span class="comment">// 方式2：JS绑定写法</span><br><span class="tag">const</span> <span class="text">btn</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"myBtn"</span>);<br><span class="text">btn</span>.<span class="attr">onclick</span> = <span class="tag">function</span>() {<br>  <span class="text">alert</span>(<span class="val">"你好！"</span>);<br>};',
            analogy:
              'onclick就像门铃按钮——你按一下，门铃就响。按一次响一次，简单直接！🔔',
            tip: '推荐用JS绑定的方式（方式2），把HTML和JS分开，代码更清晰好维护。'
          },
          {
            tag: '🎧 addEventListener',
            title: 'addEventListener — 更强大的事件绑定',
            explain:
              '<strong>addEventListener</strong>是更现代、更灵活的事件绑定方式。<br>可以给同一个元素绑定<strong>多个</strong>事件监听器。<br>支持的事件类型很多：click（点击）、mouseenter（鼠标移入）、keyup（按键抬起）等。',
            code: '<span class="tag">const</span> <span class="text">btn</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"refreshBtn"</span>);<br><span class="comment">// 点击事件</span><br><span class="text">btn</span>.<span class="attr">addEventListener</span>(<span class="val">"click"</span>, <span class="tag">function</span>() {<br>  <span class="text">alert</span>(<span class="val">"数据刷新中..."</span>);<br>});<br><span class="comment">// 还可以加第二个监听器</span><br><span class="text">btn</span>.<span class="attr">addEventListener</span>(<span class="val">"mouseenter"</span>, <span class="tag">function</span>() {<br>  <span class="text">btn</span>.<span class="attr">style</span>.<span class="attr">cursor</span> = <span class="val">"pointer"</span>;<br>});',
            analogy:
              'addEventListener就像办活动时可以请多个主持人——onclick只能请一个，addEventListener可以请一群，各自负责不同的环节！🎪',
            tip: 'addEventListener的第一个参数是事件名（不要加on），第二个是函数。记住：是 "click" 不是 "onclick"！'
          },
          {
            tag: '⌨️ 常见事件类型',
            title: '事件不只点击——常见事件一览',
            explain:
              '除了<strong>click</strong>，还有很多常用的事件类型：<br><strong>dblclick</strong>（双击）、<strong>mouseover/mouseout</strong>（鼠标移入移出）、<br><strong>input</strong>（输入框内容变化）、<strong>change</strong>（下拉框选项改变）、<br><strong>keydown/keyup</strong>（键盘按键）。<br>每种事件对应不同的用户行为。',
            code: '<span class="comment">// 鼠标移入时变亮</span><br><span class="text">card</span>.<span class="attr">addEventListener</span>(<span class="val">"mouseover"</span>, () => {<br>  <span class="text">card</span>.<span class="attr">style</span>.<span class="attr">boxShadow</span> = <span class="val">"0 4px 12px rgba(0,0,0,0.2)"</span>;<br>});<br><span class="comment">// 鼠标移出时恢复</span><br><span class="text">card</span>.<span class="attr">addEventListener</span>(<span class="val">"mouseout"</span>, () => {<br>  <span class="text">card</span>.<span class="attr">style</span>.<span class="attr">boxShadow</span> = <span class="val">"none"</span>;<br>});',
            analogy:
              '事件类型就像不同场景的「传感器」：门磁传感器（click）、光线传感器（mouseover）、声音传感器（keydown）——每种传感器触发不同的反应！🤖',
            tip: 'hover效果用CSS做更简单（:hover伪类），但如果你需要复杂的交互逻辑，用JS事件处理更灵活。'
          },
          {
            tag: '📊 看板实战',
            title: '看板中的交互事件',
            explain:
              '看板中的按钮、筛选下拉框、刷新按钮，都需要<strong>事件监听</strong>。<br>比如点击<strong>「筛选机构」</strong>按钮时，只显示目标机构的数据。<br>鼠标移到<strong>数据卡片</strong>上时显示更多信息（tooltip效果）。',
            code: '<span class="comment">// 筛选按钮：点击后只看某机构</span><br><span class="tag">const</span> <span class="text">filterBtn</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"filter-org"</span>);<br><span class="text">filterBtn</span>.<span class="attr">addEventListener</span>(<span class="val">"click"</span>, () => {<br>  <span class="tag">const</span> <span class="text">cards</span> = <span class="text">document</span>.<span class="attr">querySelectorAll</span>(<span class="val">".org-card"</span>);<br>  <span class="tag">for</span> (<span class="tag">const</span> <span class="text">c</span> <span class="tag">of</span> <span class="text">cards</span>) {<br>    <span class="tag">if</span> (<span class="text">c</span>.<span class="attr">dataset</span>.<span class="attr">org</span> === <span class="val">"star"</span>) {<br>      <span class="text">c</span>.<span class="attr">style</span>.<span class="attr">display</span> = <span class="val">"block"</span>; <span class="comment">// 显示</span><br>    } <span class="tag">else</span> {<br>      <span class="text">c</span>.<span class="attr">style</span>.<span class="attr">display</span> = <span class="val">"none"</span>; <span class="comment">// 隐藏</span><br>    }<br>  }<br>});',
            analogy:
              '就像在餐厅用「只看川菜」的筛选按钮——按一下，菜单上只显示川菜，其他菜系都藏起来了。再按一下「全部」，所有菜又回来了！🍽️',
            tip: 'dataset属性可以读取HTML中 data-* 开头的自定义属性，比如 `<div data-org="star">`，用 `el.dataset.org` 就能拿到值。'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: 'addEventListener的第一个参数应该怎么写？',
            options: [
              '"onclick"',
              '"click"',
              'click',
              'onClick'
            ],
            answer: '"click"',
            explanation: 'addEventListener的事件名不带"on"前缀，且必须是字符串。所以是 "click" 而不是 "onclick"。'
          },
          {
            type: '判断题',
            question: '一个元素只能用addEventListener绑定一个事件。',
            options: ['正确 ✅', '错误 ❌'],
            answer: '错误 ❌',
            explanation: 'addEventListener可以为同一个元素绑定多个事件，也可以为同一事件绑定多个处理函数。这是它比onclick更强大的地方。'
          },
          {
            type: '选择题',
            question: '如果想监听用户在输入框中打字时的实时变化，应该使用哪个事件？',
            options: [
              '"click"',
              '"input"',
              '"submit"',
              '"focus"'
            ],
            answer: '"input"',
            explanation: 'input事件在输入框内容每次发生变化时触发（包括键盘输入、粘贴等），非常适合实时搜索、实时验证等场景。'
          }
        ]
      },
      // ---- Day 5 ----
      {
        title: 'Day 5：综合小练习',
        desc: '用本周所学知识，亲手做一个互动小工具',
        cards: [
          {
            tag: '🔢 练习1：点击计数器',
            title: '做一个点击计数器',
            explain:
              '综合运用DOM查找、内容修改、事件处理，<br>做一个<strong>点击计数器</strong>：每点一次按钮，数字加1。<br>这是理解DOM操作的经典入门练习！',
            code: '<span class="comment">// HTML 结构：</span><br><span class="comment">// &lt;h2 id="counter"&gt;0&lt;/h2&gt;</span><br><span class="comment">// &lt;button id="btn"&gt;+1&lt;/button&gt;</span><br><br><span class="tag">let</span> <span class="text">count</span> = <span class="val">0</span>;<br><span class="tag">const</span> <span class="text">display</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"counter"</span>);<br><span class="tag">const</span> <span class="text">btn</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"btn"</span>);<br><br><span class="text">btn</span>.<span class="attr">addEventListener</span>(<span class="val">"click"</span>, () => {<br>  <span class="text">count</span>++;<br>  <span class="text">display</span>.<span class="attr">textContent</span> = <span class="text">count</span>;<br>});',
            analogy:
              '就像超市门口的「今日客流计数器」——每进来一个人，工作人员按一下按钮，数字就加1。你做的就是这个计数器！🏪',
            tip: '试试加一个「重置」按钮，点击后把计数器清零，巩固所学知识！'
          },
          {
            tag: '🎨 练习2：颜色切换器',
            title: '做一个颜色切换器',
            explain:
              '做一个<strong>按钮切换颜色</strong>的小工具：<br>每次点击按钮，背景颜色在几个预设颜色中切换。<br>练习style属性的修改和数组的使用。',
            code: '<span class="tag">const</span> <span class="text">colors</span> = [<span class="val">"#ff6b6b"</span>, <span class="val">"#ffd93d"</span>, <span class="val">"#6bcb77"</span>, <span class="val">"#4d96ff"</span>, <span class="val">"#9b59b6"</span>];<br><span class="tag">let</span> <span class="text">index</span> = <span class="val">0</span>;<br><span class="tag">const</span> <span class="text">body</span> = <span class="text">document</span>.<span class="attr">querySelector</span>(<span class="val">"body"</span>);<br><span class="tag">const</span> <span class="text">btn</span> = <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"colorBtn"</span>);<br><br><span class="text">btn</span>.<span class="attr">addEventListener</span>(<span class="val">"click"</span>, () => {<br>  <span class="text">index</span> = (<span class="text">index</span> + <span class="val">1</span>) % <span class="text">colors</span>.<span class="attr">length</span>;<br>  <span class="text">body</span>.<span class="attr">style</span>.<span class="attr">backgroundColor</span> = <span class="text">colors</span>[<span class="text">index</span>];<br>});',
            analogy:
              '就像按遥控器换电视背景墙的颜色——按一下红色，再一下黄色，再一下绿色，循环播放！🎨',
            tip: '用 `% colors.length` 可以让索引自动循环，不用写 if 判断，这就是取余运算符的妙用！'
          },
          {
            tag: '📊 练习3：看板迷你版',
            title: '做一个迷你看板',
            explain:
              '综合运用本周全部知识：<br>创建一个<strong>迷你数据看板</strong>，包含标题、3个数据卡片、一个刷新按钮。<br>点击刷新按钮时，随机更新卡片中的数字。',
            code: '<span class="tag">function</span> <span class="attr">randomSales</span>() {<br>  <span class="tag">return</span> <span class="text">Math</span>.<span class="attr">floor</span>(<span class="text">Math</span>.<span class="attr">random</span>() * <span class="val">200000</span>);<br>}<br><br><span class="tag">function</span> <span class="attr">updateBoard</span>() {<br>  <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"sales"</span>).<span class="attr">textContent</span><br>    = <span class="val">"¥"</span> + <span class="attr">randomSales</span>();<br>  <span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"creators"</span>).<span class="attr">textContent</span><br>    = <span class="attr">randomSales</span>() / <span class="val">1000</span> + <span class="val">"人"</span>;<br>}<br><br><span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"refresh"</span>)<br>  .<span class="attr">addEventListener</span>(<span class="val">"click"</span>, <span class="attr">updateBoard</span>);',
            analogy:
              '就像股票APP的「刷新行情」按钮——一点一下，所有价格数字全部更新。你的迷你看板做的就是同样的事！📈',
            tip: '把更新逻辑写成函数（updateBoard），以后可以直接调用，不需要每次写一堆代码。这就是函数的威力！'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: '点击计数器的核心原理是什么？',
            options: [
              '用HTML重新写一遍整个页面',
              '用一个变量记录次数，点击时变量+1，然后把变量显示到页面上',
              '刷新页面让数字自动增加',
              '修改CSS样式'
            ],
            answer: '用一个变量记录次数，点击时变量+1，然后把变量显示到页面上',
            explanation: '计数器的核心三步：1. 用变量记住当前数字 2. 点击事件触发时变量+1 3. 用DOM方法把新数字更新到页面上。'
          },
          {
            type: '填空题',
            question: '在颜色切换器中，`index = (index + 1) % colors.length` 的作用是什么？',
            options: [
              '让索引在数组范围内循环',
              '删除数组最后一个元素',
              '把索引变成负数',
              '让数组变长'
            ],
            answer: '让索引在数组范围内循环',
            explanation: '取余运算符 % 保证了索引始终在 0 到 colors.length-1 之间循环，到达末尾后自动回到0。'
          },
          {
            type: '选择题',
            question: '迷你看板中 `Math.floor(Math.random() * 200000)` 的作用是什么？',
            options: [
              '生成一个固定的数字',
              '生成0到199999之间的随机整数',
              '生成0到200000之间的小数',
              '把200000变成负数'
            ],
            answer: '生成0到199999之间的随机整数',
            explanation: 'Math.random()生成0到1之间的随机小数，乘以200000后变成0到199999.999...，再用Math.floor()取整得到0到199999的随机整数。'
          }
        ]
      }
    ]
  },

  // ==================== 第8周 ====================
  {
    topic: '实战篇（下）— 综合看板项目',
    days: [
      // ---- Day 1 ----
      {
        title: 'Day 1：读懂看板代码（上）',
        desc: '分析一个真实看板HTML结构，找到关键部分',
        cards: [
          {
            tag: '🏗️ 结构分析',
            title: '看板HTML整体结构',
            explain:
              '一个完整的达人刊例看板，HTML结构通常分为<strong>三大块</strong>：<br><strong>头部</strong>（header）：标题、日期、操作按钮。<br><strong>主体</strong>（main）：数据卡片、表格、图表。<br><strong>底部</strong>（footer）：数据来源、更新时间。<br>就像读文章先看段落结构一样，先看HTML骨架。',
            code: '<span class="val">&lt;div class="dashboard"&gt;</span><br>  <span class="val">&lt;header&gt;</span> <span class="comment">&lt;!-- 标题区 --&gt;</span><br>    <span class="val">&lt;h1&gt;</span>达人刊例看板<span class="val">&lt;/h1&gt;</span><br>    <span class="val">&lt;button id="refresh"&gt;</span>刷新数据<span class="val">&lt;/button&gt;</span><br>  <span class="val">&lt;/header&gt;</span><br>  <span class="val">&lt;main&gt;</span> <span class="comment">&lt;!-- 数据区 --&gt;</span><br>    <span class="val">&lt;div class="cards"&gt;</span>...<span class="val">&lt;/div&gt;</span><br>    <span class="val">&lt;table&gt;</span>...<span class="val">&lt;/table&gt;</span><br>  <span class="val">&lt;/main&gt;</span><br><span class="val">&lt;/div&gt;</span>',
            analogy:
              '就像看一份PPT：先看目录（整体结构），知道有封面、正文、结尾三部分，再看每一页的内容。不要一上来就钻到细节里！📑',
            tip: '读HTML代码时，先看最外层的容器（最上面的`<div>`和最下面的`</div>`），然后一层层往里看。'
          },
          {
            tag: '🔑 关键元素',
            title: '找到数据展示的核心元素',
            explain:
              '看板中最重要的部分是<strong>数据展示区域</strong>。<br>通常包括：<strong>数据卡片</strong>（大数字指标）、<strong>表格</strong>（详细数据列表）、<strong>图表容器</strong>（可视化图形）。<br>每个区域都应该有清晰的class或id标记。',
            code: '<span class="comment">&lt;!-- 关键数据指标卡片 --&gt;</span><br><span class="val">&lt;div class="kpi-cards"&gt;</span><br>  <span class="val">&lt;div class="kpi-card" id="total-sales"&gt;</span><br>    <span class="val">&lt;h3&gt;</span>总销售额<span class="val">&lt;/h3&gt;</span><br>    <span class="val">&lt;span class="number"&gt;</span>¥128,000<span class="val">&lt;/span&gt;</span><br>    <span class="val">&lt;span class="trend up"&gt;</span>+15%<span class="val">&lt;/span&gt;</span><br>  <span class="val">&lt;/div&gt;</span><br>  <span class="val">&lt;div class="kpi-card" id="conversion"&gt;</span><br>    <span class="val">&lt;h3&gt;</span>转化率<span class="val">&lt;/h3&gt;</span><br>    <span class="val">&lt;span class="number"&gt;</span>3.2%<span class="val">&lt;/span&gt;</span><br>  <span class="val">&lt;/div&gt;</span><br><span class="val">&lt;/div&gt;</span>',
            analogy:
              '就像体检报告：最重要的几项指标（血压、血糖、血脂）放在最醒目的位置，详细数据在后面。看板的KPI卡片就是这些「关键指标」！🏥',
            tip: '注意看每个卡片的id和class，这是后续用JavaScript操作它们的「把手」。'
          },
          {
            tag: '📋 表格结构',
            title: '读懂看板中的表格',
            explain:
              '看板的<strong>数据表格</strong>通常包含：机构名、内容形式、报价、转化率等。<br>HTML表格用<strong>&lt;table&gt;</strong>标签包裹，<strong>&lt;tr&gt;</strong>表示行，<br><strong>&lt;th&gt;</strong>是表头（列名），<strong>&lt;td&gt;</strong>是数据单元格。',
            code: '<span class="val">&lt;table class="org-table"&gt;</span><br>  <span class="val">&lt;thead&gt;</span><br>    <span class="val">&lt;tr&gt;</span><br>      <span class="val">&lt;th&gt;</span>机构<span class="val">&lt;/th&gt;</span><br>      <span class="val">&lt;th&gt;</span>报价<span class="val">&lt;/th&gt;</span><br>      <span class="val">&lt;th&gt;</span>转化率<span class="val">&lt;/th&gt;</span><br>    <span class="val">&lt;/tr&gt;</span><br>  <span class="val">&lt;/thead&gt;</span><br>  <span class="val">&lt;tbody&gt;</span><br>    <span class="val">&lt;tr data-org="star"&gt;</span><br>      <span class="val">&lt;td&gt;</span>星辰传媒<span class="val">&lt;/td&gt;</span><br>      <span class="val">&lt;td&gt;</span>¥15,000<span class="val">&lt;/td&gt;</span><br>      <span class="val">&lt;td&gt;</span>5.2%<span class="val">&lt;/td&gt;</span><br>    <span class="val">&lt;/tr&gt;</span><br>  <span class="val">&lt;/tbody&gt;</span><br><span class="val">&lt;/table&gt;</span>',
            analogy:
              'HTML表格的结构和你天天看的Excel一模一样：thead是标题行，tbody是数据区，每一行tr就是一条记录。你已经很熟悉了！📊',
            tip: '注意 `data-org="star"` 这样的自定义属性，这是JS做筛选和排序时的重要标识。'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: '看板HTML通常分为哪三大部分？',
            options: [
              '标题、正文、注释',
              '头部(header)、主体(main)、底部(footer)',
              '输入、处理、输出',
              'HTML、CSS、JS'
            ],
            answer: '头部(header)、主体(main)、底部(footer)',
            explanation: '标准看板布局分为header（标题和操作区）、main（数据展示区）、footer（补充信息区），结构清晰好维护。'
          },
          {
            type: '判断题',
            question: 'HTML表格中的 <th> 标签表示数据单元格。',
            options: ['正确 ✅', '错误 ❌'],
            answer: '错误 ❌',
            explanation: '<th> 表示表头单元格（通常加粗居中显示列名），<td> 才是普通的数据单元格。'
          },
          {
            type: '选择题',
            question: 'HTML中的 `data-org="star"` 是什么？',
            options: [
              '一个CSS类名',
              '一个自定义数据属性，可以用 element.dataset.org 读取',
              '一个JavaScript变量',
              '一个错误的写法'
            ],
            answer: '一个自定义数据属性，可以用 element.dataset.org 读取',
            explanation: 'HTML中以 data- 开头的属性是自定义数据属性，JavaScript中可以通过 el.dataset.org 来读取其值，常用于存储与元素相关的额外数据。'
          }
        ]
      },
      // ---- Day 2 ----
      {
        title: 'Day 2：读懂看板代码（下）',
        desc: '分析CSS样式，理解布局和配色方案',
        cards: [
          {
            tag: '🎨 配色分析',
            title: '看板的配色方案',
            explain:
              '好的看板<strong>配色有层次</strong>：<br><strong>主色</strong>用于关键数据（如品牌蓝），<strong>辅助色</strong>用于趋势标识（涨=绿、跌=红）。<br>背景用浅色，文字用深色，保证<strong>可读性</strong>。<br>数据可视化中，不同类别用不同颜色区分。',
            code: '<span class="comment">/* 主色：品牌蓝 */</span><br><span class="attr">--primary</span>: <span class="val">#2563eb</span>;<br><span class="comment">/* 成功：绿色 */</span><br><span class="attr">--success</span>: <span class="val">#16a34a</span>;<br><span class="comment">/* 警告：橙色 */</span><br><span class="attr">--warning</span>: <span class="val">#ea580c</span>;<br><span class="comment">/* 趋势上升 */</span><br><span class="val">.trend.up</span> { <span class="attr">color</span>: <span class="val">var(--success)</span>; }<br><span class="comment">/* 趋势下降 */</span><br><span class="val">.trend.down</span> { <span class="attr">color</span>: <span class="val">var(--warning)</span>; }',
            analogy:
              '就像交通灯：绿色=通行（数据增长），红色=停止（数据下降），黄色=注意（需要关注）。好的看板用颜色「说话」，一眼就知道数据状况！🚦',
            tip: '用CSS变量（--primary）定义颜色，以后改主题色只需要改一处，所有引用都会自动更新。'
          },
          {
            tag: '📐 布局分析',
            title: 'Flexbox网格布局',
            explain:
              '看板中的数据卡片通常用<strong>Flexbox或Grid</strong>布局。<br><strong>display: flex</strong>让卡片横向排列，<strong>gap</strong>控制间距，<br><strong>flex-wrap: wrap</strong>让卡片自动换行。<br>这样在大屏上显示一排多个，小屏自动换行。',
            code: '<span class="val">.kpi-cards</span> {<br>  <span class="attr">display</span>: <span class="val">flex</span>;       <span class="comment">/* 启用弹性布局 */</span><br>  <span class="attr">gap</span>: <span class="val">20px</span>;           <span class="comment">/* 卡片间距 */</span><br>  <span class="attr">flex-wrap</span>: <span class="val">wrap</span>;     <span class="comment">/* 空间不够自动换行 */</span><br>}<br><span class="val">.kpi-card</span> {<br>  <span class="attr">flex</span>: <span class="val">1</span>;               <span class="comment">/* 平均分配空间 */</span><br>  <span class="attr">min-width</span>: <span class="val">200px</span>;    <span class="comment">/* 最小宽度 */</span><br>  <span class="attr">padding</span>: <span class="val">20px</span>;<br>  <span class="attr">border-radius</span>: <span class="val">12px</span>;<br>  <span class="attr">background</span>: <span class="val">white</span>;<br>}',
            analogy:
              'Flexbox就像排队——大家站成一排，有固定间距，人多了自动排成第二排。flex:1的意思是「每个人都分到一样宽的位置」！👫',
            tip: '改gap的值就能调整卡片间距，改min-width就能控制每行最多显示几个卡片，试试看！'
          },
          {
            tag: '📋 表格样式',
            title: '表格的美观样式',
            explain:
              '表格样式的关键点：<strong>隔行变色</strong>（提升可读性）、<br><strong>表头固定</strong>（滚动时可见）、<strong>边框线</strong>分隔单元格、<br><strong>hover高亮</strong>（鼠标移到行时变色）。<br>这些样式让数据一目了然。',
            code: '<span class="val">.org-table</span> {<br>  <span class="attr">width</span>: <span class="val">100%</span>;<br>  <span class="attr">border-collapse</span>: <span class="val">collapse</span>; <span class="comment">/* 合并边框 */</span><br>}<br><span class="comment">/* 隔行变色 */</span><br><span class="val">.org-table tbody tr:nth-child(even)</span> {<br>  <span class="attr">background</span>: <span class="val">#f8fafc</span>;<br>}<br><span class="comment">/* 鼠标移入高亮 */</span><br><span class="val">.org-table tbody tr:hover</span> {<br>  <span class="attr">background</span>: <span class="val">#e8f0fe</span>;<br>}',
            analogy:
              '隔行变色就像笔记本上的横线纸——有了横线，一行一行看就不会串行。鼠标移入高亮就像用荧光笔标记正在看的那一行！📓',
            tip: '`nth-child(even)` 选中偶数行，`nth-child(odd)` 选中奇数行。这是CSS的「隔行选择器」，做表格样式超好用。'
          },
          {
            tag: '📊 看板实战',
            title: '拆解你的达人刊例看板',
            explain:
              '拿出你之前做的达人刊例看板HTML文件，<br>用今天学的方法<strong>逐层分析</strong>：<br>1. 最外层容器是什么？ 2. 有几个数据卡片？<br>3. 用了什么颜色方案？ 4. 布局是flex还是grid？<br>把分析结果记在笔记里，这是你读代码能力的重要练习！',
            code: '<span class="comment">/* 分析笔记模板 */</span><br><span class="comment">// 1. 容器: &lt;div class="dashboard"&gt;</span><br><span class="comment">// 2. 卡片数: 4个 (销售额/转化/达人/内容)</span><br><span class="comment">// 3. 主色: #2563eb (蓝) 辅色: #16a34a (绿)</span><br><span class="comment">// 4. 布局: flex + gap: 20px</span><br><span class="comment">// 5. 表格: 隔行变色 ✓ hover高亮 ✓</span><br><span class="comment">// 6. 响应式: ✓ (flex-wrap: wrap)</span>',
            analogy:
              '就像拆开一个快递：先看外包装多大（容器），再看里面有几件东西（卡片），每件是什么颜色、什么形状（样式），最后拼起来就是完整的样子！📦',
            tip: '用浏览器的F12开发者工具，点击「元素检查」按钮，鼠标移到页面上就能看到对应的HTML代码，非常方便！'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: 'CSS中 `flex-wrap: wrap` 的作用是什么？',
            options: [
              '让元素重叠在一起',
              '当空间不够时，让元素自动换行到下一排',
              '隐藏超出容器的元素',
              '让元素垂直排列'
            ],
            answer: '当空间不够时，让元素自动换行到下一排',
            explanation: 'flex-wrap: wrap 让弹性布局中的子元素在容器宽度不够时自动换行，是响应式布局的关键属性。'
          },
          {
            type: '选择题',
            question: 'CSS变量 `--primary: #2563eb` 定义后，如何引用这个变量？',
            options: [
              'color: --primary;',
              'color: var(--primary);',
              'color: primary;',
              'color: #2563eb;'
            ],
            answer: 'color: var(--primary);',
            explanation: 'CSS变量需要用 var() 函数来引用，格式为 var(--变量名)。这样修改变量值时，所有引用的地方都会自动更新。'
          },
          {
            type: '填空题',
            question: 'CSS中 `:nth-child(even)` 的作用是什么？',
            options: [
              '选中第一个子元素',
              '选中所有偶数位置的子元素',
              '选中所有奇数位置的子元素',
              '选中最后一个子元素'
            ],
            answer: '选中所有偶数位置的子元素',
            explanation: 'nth-child(even) 是CSS伪类选择器，选中父元素下第2、4、6...等偶数位置的子元素，常用于表格隔行变色。nth-child(odd) 则选中奇数位置。'
          }
        ]
      },
      // ---- Day 3 ----
      {
        title: 'Day 3：修改看板样式',
        desc: '用学到的知识修改看板颜色、字体和布局',
        cards: [
          {
            tag: '🎨 换主题色',
            title: '把看板换成你的品牌色',
            explain:
              '只需要修改CSS<strong>变量</strong>的值，就能一键更换整个看板的主题色。<br>所有用到 <strong>var(--primary)</strong> 的地方都会自动更新。<br>这是CSS变量最强大的地方——<strong>一处修改，全局生效</strong>！',
            code: '<span class="comment">/* 原版：科技蓝 */</span><br><span class="attr">--primary</span>: <span class="val">#2563eb</span>;<br><span class="comment">/* 换成：活力橙 🍊 */</span><br><span class="attr">--primary</span>: <span class="val">#f97316</span>;<br><span class="comment">/* 换成：清新绿 🌿 */</span><br><span class="attr">--primary</span>: <span class="val">#16a34a</span>;<br><span class="comment">/* 换成：优雅紫 💜 */</span><br><span class="attr">--primary</span>: <span class="val">#8b5cf6</span>;<br><span class="comment">// 改一行，标题、按钮、链接、边框全都变色！</span>',
            analogy:
              'CSS变量就像手机的主题模式——切换「深色模式」，整个APP的颜色都变了。你只需要选一个主题，不用一个页面一个页面改！📱',
            tip: '试试把看板换成你喜欢的颜色，截图前后对比发给朋友看，成就感满满！'
          },
          {
            tag: '✍️ 调整字体',
            title: '让数字和标题更醒目',
            explain:
              '看板中的<strong>数字</strong>是最重要的信息，应该更醒目。<br>用 <strong>font-weight: bold</strong> 加粗，<strong>font-size</strong> 调大字号。<br>可以用Google Fonts引入好看的数字字体（如 Roboto）。',
            code: '<span class="val">.kpi-card .number</span> {<br>  <span class="attr">font-size</span>: <span class="val">32px</span>;       <span class="comment">/* 大号数字 */</span><br>  <span class="attr">font-weight</span>: <span class="val">700</span>;     <span class="comment">/* 加粗 */</span><br>  <span class="attr">font-family</span>: <span class="val">"Roboto", sans-serif</span>;<br>  <span class="attr">letter-spacing</span>: <span class="val">-0.5px</span>; <span class="comment">/* 数字紧凑更好看 */</span><br>}<br><span class="val">.kpi-card h3</span> {<br>  <span class="attr">font-size</span>: <span class="val">14px</span>;       <span class="comment">/* 标题小一些 */</span><br>  <span class="attr">color</span>: <span class="val">#64748b</span>;        <span class="comment">/* 浅灰色 */</span><br>  <span class="attr">text-transform</span>: <span class="val">uppercase</span>; <span class="comment">/* 全大写 */</span><br>}',
            analogy:
              '就像报纸排版：标题用粗体大字吸引注意，正文用小字提供细节。看板的数字就是「大标题」，要让看的人第一眼就看到！📰',
            tip: 'letter-spacing 设为负值（如 -0.5px）可以让数字看起来更紧凑专业，很多数据产品都这么做。'
          },
          {
            tag: '📐 调整间距',
            title: '让看板呼吸起来',
            explain:
              '好的间距让数据更<strong>易读</strong>。<br>增加 <strong>padding</strong>（内边距）让卡片内容不那么挤，<br>增加 <strong>gap</strong>（间距）让卡片之间留白。<br>「呼吸感」是专业设计的重要标志！',
            code: '<span class="comment">/* 紧凑型 ❌ */</span><br><span class="val">.kpi-card</span> { <span class="attr">padding</span>: <span class="val">10px</span>; }<br><span class="val">.kpi-cards</span> { <span class="attr">gap</span>: <span class="val">8px</span>; }<br><br><span class="comment">/* 舒适型 ✅ */</span><br><span class="val">.kpi-card</span> { <span class="attr">padding</span>: <span class="val">24px</span>; }<br><span class="val">.kpi-cards</span> { <span class="attr">gap</span>: <span class="val">24px</span>; }<br><br><span class="comment">/* 数字对比一目了然！ */</span>',
            analogy:
              '就像餐厅摆盘：菜和盘子边缘留点空间，看着就高级；塞得满满的，就算菜再好吃也显得廉价。设计也是一样的道理！🍽️',
            tip: '专业设计常用 8 的倍数做间距（8、16、24、32），这是「8pt网格系统」，试试用这个规律调间距！'
          },
          {
            tag: '📊 看板实战',
            title: '个性化你的看板',
            explain:
              '现在动手改造你的看板：<br>1. 换成你喜欢的<strong>主题色</strong> 2. 调整数字<strong>字号和字重</strong><br>3. 增加卡片的<strong>圆角和阴影</strong><br>4. 给表格添加<strong>隔行变色</strong><br>改完刷新浏览器，效果立竿见影！',
            code: '<span class="comment">/* 卡片美化 */</span><br><span class="val">.kpi-card</span> {<br>  <span class="attr">border-radius</span>: <span class="val">16px</span>;     <span class="comment">/* 更圆润的圆角 */</span><br>  <span class="attr">box-shadow</span>: <span class="val">0 2px 8px rgba(0,0,0,0.08)</span>; <span class="comment">/* 轻柔阴影 */</span><br>  <span class="attr">transition</span>: <span class="val">box-shadow 0.3s</span>; <span class="comment">/* 悬停过渡 */</span><br>}<br><span class="val">.kpi-card:hover</span> {<br>  <span class="attr">box-shadow</span>: <span class="val">0 4px 16px rgba(0,0,0,0.12)</span>;<br>  <span class="attr">transform</span>: <span class="val">translateY(-2px)</span>; <span class="comment">/* 微微上浮 */</span><br>}',
            analogy:
              '就像装修房子：换墙纸（主题色）、换家具（字体大小）、调整家具间距（padding）、加灯光效果（阴影）。一步步来，房子越来越温馨！🏡',
            tip: '加 transition 属性让hover效果有平滑过渡动画，不用JS也能做出精美的交互效果！'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: '修改CSS变量后，所有引用该变量的地方会怎样？',
            options: [
              '只有第一个引用的地方会改变',
              '所有引用该变量的地方都会自动更新',
              '需要手动刷新每个页面',
              '会报错'
            ],
            answer: '所有引用该变量的地方都会自动更新',
            explanation: 'CSS变量的核心优势就是「一处定义，处处引用」。修改 :root 中的变量值，所有 var(--xxx) 引用的地方都会自动使用新值。'
          },
          {
            type: '选择题',
            question: '以下哪个CSS属性可以让卡片在鼠标移入时有平滑过渡效果？',
            options: [
              'animation: smooth',
              'transition: box-shadow 0.3s',
              'transform: smooth',
              'hover: 0.3s'
            ],
            answer: 'transition: box-shadow 0.3s',
            explanation: 'transition 属性定义状态变化时的过渡动画。transition: box-shadow 0.3s 表示阴影变化在0.3秒内平滑完成，而不是瞬间跳变。'
          },
          {
            type: '选择题',
            question: '专业设计常用的「8pt网格系统」是什么意思？',
            options: [
              '页面必须分成8个部分',
              '间距、边距等尺寸使用8的倍数（如8、16、24、32）',
              '字体大小必须是8px',
              '网格只能有8列'
            ],
            answer: '间距、边距等尺寸使用8的倍数（如8、16、24、32）',
            explanation: '8pt网格系统是UI设计中常用的间距规范，所有padding、margin、gap等间距值都取8的倍数，保证视觉节奏统一和谐。'
          }
        ]
      },
      // ---- Day 4 ----
      {
        title: 'Day 4：添加互动功能',
        desc: '用JavaScript给看板添加筛选和排序按钮',
        cards: [
          {
            tag: '🔍 筛选功能',
            title: '按机构筛选数据',
            explain:
              '看板中最实用的功能之一就是<strong>筛选</strong>。<br>点击某个机构按钮，表格只显示该机构的数据。<br>核心思路：用JS找到所有行，判断是否符合条件，<strong>不符合的行隐藏</strong>。',
            code: '<span class="tag">function</span> <span class="attr">filterByOrg</span>(<span class="text">orgName</span>) {<br>  <span class="tag">const</span> <span class="text">rows</span> = <span class="text">document</span>.<span class="attr">querySelectorAll</span>(<span class="val">".org-table tbody tr"</span>);<br>  <span class="tag">for</span> (<span class="tag">const</span> <span class="text">row</span> <span class="tag">of</span> <span class="text">rows</span>) {<br>    <span class="tag">if</span> (<span class="text">orgName</span> === <span class="val">"all"</span> || <span class="text">row</span>.<span class="attr">dataset</span>.<span class="attr">org</span> === <span class="text">orgName</span>) {<br>      <span class="text">row</span>.<span class="attr">style</span>.<span class="attr">display</span> = <span class="val">""</span>; <span class="comment">// 显示</span><br>    } <span class="tag">else</span> {<br>      <span class="text">row</span>.<span class="attr">style</span>.<span class="attr">display</span> = <span class="val">"none"</span>; <span class="comment">// 隐藏</span><br>    }<br>  }<br>}<br><span class="comment">// 绑定按钮事件</span><br><span class="text">document</span>.<span class="attr">getElementById</span>(<span class="val">"btn-star"</span>)<br>  .<span class="attr">addEventListener</span>(<span class="val">"click"</span>, () => <span class="attr">filterByOrg</span>(<span class="val">"star"</span>));',
            analogy:
              '就像用漏斗过滤咖啡粉：按钮选了「星辰传媒」，漏斗只让星辰的数据通过，其他机构的数据被「滤」掉了。再选「全部」，漏斗拿掉，所有数据都看得见！☕',
            tip: '把筛选逻辑写成函数，传入不同的参数就能筛选不同机构，代码复用率极高！'
          },
          {
            tag: '📊 排序功能',
            title: '点击表头排序',
            explain:
              '让表头<strong>可点击</strong>，点击后按该列数据<strong>升序或降序</strong>排列。<br>核心思路：拿到所有行，用JS的<strong>sort方法</strong>排序，<br>然后重新<strong>append</strong>到表格中。',
            code: '<span class="tag">function</span> <span class="attr">sortTable</span>(<span class="text">colIndex</span>) {<br>  <span class="tag">const</span> <span class="text">tbody</span> = <span class="text">document</span>.<span class="attr">querySelector</span>(<span class="val">".org-table tbody"</span>);<br>  <span class="tag">const</span> <span class="text">rows</span> = <span class="text">Array</span>.<span class="attr">from</span>(<span class="text">tbody</span>.<span class="attr">querySelectorAll</span>(<span class="val">"tr"</span>));<br>  <span class="text">rows</span>.<span class="attr">sort</span>((<span class="text">a</span>, <span class="text">b</span>) => {<br>    <span class="tag">const</span> <span class="text">aVal</span> = <span class="text">a</span>.<span class="attr">children</span>[<span class="text">colIndex</span>].<span class="attr">textContent</span>;<br>    <span class="tag">const</span> <span class="text">bVal</span> = <span class="text">b</span>.<span class="attr">children</span>[<span class="text">colIndex</span>].<span class="attr">textContent</span>;<br>    <span class="tag">return</span> <span class="text">aVal</span>.<span class="attr">localeCompare</span>(<span class="text">bVal</span>, <span class="val">"zh"</span>);<br>  });<br>  <span class="tag">for</span> (<span class="tag">const</span> <span class="text">row</span> <span class="tag">of</span> <span class="text">rows</span>) {<br>    <span class="text">tbody</span>.<span class="attr">appendChild</span>(<span class="text">row</span>);<br>  }<br>}',
            analogy:
              '就像给扑克牌排序：把所有牌拿在手里（拿到rows），按数字大小排好（sort），再一张张放回去（appendChild）。只不过这次排的是数据行！🃏',
            tip: 'localeCompare(\'zh\') 支持中文排序！如果是数字列，记得先转成数字再比较：parseFloat(aVal) - parseFloat(bVal)。'
          },
          {
            tag: '🔘 按钮激活状态',
            title: '让筛选按钮有选中效果',
            explain:
              '用户点了筛选按钮后，应该<strong>视觉上显示选中状态</strong>。<br>用JS给按钮添加/移除 <strong>class</strong> 来实现。<br>同时取消其他按钮的选中状态，保持互斥。',
            code: '<span class="tag">const</span> <span class="text">buttons</span> = <span class="text">document</span>.<span class="attr">querySelectorAll</span>(<span class="val">".filter-btn"</span>);<br><br><span class="tag">function</span> <span class="attr">setActive</span>(<span class="text">clickedBtn</span>) {<br>  <span class="comment">// 取消所有按钮的激活状态</span><br>  <span class="tag">for</span> (<span class="tag">const</span> <span class="text">btn</span> <span class="tag">of</span> <span class="text">buttons</span>) {<br>    <span class="text">btn</span>.<span class="attr">classList</span>.<span class="attr">remove</span>(<span class="val">"active"</span>);<br>  }<br>  <span class="comment">// 给点击的按钮加激活状态</span><br>  <span class="text">clickedBtn</span>.<span class="attr">classList</span>.<span class="attr">add</span>(<span class="val">"active"</span>);<br>}',
            analogy:
              '就像电梯按钮：你按了3楼，3楼的灯亮了，其他楼层的灯灭了。再按5楼，3楼的灯灭了，5楼的灯亮了。互斥选中！🛗',
            tip: 'classList.add() 和 classList.remove() 是操作CSS类名最常用的方法，比直接改 style 更优雅，因为样式都写在CSS里。'
          },
          {
            tag: '📊 看板实战',
            title: '给你的看板加完整交互',
            explain:
              '综合今天所学，给看板添加完整的交互功能：<br>1. 顶部加<strong>机构筛选按钮</strong> 2. 表格表头<strong>点击可排序</strong><br>3. 筛选按钮有<strong>选中/未选中</strong>的视觉区别<br>4. 加一个<strong>「显示全部」</strong>按钮恢复默认状态<br>这是你8周学习的集大成之作！',
            code: '<span class="comment">// 完整交互流程</span><br><span class="comment">// 1. 用户点击"星辰传媒"按钮</span><br><span class="comment">// 2. 按钮变亮（active class）</span><br><span class="comment">// 3. 表格只显示星辰的数据（filterByOrg）</span><br><span class="comment">// 4. 用户点击"报价"表头</span><br><span class="comment">// 5. 数据按报价从高到低排序（sortTable）</span><br><span class="comment">// 6. 用户点击"显示全部"恢复原状</span><br><span class="comment">// 一气呵成，完全用你学过的DOM操作！✨</span>',
            analogy:
              '这就像组装一台机器：筛选是齿轮A，排序是齿轮B，按钮状态是齿轮C——每个零件你都会做了，现在把它们装在一起，机器就能运转了！⚙️',
            tip: '完成交互后，用F12的Console测试每个功能：手动调用 filterByOrg(\'star\') 看看效果，这是调试的好习惯！'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: 'classList.remove("active") 的作用是什么？',
            options: [
              '删除整个元素',
              '从元素的class列表中移除"active"这个类',
              '把所有class都删除',
              '把active改名为inactive'
            ],
            answer: '从元素的class列表中移除"active"这个类',
            explanation: 'classList.remove() 只移除指定的class，不影响其他class。这是切换元素样式状态的标准做法。'
          },
          {
            type: '选择题',
            question: '给表格排序后，如何把排好序的行重新放入表格？',
            options: [
              '用 innerHTML 替换整个表格',
              '用 tbody.appendChild(row) 逐个重新插入',
              '刷新页面',
              '修改CSS样式'
            ],
            answer: '用 tbody.appendChild(row) 逐个重新插入',
            explanation: 'appendChild会把元素从原来的位置移动到新的位置。对已经排序的rows数组逐个调用appendChild，就实现了行的重新排列，不需要删除再创建。'
          },
          {
            type: '选择题',
            question: '在筛选功能中，`row.style.display = "none"` 和 `row.style.display = ""` 分别做什么？',
            options: [
              '都隐藏元素',
              '都显示元素',
              '隐藏元素 / 恢复默认显示状态',
              '删除元素 / 创建元素'
            ],
            answer: '隐藏元素 / 恢复默认显示状态',
            explanation: 'display: "none" 让元素完全隐藏（不占空间），display: "" 清除内联display属性，让元素恢复CSS中定义的默认显示状态。'
          }
        ]
      },
      // ---- Day 5 ----
      {
        title: 'Day 5：毕业总结与下一步',
        desc: '8周知识回顾，学习路线图，下一步建议',
        cards: [
          {
            tag: '🎓 知识回顾',
            title: '8周学习旅程回顾',
            explain:
              '回顾这8周你学到的所有内容：<br><strong>第1-2周</strong>：HTML基础——网页的骨架<br><strong>第3-4周</strong>：CSS基础——网页的外衣<br><strong>第5-6周</strong>：JavaScript基础——网页的大脑<br><strong>第7周</strong>：DOM操作——让网页活起来<br><strong>第8周</strong>：综合项目——做出真正的看板<br>你已经从零基础变成了能独立做看板的开发者！',
            code: '<span class="comment">// 🎉 你掌握的核心技能</span><br><span class="comment">// ✅ HTML: 语义化标签、表格、表单</span><br><span class="comment">// ✅ CSS: 选择器、Flexbox、Grid、动画</span><br><span class="comment">// ✅ JS:   变量、函数、数组、循环、条件</span><br><span class="comment">// ✅ DOM:  查找元素、修改内容、事件处理</span><br><span class="comment">// ✅ 实战: 独立完成达人刊例看板项目</span><br><span class="comment">//</span><br><span class="comment">// 这已经超越了90%的纯业务运营同学！</span>',
            analogy:
              '8周前你连HTML是什么都不知道，现在已经能做出数据看板了！这就像8周前不会做饭，现在已经能做一桌四菜一汤了！🎉',
            tip: '把8周做的所有项目截图整理成一个作品集，这在求职或内部分享时都是极好的展示材料！'
          },
          {
            tag: '🗺️ 学习路线图',
            title: '下一步可以学什么',
            explain:
              '你已经打下了坚实的基础，接下来有更多有趣的路线可以选择：<br><strong>路线A</strong>：深入学习JavaScript（ES6+、异步、API调用）<br><strong>路线B</strong>：学习React/Vue框架，做更复杂的应用<br><strong>路线C</strong>：学习Python+数据分析，做自动化报表<br>三条路线都能让你的看板能力升级！',
            code: '<span class="comment">// 🗺️ 推荐学习路线</span><br><span class="comment">//</span><br><span class="comment">// 路线A：JS进阶（2-4周）</span><br><span class="comment">// → fetch API 调用数据接口</span><br><span class="comment">// → async/await 异步编程</span><br><span class="comment">// → localStorage 本地数据持久化</span><br><span class="comment">//</span><br><span class="comment">// 路线B：前端框架（4-8周）</span><br><span class="comment">// → React 或 Vue 入门</span><br><span class="comment">// → 组件化开发思维</span><br><span class="comment">// → 状态管理</span><br><span class="comment">//</span><br><span class="comment">// 路线C：数据自动化（4-6周）</span><br><span class="comment">// → Python 基础</span><br><span class="comment">// → pandas 数据处理</span><br><span class="comment">// → 自动生成Excel/看板</span>',
            analogy:
              '现在你学会了骑自行车（HTML/CSS/JS），接下来可以选择：骑山地车去更远的地方（JS进阶）、开小汽车（前端框架）、甚至坐火车（Python自动化）——方向由你选！🚲',
            tip: '建议先走路线A（JS进阶），因为它和你现在的工作最直接相关——学会调用API，你的看板数据就可以自动更新了！'
          },
          {
            tag: '🚀 实战建议',
            title: '把看板能力用到实际工作中',
            explain:
              '你已经有能力做出实用的工具了：<br><strong>自动化报表</strong>：用JS读取Excel数据，自动生成看板<br><strong>投放分析</strong>：把投放数据可视化，一眼看出哪些内容效果好<br><strong>内容排期表</strong>：用HTML+CSS做一个可视化的内容日历<br>工具的价值在于解决实际问题，你已经具备了起步的能力！',
            code: '<span class="comment">// 💡 你可以马上开始做的实战项目</span><br><span class="comment">//</span><br><span class="comment">// 1. 达人刊例看板（已完成 ✅）</span><br><span class="comment">//    → 下一步：接入真实数据源</span><br><span class="comment">//</span><br><span class="comment">// 2. 投放数据可视化（建议 ⭐）</span><br><span class="comment">//    → 把疏肝益阳胶囊的投放数据做成图表</span><br><span class="comment">//    → 用不同颜色区分不同平台的ROI</span><br><span class="comment">//</span><br><span class="comment">// 3. 内容选题库（实用 ⭐⭐）</span><br><span class="comment">//    → 表格展示所有选题，支持筛选/排序</span><br><span class="comment">//    → 加"已完成"按钮更新状态</span><br><span class="comment">//</span><br><span class="comment">// 4. 日报/周报生成器（进阶 ⭐⭐⭐）</span><br><span class="comment">//    → 输入数据，自动生成格式化的报告HTML</span><br><span class="comment">//    → 一键复制发给领导</span>',
            analogy:
              '就像学完驾照后，你可以选择：开通勤车上下班、开货车做生意、开房车去旅行——车是一样的车，但用途由你决定！🚗',
            tip: '从小处开始：把你工作中最重复、最耗时的一个手动操作，试着用代码自动化。哪怕只省5分钟，也是你的第一个实用工具！'
          },
          {
            tag: '🌟 毕业寄语',
            title: '小克给你的毕业祝福',
            explain:
              '亲爱的同学，<strong>恭喜你完成了8周的学习之旅！</strong><br>从零基础到能独立做出数据看板，这份坚持值得为自己鼓掌。<br>记住：<strong>编程不是天才的专利，是每一个愿意动手练习的人的技能。</strong><br>你已经证明了这一点，继续加油，未来无限可能！',
            code: '<span class="comment">// 🌟 小克的毕业寄语</span><br><span class="comment">//</span><br><span class="comment">// "学代码最好的时间是8周前，</span><br><span class="comment">//  第二好的时间，就是今天。"</span><br><span class="comment">//</span><br><span class="comment">// 你已经勇敢地开始了，</span><br><span class="comment">// 每一个bug都是成长的机会，</span><br><span class="comment">// 每一次"跑通了"都是满满的成就感。</span><br><span class="comment">//</span><br><span class="comment">// 保持好奇，保持动手，</span><br><span class="comment">// 未来的你，一定会感谢</span><br><span class="comment">// 今天打开这份代码学习系统的自己！</span><br><span class="comment">//</span><br><span class="comment">// 🎓 毕业快乐！</span>',
            analogy:
              '这8周就像种了一棵小树：每天浇一点水（学一点知识），每周施一次肥（做一个练习），现在小树已经长出了枝丫（能做出看板了）。继续浇水，它一定会枝繁叶茂！🌳',
            tip: '遇到卡壳的地方不要急，停下来喝杯水，回来再看。每一个程序员都经历过「怎么都跑不通」的时刻，这是成长的一部分！'
          }
        ],
        quiz: [
          {
            type: '选择题',
            question: '完成这8周学习后，最直接有用的下一步是什么？',
            options: [
              '重新从第1周开始学一遍',
              '学习fetch API调用真实数据，让看板数据自动更新',
              '放弃前端直接学AI模型训练',
              '只看教程不动手'
            ],
            answer: '学习fetch API调用真实数据，让看板数据自动更新',
            explanation: '学会调用API获取真实数据后，看板就不再是静态演示，而是真正的数据工具。这是从学习走向实战的关键一步。'
          },
          {
            type: '选择题',
            question: '遇到代码跑不通时，最好的做法是什么？',
            options: [
              '立刻放弃，说明自己不适合编程',
              '不看报错信息，随便改代码试试',
              '仔细阅读报错信息，用console.log逐步排查',
              '找别人帮忙写'
            ],
            answer: '仔细阅读报错信息，用console.log逐步排查',
            explanation: '读报错信息 + console.log 排查是程序员最基本的调试技能。每个报错都是线索，耐心追踪就能找到问题所在。这是8周学习中最有价值的软技能！'
          },
          {
            type: '选择题',
            question: '以下哪个建议最能帮助初学者从学习走向实战？',
            options: [
              '把学过的所有知识重新学一遍',
              '从工作中最重复、最耗时的手动操作开始，尝试用代码自动化',
              '等完全学透所有知识再动手',
              '只做练习项目，不做实际工具'
            ],
            answer: '从工作中最重复、最耗时的手动操作开始，尝试用代码自动化',
            explanation: '实战的最佳起点是解决自己真实遇到的问题。哪怕只省5分钟的小工具，也能带来成就感，并激励你继续学习和改进。'
          }
        ]
      }
    ]
  }
];
