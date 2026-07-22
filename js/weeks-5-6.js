const WEEKS_5_6 = [
  // =====================
  // Week 5: JavaScript入门（上）—— 变量和数据
  // =====================
  {
    topic: "JavaScript入门（上）",
    subtitle: "变量和数据——让程序「记住」信息",

    intro: "欢迎来到JavaScript的世界！前四周你学了HTML和CSS，就像搭好了一间漂亮的房子。现在JavaScript来了——它是房子里的电灯和水管，让房子真正「活」起来。这一周我们学JS最基本的能力：存数据、用数据。",

    days: [
      // ---- Day 1: 什么是JavaScript？ ----
      {
        title: "Day 1：什么是JavaScript？",
        desc: "了解JS让网页动起来的能力，在浏览器控制台试代码",
        cards: [
          {
            tag: "⚡ JS基础",
            title: "JavaScript是什么？",
            explain:
              "JavaScript（简称JS）是一门<strong>编程语言</strong>，专门让网页变得「聪明」。<br>HTML是骨架，CSS是衣服，<strong>JS就是大脑</strong>——它能思考、能记住东西、能做决定。<br>你每天刷的抖音网页版、淘宝购物车、微信网页版，背后都是JS在干活。",

            code: "<span class=\「comment\」>// JS让网页能做三件事：</span><br><span class=\「comment\」>// 1. 记住数据（比如你的购物车）</span><br><span class=\「comment\」>// 2. 响应用户（比如点击按钮）</span><br><span class=\「comment\」>// 3. 动态更新（比如倒计时）</span>",

            analogy: "想象一个奶茶店：HTML是菜单板（展示内容），CSS是装修（好看），JS就是店员——能记住你要什么、给你算价格、还能跟你说「第二杯半价」。",

            tip: "JS的「Java」和Java语言没有半毛钱关系，就像「老婆饼」里没有老婆一样～"

          },
          {
            tag: "💻 实操",
            title: "打开浏览器控制台",
            explain:
              "你的浏览器里藏着一个<strong>JS游乐场</strong>，叫「开发者工具」。<br>按 <strong>F12</strong> 或右键点击「检查」，切换到 <strong>Console（控制台）</strong> 标签。<br>这里可以直接写JS代码并立刻看到结果，是学习JS最好的地方！",

            code: "<span class=\「comment\」>// 在控制台输入：</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「Hello, 小克！\」</span>);<br><span class=\「comment\」>// 你会看到输出：Hello, 小克！</span>",

            analogy: "控制台就像一个计算器——你输入算式，它给你答案。只不过JS计算器不仅能算数学，还能处理文字、做判断、甚至玩游戏。",
            tip: "按上箭头键可以快速找回上一条命令，不用重新打字哦！"
          },
          {
            tag: "🎯 核心命令",
            title: "console.log —— 你的第一个JS命令",
            explain:
              "<strong>console.log</strong> 是JS里最常用的命令，用来「打印」信息。<br>它就像你在本子上写笔记——把想看到的结果输出到控制台。<br>你可以打印<strong>文字</strong>、<strong>数字</strong>、甚至<strong>计算结果</strong>。",

            code:
              "<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「欢迎来到JS世界\」</span>);<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>100</span> + <span class=\「val\」>50</span>);<br><span class=\「comment\」>// 输出：150</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>3</span> * <span class=\「val\」>8</span>);<br><span class=\「comment\」>// 输出：24</span>",

            analogy: "就像你让同事帮忙「记一下」某个数据，console.log就是JS的记事本，帮你把结果「写」在控制台上，方便你查看。",

            tip: "console.log后面必须加括号 ()，就像打电话必须拨号一样——不能只写console.log就完事。"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "在网页开发中，JavaScript的角色是什么？",
            options: [
              "A. 网页的骨架结构",
              "B. 网页的大脑，让网页能思考和互动",
              "C. 网页的美容师，让网页好看"
            ],
            answer: "B. 网页的大脑，让网页能思考和互动",
            explanation: "HTML是骨架（结构），CSS是美容师（样式），JS才是大脑（逻辑和互动）。记住这个三角色组合，以后就不会搞混啦！"
          },
          {
            type: "填空题",
            question: "在浏览器控制台中，用来输出信息的命令是 ______",
            options: ["A. print()", "B. console.log()", "C. output()"],
            answer: "B. console.log()",
            explanation: "console.log() 是JS最基础的输出命令。注意不要写成 print（那是Python的写法）或 output。"
          },
          {
            type: "选择题",
            question: "在浏览器中打开开发者工具控制台的快捷键是？",
            options: [
              "A. Ctrl + C",
              "B. F12",
              "C. Ctrl + S"
            ],
            answer: "B. F12",
            explanation: "F12 是打开浏览器开发者工具的通用快捷键。你也可以在网页上右键点击，选择「检查」来打开。控制台是你学习和调试JS代码最重要的工具！"
          }
        ]
      },
      // ---- Day 2: 变量和数据类型 ----
      {
        title: "Day 2：变量和数据类型",
        desc: "学会用let和const存数据，认识字符串、数字、布尔值",
        cards: [
          {
            tag: "📦 变量",
            title: "什么是变量？用let和const声明",
            explain:
              "变量就是一个<strong>贴了标签的盒子</strong>，里面可以装东西。<br>用 <strong>let</strong> 声明的变量以后可以换内容，用 <strong>const</strong> 声明的就固定不能变了。<br>声明变量的语法：<strong>let 名字 = 值</strong>。",
            code:
              "<span class=\「comment\」>// let = 可以改的盒子</span><br><span class=\「tag\」>let</span> <span class=\「text\」>name</span> = <span class=\「val\」>\「小克\」</span>;<br><span class=\「text\」>name</span> = <span class=\「val\」>\「小西瓜\」</span>; <span class=\「comment\」>// ✅ 可以改</span><br><br><span class=\「comment\」>// const = 不能改的盒子</span><br><span class=\「tag\」>const</span> <span class=\「text\」>age</span> = <span class=\「val\」>25</span>;<br><span class=\「text\」>age</span> = <span class=\「val\」>26</span>; <span class=\「comment\」>// ❌ 报错！const不能改</span>",

            analogy: "let就像一个便利贴盒子——你可以把盒子里的东西换掉，重新贴标签；const就像一个密封罐——装好就封死了，再也打不开。比如你的生日，就适合用const存，因为它不会变。",
            tip: "一般原则：如果这个值以后不会变，就用const；可能变就用let。能用const就用const，这是好习惯！"
          },
          {
            tag: "🔤 字符串",
            title: "字符串（String）——文字数据",
            explain:
              "字符串就是<strong>用引号包起来的文字</strong>，可以是中文、英文、数字都行。<br>单引号 <strong>' '</strong> 或双引号 <strong>\「 \」</strong> 都可以，但要配对使用。<br>字符串在JS里叫 <strong>string</strong>。",

            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>greeting</span> = <span class=\「val\」>\「你好，世界！\」</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>product</span> = <span class=\「val\」>'疏肝益阳胶囊'</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>emoji</span> = <span class=\「val\」>\「🍉\」</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>greeting</span>); <span class=\「comment\」>// 你好，世界！</span>",

            analogy: "字符串就像一条项链上的珠子——引号是项链两头的扣子，中间的文字就是珠子。不管多少个字，只要被引号包起来，JS就知道「这是一串文字」。",

            tip: "数字放在引号里就是字符串：\「100\」是文字，100是数字。JS会区别对待它们！"

          },
          {
            tag: "🔢 数字",
            title: "数字（Number）——数值数据",
            explain:
              "数字类型就是<strong>不用引号的纯数字</strong>，整数和小数都行。<br>数字可以做数学运算：加减乘除、取余数。<br>在JS里，整数和小数都叫 <strong>number</strong>，不像其他语言分那么细。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>price</span> = <span class=\「val\」>99.9</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>quantity</span> = <span class=\「val\」>3</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>total</span> = <span class=\「text\」>price</span> * <span class=\「text\」>quantity</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>total</span>); <span class=\「comment\」>// 299.7</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>10</span> % <span class=\「val\」>3</span>); <span class=\「comment\」>// 1（取余数）</span>",

            analogy: "数字就像计算器上的数字——可以直接做运算。比如你算达人刊例的总价：单价×数量=总价，这就是数字类型的典型用法。",
            tip: "小数运算有时会有精度问题（比如 0.1 + 0.2 = 0.30000000000000004），这是正常的，后面会学到怎么处理。"
          },
          {
            tag: "✅ 布尔值",
            title: "布尔值（Boolean）——是或不是",
            explain:
              "布尔值只有两个可能：<strong>true（是/真）</strong> 或 <strong>false（不是/假）</strong>。<br>注意：true和false<strong>不用引号</strong>，它们是JS的关键词。<br>布尔值通常用来做判断——「满足条件吗？」答：是或不是。",

            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>isVip</span> = <span class=\「val\」>true</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>hasPaid</span> = <span class=\「val\」>false</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>isAdult</span> = <span class=\「val\」>25</span> >= <span class=\「val\」>18</span>; <span class=\「comment\」>// true</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>isVip</span>); <span class=\「comment\」>// true</span>",

            analogy: "布尔值就像电灯开关——只有两个状态：开（true）和关（false）。比如判断「这个达人签约了吗？」答案只有「签了」或「没签」，这就是布尔值。",

            tip: "true/false千万不要加引号！\「true\」是字符串，true才是布尔值。就像「1」是文字1，1才是数字。"

          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "以下哪个声明的变量之后可以被修改？",
            options: [
              "A. const name = \「小克\」;",

              "B. let name = \「小克\」;",

              "C. var name = \「小克\」;"

            ],
            answer: "B. let name = \「小克\」;",

            explanation: "let声明的变量可以重新赋值，const声明的不能。var也能修改但它是老写法，现在不推荐用了。记住：优先用const，需要改时用let。"
          },
          {
            type: "选择题",
            question: "typeof \「42\」 的结果是什么？",

            options: [
              "A. \「number\」",

              "B. \「string\」",

              "C. \「boolean\」"

            ],
            answer: "B. \「string\」",

            explanation: "因为42被引号包起来了，JS认为它是文字（字符串），不是数字。typeof是一个命令，用来查看数据的类型。"
          },
          {
            type: "选择题",
            question: "let isActive = true; typeof isActive 的结果是？",
            options: [
              "A. \"string\"",
              "B. \"number\"",
              "C. \"boolean\""
            ],
            answer: "C. \"boolean\"",
            explanation: "true 是布尔值类型，所以 typeof 返回 \"boolean\"。记住：true/false 不加引号才是布尔值，加引号就变成字符串了。"
          }
        ]
      },
      // ---- Day 3: 字符串操作 ----
      {
        title: "Day 3：字符串操作",
        desc: "学会拼接字符串、模板字符串和常用方法",
        cards: [
          {
            tag: "🔗 拼接",
            title: "字符串拼接（+号连接）",
            explain:
              "在JS中，<strong>+</strong> 号遇到字符串时会变成<strong>连接符</strong>。<br>你可以用 + 把多个字符串拼在一起，也可以把字符串和数字拼起来。<br>数字遇到字符串会被<strong>自动转成文字</strong>。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>brand</span> = <span class=\「val\」>\「达人刊例\」</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>version</span> = <span class=\「val\」>3</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>title</span> = <span class=\「text\」>brand</span> + <span class=\「val\」>\「 v\」</span> + <span class=\「text\」>version</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>title</span>); <span class=\「comment\」>// 达人刊例 v3</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「10\」</span> + <span class=\「val\」>20\「</span>); <span class=\」comment\「>// \」1020\「（文字拼接）</span>",

            analogy: "字符串拼接就像穿糖葫芦——+号是竹签，把一颗颗山楂（字符串）串在一起。注意：\「10\」 + \「20\」 不是 30，而是 \「1020\」，因为是文字拼接不是数字相加。",

            tip: "注意看最后一个例子：\「10\」 + 20 结果是 \「1020\」 而不是 30。引号一出现，+号就变连接符了！"

          },
          {
            tag: "✨ 模板字符串",
            title: "模板字符串（`` 反引号）",
            explain:
              "模板字符串用<strong>反引号</strong>（键盘左上角~那个键）代替引号。<br>里面可以用 <strong>${变量}</strong> 直接嵌入变量，不用写一堆 + 号。<br>还能写<strong>多行文字</strong>，换行不会被截断。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>name</span> = <span class=\「val\」>\「小克\」</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>role</span> = <span class=\「val\」>\「运营\」</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>intro</span> = <span class=\「val\」>`我叫${<span class=\「text\」>name</span>}，岗位是${<span class=\「text\」>role</span>}`</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>intro</span>);<br><span class=\「comment\」>// 我叫小克，岗位是运营</span>",

            analogy: "模板字符串就像填表格——${}就是填空的位置，JS会自动把变量值填进去。比用+号拼接方便多了，就像填空题比写作文简单。",
            tip: "反引号不是单引号！它在键盘Esc键下面，数字1的左边。找不到可以看看键盘。"
          },
          {
            tag: "📏 常用方法",
            title: "字符串的length和常用方法",
            explain:
              "字符串自带很多实用<strong>方法</strong>，用来操作和处理文字。<br><strong>.length</strong> 获取文字长度，<strong>.toUpperCase()</strong> 转大写，<strong>.includes()</strong> 检查是否包含某段文字。<br>用法：<strong>变量名.方法()</strong>，像点菜一样。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>slogan</span> = <span class=\「val\」>\「药食同源\」</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>slogan</span>.<span class=\「text\」>length</span>); <span class=\「comment\」>// 4（4个字）</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>slogan</span>.<span class=\「text\」>includes</span>(<span class=\「val\」>\「同源\」</span>)); <span class=\「comment\」>// true</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>slogan</span>.<span class=\「text\」>includes</span>(<span class=\「val\」>\「美食\」</span>)); <span class=\「comment\」>// false</span>",

            analogy: "字符串的方法就像多功能瑞士军刀——.length是尺子（量长度），.includes()是放大镜（找关键词），.toUpperCase()是加粗笔（转大写）。每个工具解决一个具体问题。",
            tip: "中文每个汉字算1个长度，emoji算2个（因为它是2个Unicode字符）。不过日常够用就行～"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "let a = \「你好\」; let b = \「世界\」; a + b 的结果是？",

            options: [
              "A. \「你好世界\」",

              "B. \「你好 世界\」",

              "C. 报错"
            ],
            answer: "A. \「你好世界\」",

            explanation: "+号连接两个字符串会直接拼起来，中间不会自动加空格。如果要加空格，需要自己写：a + \「 \」 + b。"

          },
          {
            type: "选择题",
            question: "\「hello\」.includes(\「ell\」) 的结果是？",

            options: [
              "A. true",
              "B. false",
              "C. \「ell\」"

            ],
            answer: "A. true",
            explanation: "includes()方法检查字符串中是否包含指定的子串。\「hello\」中确实包含\「ell\」，所以返回true。这个方法在搜索功能中很常用！"

          },
          {
            type: "找错题",
            question: "以下代码中哪一行有错误？",
            options: [
              "A. let intro = `我叫${name}`;",
              "B. console.log(\"hello\");",
              "C. let s = 'hello;"
            ],
            answer: "C. let s = 'hello;",
            explanation: "字符串的引号必须配对闭合。let s = 'hello; 只有开头的单引号，结尾缺少对应的单引号，会导致语法错误。正确的写法是 let s = 'hello';"
          }
        ]
      },
      // ---- Day 4: 数字和运算 ----
      {
        title: "Day 4：数字和运算",
        desc: "加减乘除、比较运算符和逻辑运算符",
        cards: [
          {
            tag: "🧮 算术运算",
            title: "加减乘除取余",
            explain:
              "JS支持基本的<strong>数学运算</strong>：+加、-减、*乘、/除、%取余。<br>取余运算 <strong>%</strong> 返回除法的余数，比如 10 % 3 = 1。<br>JS还支持 <strong>**</strong> 幂运算，比如 2 ** 3 = 8。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>price</span> = <span class=\「val\」>100</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>discount</span> = <span class=\「val\」>0.8</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>final</span> = <span class=\「text\」>price</span> * <span class=\「text\」>discount</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>final</span>); <span class=\「comment\」>// 80（打8折）</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>17</span> % <span class=\「val\」>5</span>); <span class=\「comment\」>// 2（17除以5余2）</span>",

            analogy: "算术运算就像你用Excel算账：单价×折扣=实付，完全一样。取余运算就像分糖果——17个糖分给5个人，每人3个，还剩2个，这2个就是余数。",
            tip: "除法是 / 不是 ÷，乘法是 * 不是 ×。这是所有编程语言的统一写法。"
          },
          {
            tag: "⚖️ 比较运算",
            title: "比较运算符：> < === !==",
            explain:
              "比较运算符用来<strong>比较两个值</strong>，返回 true 或 false。<br><strong>===</strong> 是「严格等于」（值和类型都要相同），推荐用它代替 ==。<br>>大于、<小于、>=大于等于、<=小于等于、!==不等于。",

            code:
              "<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>5</span> > <span class=\「val\」>3</span>); <span class=\「comment\」>// true</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「5\」</span> === <span class=\「val\」>5</span>); <span class=\「comment\」>// false（类型不同）</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>5</span> === <span class=\「val\」>5</span>); <span class=\「comment\」>// true（值和类型都相同）</span><br><span class=\「tag\」>let</span> <span class=\「text\」>score</span> = <span class=\「val\」>85</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>score</span> >= <span class=\「val\」>60</span>); <span class=\「comment\」>// true（及格了）</span>",

            analogy: "比较运算就像你检查KPI达标没有：销售额>=目标？达标就是true，没达标就是false。===之所以严格，是因为它还会检查「单位」对不对——100元和\「100元\」虽然意思一样，但一个是数字一个是文字。",

            tip: "永远用 === 而不是 == 。== 会偷偷帮你转换类型，容易产生奇怪的结果。===才是老实人，一是一二是二。"
          },
          {
            tag: "🔀 逻辑运算",
            title: "逻辑运算符：&& || !",
            explain:
              "<strong>&&</strong>（且/and）：两边都true才返回true。<br><strong>||</strong>（或/or）：只要一边true就返回true。<br><strong>!</strong>（非/not）：把true变false，false变true，就是「取反」。",

            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>hasBudget</span> = <span class=\「val\」>true</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>hasTime</span> = <span class=\「val\」>false</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>hasBudget</span> && <span class=\「text\」>hasTime</span>); <span class=\「comment\」>// false（缺一不可）</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>hasBudget</span> || <span class=\「text\」>hasTime</span>); <span class=\「comment\」>// true（有预算就行）</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(!<span class=\「text\」>hasTime</span>); <span class=\「comment\」>// true（「没时间」取反=有时间）</span>",

            analogy: "&&就像去旅行要同时满足「有钱」+「有假期」，缺一不可；||就像「打车去」或「地铁去」都行，有一个方案就OK；!就像开关——按一下就反转状态。",

            tip: "逻辑运算符的优先级：!最高，&&其次，||最低。不确定就加括号，括号永远最优先。"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "5 === \「5\」 的结果是？",

            options: [
              "A. true",
              "B. false",
              "C. 报错"
            ],
            answer: "B. false",
            explanation: "===是严格等于，不仅比较值还比较类型。5是数字，\「5\」是字符串，类型不同所以是false。如果用==（不严格），结果会是true，因为JS会偷偷转换类型。"

          },
          {
            type: "选择题",
            question: "true && false || true 的结果是？",
            options: [
              "A. true",
              "B. false",
              "C. undefined"
            ],
            answer: "A. true",
            explanation: "&&优先级高于||，所以先算 true && false = false，再算 false || true = true。理解优先级很重要，不确定的时候加括号最安全。"
          },
          {
            type: "选择题",
            question: "17 % 5 的结果是？",
            options: [
              "A. 3.4",
              "B. 2",
              "C. 3"
            ],
            answer: "B. 2",
            explanation: "%是取余运算，返回除法的余数。17除以5等于3余2，所以17 % 5 = 2。注意取余返回的是余数（2），不是商（3.4）。这个运算在判断奇偶数、循环分组等场景很常用。"
          }
        ]
      },
      // ---- Day 5: 数组基础 ----
      {
        title: "Day 5：数组基础",
        desc: "学会创建数组、存取元素、常用方法和遍历",
        cards: [
          {
            tag: "📋 数组",
            title: "创建数组和存取元素",
            explain:
              "数组就是一个<strong>有序的列表</strong>，用方括号 <strong>[]</strong> 包裹。<br>每个元素有一个<strong>编号（索引）</strong>，从 <strong>0</strong> 开始数。<br>用 <strong>数组[编号]</strong> 来取值，比如 arr[0] 取第一个。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>fruits</span> = [<span class=\「val\」>\「西瓜\」</span>, <span class=\「val\」>\「芒果\」</span>, <span class=\「val\」>\「葡萄\」</span>];<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>fruits</span>[<span class=\「val\」>0</span>]); <span class=\「comment\」>// \「西瓜\」（第一个）</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>fruits</span>[<span class=\「val\」>2</span>]); <span class=\「comment\」>// \「葡萄\」（第三个）</span><br><span class=\「text\」>fruits</span>[<span class=\「val\」>1</span>] = <span class=\「val\」>\「草莓\」</span>; <span class=\「comment\」>// 修改第二个元素</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>fruits</span>); <span class=\「comment\」>// [\「西瓜\」, \「草莓\」, \「葡萄\」]</span>",

            analogy: "数组就像一排储物柜，每个柜子有编号。但编号从0开始，不是从1！fruits[0]是第一个柜子，fruits[1]是第二个。就像电梯里的楼层按钮，B1是第一层但不是1楼。",
            tip: "数组索引从0开始是编程的「潜规则」，一开始不习惯很正常，多练几天就自然了。"

          },
          {
            tag: "➕ push/pop",
            title: "添加和删除元素",
            explain:
              "<strong>push()</strong> 在数组<strong>末尾添加</strong>一个元素。<br><strong>pop()</strong> 从数组<strong>末尾删除</strong>一个元素并返回它。<br>这两个方法最常用，就像排队——push是排到队尾，pop是最后一个人离开。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>tasks</span> = [<span class=\「val\」>\「写文案\」</span>, <span class=\「val\」>\「做数据\」</span>];<br><span class=\「text\」>tasks</span>.<span class=\「text\」>push</span>(<span class=\「val\」>\「开会\」</span>);<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>tasks</span>); <span class=\「comment\」>// [\「写文案\」, \「做数据\」, \「开会\」]</span><br><br><span class=\「tag\」>let</span> <span class=\「text\」>done</span> = <span class=\「text\」>tasks</span>.<span class=\「text\」>pop</span>();<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>done</span>); <span class=\「comment\」>// \「开会\」（被删除的）</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>tasks</span>); <span class=\「comment\」>// [\「写文案\」, \「做数据\」]</span>",

            analogy: "push就像往一摞文件最上面放一份新的，pop就像把最上面那份拿掉。这叫「后进先出」，最后放上去的最先被拿走。",

            tip: "push可以一次加多个：tasks.push(\「开会\」, \「写报告\」)，会依次加到末尾。pop一次只能删一个。"

          },
          {
            tag: "🔄 遍历",
            title: "遍历数组——逐个处理元素",
            explain:
              "遍历就是<strong>把数组里每个元素都过一遍</strong>。<br>最简单的方法是用 <strong>for...of</strong> 循环，每次拿到一个元素。<br>也可以用<strong>索引</strong>配合 for 循环来遍历。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>products</span> = [<span class=\「val\」>\「胶囊A\」</span>, <span class=\「val\」>\「口服液B\」</span>, <span class=\「val\」>\「颗粒C\」</span>];<br><br><span class=\「comment\」>// 方法1：for...of（推荐）</span><br><span class=\「tag\」>for</span> (<span class=\「tag\」>let</span> <span class=\「text\」>p</span> <span class=\「tag\」>of</span> <span class=\「text\」>products</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>`产品：${<span class=\「text\」>p</span>}`</span>);<br>}<br><br><span class=\「comment\」>// 方法2：用索引</span><br><span class=\「tag\」>for</span> (<span class=\「tag\」>let</span> <span class=\「text\」>i</span> = <span class=\「val\」>0</span>; <span class=\「text\」>i</span> < <span class=\「text\」>products</span>.<span class=\「text\」>length</span>; <span class=\「text\」>i</span>++) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>products</span>[<span class=\「text\」>i</span>]);<br>}",

            analogy: "遍历就像点名——老师拿着花名册，一个一个名字念下去。for...of就是直接念名字，for(i)就是「第1号、第2号……」这样按编号点名。",

            tip: "初学者推荐用 for...of，写起来更简单。for(i)的写法后面学循环时会详细讲。"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "let arr = [\「a\」, \「b\」, \「c\」]; arr[1] 的值是？",

            options: [
              "A. \「a\」",

              "B. \「b\」",

              "C. \「c\」"

            ],
            answer: "B. \「b\」",

            explanation: "数组索引从0开始，所以arr[0]是\「a\」，arr[1]是\「b\」，arr[2]是\「c\」。这是最容易出错的地方，牢记索引从0数起！"

          },
          {
            type: "选择题",
            question: "let arr = [1, 2]; arr.push(3); arr.pop(); arr.length 是？",
            options: [
              "A. 2",
              "B. 3",
              "C. 1"
            ],
            answer: "A. 2",
            explanation: "先push(3)后数组变成[1,2,3]，再pop()删除最后一个变成[1,2]，所以长度是2。push和pop是一对好搭档，一个加一个删。"
          },
          {
            type: "选择题",
            question: "let arr = [10, 20]; arr.push(30) 的返回值是？",
            options: [
              "A. [10, 20, 30]",
              "B. 3",
              "C. 30"
            ],
            answer: "B. 3",
            explanation: "push方法返回的是添加元素后数组的新长度，不是被添加的元素，也不是数组本身。[10,20].push(30)后数组长度变为3，所以返回3。记住push改变原数组，同时返回新长度。"
          }
        ]
      }
    ]
  },

  // =====================
  // Week 6: JavaScript入门（下）—— 逻辑和对象
  // =====================
  {
    topic: "JavaScript入门（下）",
    subtitle: "逻辑和对象——让程序会思考、能组织",
    intro: "上周学会了存数据，这周来学让程序「思考」和「组织数据」的能力！条件判断让程序会做选择，循环让程序能批量处理，函数让代码可复用，对象让数据有条理。最后一天的综合练习，把JS和HTML/CSS连起来，做一个真正的交互效果。",

    days: [
      // ---- Day 1: if条件判断 ----
      {
        title: "Day 1：if条件判断",
        desc: "学会让程序做决定：if/else和条件表达式",
        cards: [
          {
            tag: "🔀 条件判断",
            title: "if/else —— 如果……就……",
            explain:
              "if语句让程序<strong>根据不同条件做不同事情</strong>。<br>语法：<strong>if (条件) { ... } else { ... }</strong><br>条件为true时执行if里的代码，为false时执行else里的代码。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>score</span> = <span class=\「val\」>85</span>;<br><br><span class=\「tag\」>if</span> (<span class=\「text\」>score</span> >= <span class=\「val\」>90</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「优秀！🌟\」</span>);<br>} <span class=\「tag\」>else if</span> (<span class=\「text\」>score</span> >= <span class=\「val\」>60</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「及格了 👍\」</span>);<br>} <span class=\「tag\」>else</span> {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「加油哦 💪\」</span>);<br>}<br><span class=\「comment\」>// 输出：及格了 👍</span>",

            analogy: "if判断就像你做决策：\「如果今天下雨，就带伞；如果不下雨但太阳大，就带帽子；否则就空手出门。\」程序也是这样一步一步判断的。else if就是「再想想另一个可能」。",

            tip: "条件必须写在圆括号()里，执行的代码必须写在花括号{}里。花括号就像房间的门——进了门才能执行里面的内容。"
          },
          {
            tag: "📝 条件表达式",
            title: "三元运算符 —— 简短版if/else",
            explain:
              "三元运算符是if/else的<strong>简化写法</strong>，适合简单的二选一。<br>格式：<strong>条件 ? 真时的值 : 假时的值</strong><br>问号前面是条件，冒号两边分别是true和false的结果。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>age</span> = <span class=\「val\」>20</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>status</span> = <span class=\「text\」>age</span> >= <span class=\「val\」>18</span> ? <span class=\「val\」>\「成年\」</span> : <span class=\「val\」>\「未成年\」</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>status</span>); <span class=\「comment\」>// \「成年\」</span><br><br><span class=\「comment\」>// 等同于：</span><br><span class=\「tag\」>let</span> <span class=\「text\」>status2</span>;<br><span class=\「tag\」>if</span> (<span class=\「text\」>age</span> >= <span class=\「val\」>18</span>) { <span class=\「text\」>status2</span> = <span class=\「val\」>\「成年\」</span>; }<br><span class=\「tag\」>else</span> { <span class=\「text\」>status2</span> = <span class=\「val\」>\「未成年\」</span>; }",

            analogy: "三元运算符就像路口的指示牌：\「向左还是向右？\」——条件决定走哪条路。它适合简单的「选A还是选B」，复杂的情况还是用if/else更清楚。",

            tip: "三元运算符只适合简单场景。如果有3个以上的分支，或者逻辑复杂，老老实实用if/else，可读性更好。"
          },
          {
            tag: "💡 实战",
            title: "条件判断的实际例子",
            explain:
              "用条件判断来做一个<strong>达人合作状态检查</strong>。<br>根据达人的粉丝数和互动率，判断合作等级。<br>这就是你日常工作中会遇到的真实场景。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>fans</span> = <span class=\「val\」>50000</span>;<br><span class=\「tag\」>let</span> <span class=\「text\」>engagement</span> = <span class=\「val\」>0.05</span>; <span class=\「comment\」>// 5%互动率</span><br><br><span class=\「tag\」>if</span> (<span class=\「text\」>fans</span> >= <span class=\「val\」>100000</span> && <span class=\「text\」>engagement</span> >= <span class=\「val\」>0.03</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「S级达人 🔥\」</span>);<br>} <span class=\「tag\」>else if</span> (<span class=\「text\」>fans</span> >= <span class=\「val\」>10000</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「A级达人 ⭐\」</span>);<br>} <span class=\「tag\」>else</span> {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「潜力达人 🌱\」</span>);<br>}<br><span class=\「comment\」>// 输出：A级达人 ⭐</span>",

            analogy: "这就像你给达人分等级：粉丝多+互动好的是S级，粉丝中等的是A级，刚起步的是潜力股。你的大脑每天都在做这种判断，现在只是教JS也这么做。",
            tip: "条件判断可以嵌套（if里再套if），但不要嵌套太深，超过3层就该考虑重构代码了。"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "if (false) { console.log(\「A\」); } else { console.log(\「B\」); } 输出什么？",

            options: [
              "A. A",
              "B. B",
              "C. 什么都不输出"
            ],
            answer: "B. B",
            explanation: "因为条件是false，所以if块里的代码不会执行，而是跳到else块执行，输出\「B\」。if/else就像岔路口，条件决定走哪条路。"

          },
          {
            type: "选择题",
            question: "let x = 10; x > 5 ? \「大\」 : \「小\」 的结果是？",

            options: [
              "A. \「大\」",

              "B. \「小\」",

              "C. true"
            ],
            answer: "A. \「大\」",

            explanation: "10 > 5是true，三元运算符选择问号后面的值\「大\」。三元运算符的格式是：条件 ? 真值 : 假值。"

          },
          {
            type: "填空题",
            question: "let score = 95; if (score >= 90) { console.log(\"优秀\"); } else if (score >= 60) { console.log(\"及格\"); } else { console.log(\"加油\"); } 输出结果是 ______",
            options: [
              "A. \"优秀\"",
              "B. \"及格\"",
              "C. \"加油\""
            ],
            answer: "A. \"优秀\"",
            explanation: "score = 95，满足第一个条件 score >= 90，所以输出\"优秀\"。if/else if/else 是顺序判断的，一旦某个条件满足，后面的分支就不再检查。"
          }
        ]
      },
      // ---- Day 2: 循环 ----
      {
        title: "Day 2：循环",
        desc: "学会for循环、while循环，让程序批量处理任务",
        cards: [
          {
            tag: "🔁 for循环",
            title: "for循环——重复做事",
            explain:
              "for循环让你<strong>重复执行一段代码指定次数</strong>。<br>格式：<strong>for (起点; 条件; 变化) { 重复做的事 }</strong><br>最常见的写法：从0数到某个数，逐个处理。",
            code:
              "<span class=\「comment\」>// 打印1到5</span><br><span class=\「tag\」>for</span> (<span class=\「tag\」>let</span> <span class=\「text\」>i</span> = <span class=\「val\」>1</span>; <span class=\「text\」>i</span> <= <span class=\「val\」>5</span>; <span class=\「text\」>i</span>++) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>`第${<span class=\「text\」>i</span>}次循环`</span>);<br>}<br><span class=\「comment\」>// 第1次循环</span><br><span class=\「comment\」>// 第2次循环</span><br><span class=\「comment\」>// ... 第5次循环</span>",

            analogy: "for循环就像你每天早上打卡——第1天、第2天……一直打到第N天。起点是第1天，条件是「还没到第N天」，变化是「每天+1\」。完全一样的逻辑。",

            tip: "小心别写死循环！如果条件永远为true，程序会一直跑下去。i++（每次加1）别忘了写，否则i永远不变，循环永远不停。"
          },
          {
            tag: "🔄 while循环",
            title: "while循环——满足条件就一直做",
            explain:
              "while循环是<strong>只要条件为true就一直执行</strong>。<br>适合<strong>不确定要循环多少次</strong>的场景。<br>格式：<strong>while (条件) { 做的事 }</strong>，和if有点像，但会反复执行。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>battery</span> = <span class=\「val\」>30</span>;<br><span class=\「tag\」>while</span> (<span class=\「text\」>battery</span> > <span class=\「val\」>0</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>`电量还剩${<span class=\「text\」>battery</span>}%`</span>);<br>&nbsp;&nbsp;<span class=\「text\」>battery</span> = <span class=\「text\」>battery</span> - <span class=\「val\」>10</span>;<br>}<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「没电了！🔋\」</span>);",

            analogy: "while循环就像手机电量提示——只要电量大于0就一直用，每次消耗10%。你不确定能用几次，但只要「电量>0\」这个条件成立就继续。",

            tip: "while循环最容易犯的错：忘记在循环里改变条件变量。如果battery不减，battery > 0永远是true，程序就卡死了。"
          },
          {
            tag: "📦 循环数组",
            title: "遍历数组的循环写法",
            explain:
              "用循环来<strong>逐个处理数组里的每个元素</strong>，这是最常见的用法。<br><strong>for (let i = 0; i < arr.length; i++)</strong> 用索引访问每个元素。<br><strong>for (let item of arr)</strong> 直接拿到每个元素的值。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>videos</span> = [<br>&nbsp;&nbsp;<span class=\「val\」>\「选题技巧\」</span>,<br>&nbsp;&nbsp;<span class=\「val\」>\「剪辑入门\」</span>,<br>&nbsp;&nbsp;<span class=\「val\」>\「运营策略\」</span><br>];<br><br><span class=\「tag\」>for</span> (<span class=\「tag\」>let</span> <span class=\「text\」>i</span> = <span class=\「val\」>0</span>; <span class=\「text\」>i</span> < <span class=\「text\」>videos</span>.<span class=\「text\」>length</span>; <span class=\「text\」>i</span>++) {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>`第${<span class=\「text\」>i</span>+<span class=\「val\」>1</span>}个视频：${<span class=\「text\」>videos</span>[<span class=\「text\」>i</span>]}`</span>);<br>}",

            analogy: "遍历数组就像检查清单——你有一个待办列表，逐项检查完成。循环就是那个「下一项」的动作，直到所有项都处理完。",

            tip: "日常工作中，for...of 写法更简单。但 for(i) 写法更灵活，比如你需要知道当前是第几个，或者要跳过某些项。"
          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "for (let i = 0; i < 3; i++) { console.log(i); } 会输出几个数字？",
            options: [
              "A. 2个：0, 1",
              "B. 3个：0, 1, 2",
              "C. 3个：1, 2, 3"
            ],
            answer: "B. 3个：0, 1, 2",
            explanation: "i从0开始，i<3时执行循环体，所以i的值依次是0、1、2，共3次。当i变成3时，3<3为false，循环停止。"
          },
          {
            type: "选择题",
            question: "let arr = [\「a\」,\「b\」]; for (let x of arr) { console.log(x); } 输出？",

            options: [
              "A. 0, 1",
              "B. a, b",
              "C. 1, 2"
            ],
            answer: "B. a, b",
            explanation: "for...of循环直接拿到数组中每个元素的值，不是索引。所以x依次是\「a\」和\「b\」，逐个打印。"

          },
          {
            type: "找错题",
            question: "以下while循环有什么问题？\nlet count = 0;\nwhile (count < 3) {\n  console.log(count);\n}",
            options: [
              "A. count初始值不对",
              "B. 循环体内没有改变count，会死循环",
              "C. 条件count < 3写法错误"
            ],
            answer: "B. 循环体内没有改变count，会死循环",
            explanation: "while循环必须在循环体内改变条件变量，否则条件永远为true，程序卡死。正确写法应在循环体内加上 count++ 或 count = count + 1。这是while循环最常见的错误！"
          }
        ]
      },
      // ---- Day 3: 函数基础 ----
      {
        title: "Day 3：函数基础",
        desc: "学会声明函数、传参数、返回值，让代码可复用",
        cards: [
          {
            tag: "📦 函数",
            title: "function声明——把代码打包",
            explain:
              "函数就是<strong>一段可以反复使用的代码包</strong>。<br>用 <strong>function</strong> 关键词声明，给它起个名字，写好参数。<br>以后只要写<strong>函数名()</strong>就能调用，不用重复写代码。",
            code:
              "<span class=\「tag\」>function</span> <span class=\「text\」>greet</span>() {<br>&nbsp;&nbsp;<span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>\「你好呀！👋\」</span>);<br>}<br><br><span class=\「comment\」>// 调用函数</span><br><span class=\「text\」>greet</span>(); <span class=\「comment\」>// 你好呀！👋</span><br><span class=\「text\」>greet</span>(); <span class=\「comment\」>// 你好呀！👋（再说一遍）</span><br><span class=\「text\」>greet</span>(); <span class=\「comment\」>// 你好呀！👋（第三遍）</span>",

            analogy: "函数就像你手机里的快捷指令——你设置一次「早上好问候」的快捷指令，以后点一下就行，不用每次都说一遍同样的话。函数也是这个道理：写一次，用N次。",

            tip: "函数名要用动词开头，比如 greet()、calculate()、checkStatus()，一看就知道这个函数「做了什么\」。"

          },
          {
            tag: "📥 参数",
            title: "参数和返回值——给函数「喂」数据",

            explain:
              "<strong>参数</strong>是函数的「原料」——调用时传进去，函数用它干活。<br><strong>return</strong>是函数的「产出」——把结果送出来，外面的代码可以接着用。<br>没有return的函数返回 <strong>undefined</strong>（什么都没有）。",

            code:
              "<span class=\「tag\」>function</span> <span class=\「text\」>add</span>(<span class=\「text\」>a</span>, <span class=\「text\」>b</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>return</span> <span class=\「text\」>a</span> + <span class=\「text\」>b</span>;<br>}<br><br><span class=\「tag\」>let</span> <span class=\「text\」>result</span> = <span class=\「text\」>add</span>(<span class=\「val\」>3</span>, <span class=\「val\」>5</span>);<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>result</span>); <span class=\「comment\」>// 8</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>add</span>(<span class=\「val\」>10</span>, <span class=\「val\」>20</span>)); <span class=\「comment\」>// 30</span>",

            analogy: "参数就像你去奶茶店点的口味——「我要大杯、少冰、三分糖\」，这些是参数；返回值就是你拿到的那杯奶茶。你给什么参数，函数就返回对应的结果。",

            tip: "return有两个作用：一是返回结果，二是结束函数。return后面的代码不会被执行。"
          },
          {
            tag: "💡 实战",
            title: "函数的实际例子：计算达人佣金",
            explain:
              "用函数来计算达人的<strong>合作佣金</strong>，参数是基础费用和提成比例。<br>这就是你工作中会遇到的真实场景——把计算逻辑封装成函数，<br>以后换达人只需要改参数，不用改公式。",
            code:
              "<span class=\「tag\」>function</span> <span class=\「text\」>calcCommission</span>(<span class=\「text\」>baseFee</span>, <span class=\「text\」>sales</span>, <span class=\「text\」>rate</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>let</span> <span class=\「text\」>commission</span> = <span class=\「text\」>baseFee</span> + <span class=\「text\」>sales</span> * <span class=\「text\」>rate</span>;<br>&nbsp;&nbsp;<span class=\「tag\」>return</span> <span class=\「text\」>commission</span>;<br>}<br><br><span class=\「tag\」>let</span> <span class=\「text\」>fee</span> = <span class=\「text\」>calcCommission</span>(<span class=\「val\」>500</span>, <span class=\「val\」>10000</span>, <span class=\「val\」>0.1</span>);<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「val\」>`佣金：¥${<span class=\「text\」>fee</span>}`</span>);<br><span class=\「comment\」>// 佣金：¥1500</span><br><span class=\「comment\」>// 500 + 10000 * 0.1 = 1500</span>",

            analogy: "函数就像你的Excel公式——你在一个单元格里写了SUM(A1:A10)，以后不管A1到A10的数据怎么变，公式都不用改。函数就是这个道理：逻辑固定，数据可变。",
            tip: "函数里的变量名（a、b）和外面的变量名互不影响。就像两个不同房间里的人，各说各的，不会串。这叫「作用域\」。"

          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "function hello(name) { return \「Hi, \」 + name; } hello(\「小克\」) 返回什么？",

            options: [
              "A. \「Hi, 小克\」",

              "B. undefined",
              "C. \「小克\」"

            ],
            answer: "A. \「Hi, 小克\」",

            explanation: "调用hello(\「小克\」)时，参数name的值是\「小克\」，函数返回\「Hi, \」 + \「小克\」，结果是\「Hi, 小克\」。这就是参数传递的效果。"

          },
          {
            type: "选择题",
            question: "function test() { console.log(\「hello\」); } 调用 test() 后，它的返回值是？",

            options: [
              "A. \「hello\」",

              "B. undefined",
              "C. 0"
            ],
            answer: "B. undefined",
            explanation: "这个函数只有console.log（打印），没有return（返回）。console.log只是在控制台显示文字，并不是返回值。没有return的函数默认返回undefined。"
          },
          {
            type: "填空题",
            question: "function calc(base, rate) { return base * rate; } calc(1000, 0.1) 的返回值是 ______",
            options: [
              "A. 100",
              "B. 1000",
              "C. 0.1"
            ],
            answer: "A. 100",
            explanation: "调用calc(1000, 0.1)时，base = 1000，rate = 0.1。函数返回 base * rate = 1000 * 0.1 = 100。这就是函数接收参数并计算返回值的完整流程。"
          }
        ]
      },
      // ---- Day 4: 对象基础 ----
      {
        title: "Day 4：对象基础",
        desc: "学会创建对象、访问属性、调用方法，组织复杂数据",
        cards: [
          {
            tag: "🗂️ 对象",
            title: "创建对象——用{}组织数据",
            explain:
              "对象就是一组<strong>「键值对」</strong>（名字:值）的集合，用花括号 <strong>{}</strong> 包裹。<br>每个属性有<strong>名字</strong>和<strong>值</strong>，用冒号连接，逗号分隔。<br>对象比数组更灵活，因为每个值都有名字。",

            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>influencer</span> = {<br>&nbsp;&nbsp;<span class=\「text\」>name</span>: <span class=\「val\」>\「小西瓜\」</span>,<br>&nbsp;&nbsp;<span class=\「text\」>followers</span>: <span class=\「val\」>50000</span>,<br>&nbsp;&nbsp;<span class=\「text\」>category</span>: <span class=\「val\」>\「健康科普\」</span>,<br>&nbsp;&nbsp;<span class=\「text\」>isActive</span>: <span class=\「val\」>true</span><br>};<br><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>influencer</span>.<span class=\「text\」>name</span>); <span class=\「comment\」>// \「小西瓜\」</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>influencer</span>.<span class=\「text\」>followers</span>); <span class=\「comment\」>// 50000</span>",

            analogy: "对象就像一张员工信息卡——上面有姓名、工号、部门、在职状态。每条信息都有标签，你想找哪个信息就直接看那个标签。比数组（一串没有标签的数据）好查多了。",
            tip: "属性名如果包含特殊字符或空格，需要用引号包起来，比如 \「first name\」: \「小克\」。但一般推荐用简单的英文单词做属性名。"

          },
          {
            tag: "🔑 属性访问",
            title: "访问和修改对象的属性",
            explain:
              "用 <strong>对象名.属性名</strong> 读取属性值。<br>用 <strong>对象名.属性名 = 新值</strong> 修改属性值。<br>如果属性名存在变量里，可以用 <strong>对象名[变量名]</strong> 来访问。",
            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>product</span> = {<br>&nbsp;&nbsp;<span class=\「text\」>name</span>: <span class=\「val\」>\「疏肝益阳胶囊\」</span>,<br>&nbsp;&nbsp;<span class=\「text\」>price</span>: <span class=\「val\」>128</span>,<br>&nbsp;&nbsp;<span class=\「text\」>stock</span>: <span class=\「val\」>500</span><br>};<br><br><span class=\「comment\」>// 读取</span><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>product</span>.<span class=\「text\」>name</span>); <span class=\「comment\」>// \「疏肝益阳胶囊\」</span><br><br><span class=\「comment\」>// 修改</span><br><span class=\「text\」>product</span>.<span class=\「text\」>price</span> = <span class=\「val\」>99</span>;<br><span class=\「text\」>product</span>.<span class=\「text\」>stock</span> = <span class=\「text\」>product</span>.<span class=\「text\」>stock</span> - <span class=\「val\」>10</span>;<br><br><span class=\「comment\」>// 动态属性名</span><br><span class=\「tag\」>let</span> <span class=\「text\」>key</span> = <span class=\「val\」>\「price\」</span>;<br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>product</span>[<span class=\「text\」>key</span>]); <span class=\「comment\」>// 99</span>",

            analogy: "访问属性就像查通讯录——「张三.电话\」直接拿到手机号，\「张三.邮箱\」拿到邮箱。修改属性就像你更新通讯录里的信息：张三换号了，直接改就行。",

            tip: "obj.name 和 obj[\「name\」] 效果一样。但如果属性名存在变量里（比如 let key = \「name\」），只能用 obj[key]。"

          },
          {
            tag: "⚙️ 方法",
            title: "对象的方法——对象的「技能」",

            explain:
              "对象里的属性如果值是<strong>函数</strong>，就叫<strong>方法</strong>。<br>方法就是对象「自己能做的事」，比如达人对象的「自我介绍」方法。<br>调用方式：<strong>对象名.方法名()</strong>。",

            code:
              "<span class=\「tag\」>let</span> <span class=\「text\」>influencer</span> = {<br>&nbsp;&nbsp;<span class=\「text\」>name</span>: <span class=\「val\」>\「小西瓜\」</span>,<br>&nbsp;&nbsp;<span class=\「text\」>followers</span>: <span class=\「val\」>50000</span>,<br>&nbsp;&nbsp;<span class=\「text\」>intro</span>: <span class=\「tag\」>function</span>() {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\「tag\」>return</span> <span class=\「val\」>`我是${<span class=\「keyword\」>this</span>.<span class=\「text\」>name</span>}，有${<span class=\「keyword\」>this</span>.<span class=\「text\」>followers</span>}粉丝`</span>;<br>&nbsp;&nbsp;}<br>};<br><br><span class=\「tag\」>console</span>.<span class=\「text\」>log</span>(<span class=\「text\」>influencer</span>.<span class=\「text\」>intro</span>());<br><span class=\「comment\」>// 我是小西瓜，有50000粉丝</span>",

            analogy: "方法就像手机的内置App——「计算器\」App能做计算，\「天气\」App能查天气。对象的方法也一样：达人对象的intro()方法能做自我介绍。this关键词指的是「我自己\」。",

            tip: "this 关键字代表「当前对象自己\」。在influencer.intro()里，this就是influencer。初学者最容易搞混的就是this，记住：在对象的方法里，this就是这个对象。"

          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "let person = {name: \「小克\」, age: 25}; person.name 的值是？",

            options: [
              "A. \「name\」",

              "B. \「小克\」",

              "C. 25"
            ],
            answer: "B. \「小克\」",

            explanation: "person.name 访问的是name属性对应的值，也就是\「小克\」。点号后面的名字是「键\」，取到的是对应的「值\」。"

          },
          {
            type: "选择题",
            question: "对象的方法是什么类型的数据？",
            options: [
              "A. 字符串",
              "B. 数字",
              "C. 函数"
            ],
            answer: "C. 函数",
            explanation: "方法本质上就是存在对象属性里的函数。调用时用 对象.方法() 的格式，圆括号()表示「执行这个函数\」。"

          },
          {
            type: "选择题",
            question: "let obj = {name: \"小克\"}; let key = \"name\"; 如何正确访问name属性？",
            options: [
              "A. obj.key",
              "B. obj[key]",
              "C. obj(\"name\")"
            ],
            answer: "B. obj[key]",
            explanation: "当属性名存在变量中时，必须用方括号语法 obj[key]。obj.key 会去找一个叫\"key\"的属性（不存在），obj(\"name\") 是把obj当函数调用（会报错）。记住：变量做属性名时用方括号。"
          }
        ]
      },
      // ---- Day 5: JS综合练习 ----
      {
        title: "Day 5：JS综合练习",
        desc: "结合HTML+CSS+JS做一个交互效果，复习所有知识点",
        cards: [
          {
            tag: "🎯 事件",
            title: "点击事件 onclick —— 让按钮「活」起来",

            explain:
              "HTML元素可以绑定<strong>事件</strong>，比如点击时触发JS代码。<br>最简单的方式是用 <strong>onclick=\「函数名()\」</strong> 属性。<br>这是HTML和JS沟通的桥梁——用户点按钮，JS做出反应。",

            code:
              "<span class=\「comment\」>// HTML部分：</span><br><span class=\「tag\」>&lt;button</span> <span class=\「text\」>onclick</span>=<span class=\「val\」>\「sayHi()\」</span><span class=\「tag\」>&gt;</span>点我<span class=\「tag\」>&lt;/button&gt;</span><br><span class=\「tag\」>&lt;p</span> <span class=\「text\」>id</span>=<span class=\「val\」>\「msg\」</span><span class=\「tag\」>&gt;&lt;/p&gt;</span><br><br><span class=\「comment\」>// JS部分：</span><br><span class=\「tag\」>function</span> <span class=\「text\」>sayHi</span>() {<br>&nbsp;&nbsp;<span class=\「text\」>document</span>.<span class=\「text\」>getElementById</span>(<span class=\「val\」>\「msg\」</span>)<br>&nbsp;&nbsp;&nbsp;&nbsp;.<span class=\「text\」>textContent</span> = <span class=\「val\」>\「你好呀！\」</span>;<br>}",

            analogy: "onclick就像门铃——你按（点击）一下，屋里的人（JS）就做出反应（开门/打招呼）。按钮本身不会动，但你给它接上了「门铃线\」（onclick），它就能触发反应了。",

            tip: "getElementById是JS找HTML元素的方法——根据id找到对应的元素，然后修改它。就像根据工号找到同事一样。"
          },
          {
            tag: "🧩 综合",
            title: "综合小项目：达人合作计算器",
            explain:
              "把两周学的知识串起来：做一个<strong>达人合作费用计算器</strong>。<br>用户输入粉丝数和互动率，JS自动算出合作等级和预估费用。<br>涉及：变量、数组、对象、函数、条件判断、事件。",
            code:
              "<span class=\「comment\」>// 完整JS代码：</span><br><span class=\「tag\」>let</span> <span class=\「text\」>influencers</span> = [];<br><br><span class=\「tag\」>function</span> <span class=\「text\」>addInfluencer</span>(<span class=\「text\」>name</span>, <span class=\「text\」>fans</span>, <span class=\「text\」>rate</span>) {<br>&nbsp;&nbsp;<span class=\「tag\」>let</span> <span class=\「text\」>level</span> = <span class=\「text\」>fans</span> >= <span class=\「val\」>100000</span> ? <span class=\「val\」>\「S级\」</span> : <span class=\「val\」>\「A级\」</span>;<br>&nbsp;&nbsp;<span class=\「tag\」>let</span> <span class=\「text\」>fee</span> = <span class=\「text\」>fans</span> * <span class=\「text\」>rate</span>;<br>&nbsp;&nbsp;<span class=\「tag\」>let</span> <span class=\「text\」>person</span> = {<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\「text\」>name</span>: <span class=\「text\」>name</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\「text\」>level</span>: <span class=\「text\」>level</span>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<span class=\「text\」>fee</span>: <span class=\「text\」>fee</span><br>&nbsp;&nbsp;};<br>&nbsp;&nbsp;<span class=\「text\」>influencers</span>.<span class=\「text\」>push</span>(<span class=\「text\」>person</span>);<br>&nbsp;&nbsp;<span class=\「tag\」>return</span> <span class=\「text\」>person</span>;<br>}",

            analogy: "这个项目就像你的Excel达人表格——每一行是一个对象（达人），每个对象有名字、等级、费用。函数就是计算公式，事件就是用户操作。你每天都在处理这些数据，只是以前用Excel，现在用代码。",
            tip: "综合练习的秘诀：别想一次写完。先写变量→再写函数→再加事件→最后调试。一步一步来，每步都能单独测试。"
          },
          {
            tag: "📚 复习",
            title: "知识点回顾——两周学了什么",
            explain:
              "Week 5：变量（let/const）、数据类型（字符串/数字/布尔值）、<br>字符串操作、数学运算、数组。<br>Week 6：条件判断（if/else）、循环（for/while）、函数、对象、事件。",
            code:
              "<span class=\「comment\」>// 两周知识点一览：</span><br><span class=\「comment\」>// 📦 变量: let / const</span><br><span class=\「comment\」>// 🔤 类型: string / number / boolean</span><br><span class=\「comment\」>// 📋 数组: [1, 2, 3] push/pop</span><br><span class=\「comment\」>// 🔀 判断: if / else / 三元</span><br><span class=\「comment\」>// 🔁 循环: for / while</span><br><span class=\「comment\」>// 📦 函数: function / return</span><br><span class=\「comment\」>// 🗂️ 对象: { key: value }</span><br><span class=\「comment\」>// ⚡ 事件: onclick</span>",

            analogy: "两周的学习就像搭积木：变量是最基本的积木块，数据是积木的颜色，函数是积木模具（可以批量做），对象是拼好的小造型，事件是让造型「活」起来的魔法。你现在已经有一整套积木了，可以做各种造型！",

            tip: "不要死记硬背语法！理解概念比记住写法重要100倍。语法忘了可以随时查，但理解了「变量就是贴标签的盒子\」这个概念，你就永远不会迷路。"

          }
        ],
        quiz: [
          {
            type: "选择题",
            question: "HTML按钮的 onclick 属性绑定的是什么？",
            options: [
              "A. 样式",
              "B. 一个JavaScript函数",
              "C. 一个变量"
            ],
            answer: "B. 一个JavaScript函数",
            explanation: "onclick属性绑定的是JS函数。当用户点击按钮时，浏览器会执行这个函数。这是HTML和JS交互最基本的方式。"
          },
          {
            type: "选择题",
            question: "document.getElementById(\「msg\」).textContent = \「hi\」 做了什么？",

            options: [
              "A. 创建了一个新元素",
              "B. 把id为msg的元素的文字内容改为\「hi\」",

              "C. 删除了id为msg的元素"
            ],
            answer: "B. 把id为msg的元素的文字内容改为\「hi\」",

            explanation: "getElementById先找到id为\「msg\」的HTML元素，然后textContent=\「hi\」修改它的文字内容。这是JS修改页面内容最基础的操作。"

          },
          {
            type: "选择题",
            question: "以下代码综合了多个JS知识点。let items = []; function add(x) { items.push(x); return items.length; } add(\"a\"); add(\"b\"); items[0] 的值是？",
            options: [
              "A. \"a\"",
              "B. \"b\"",
              "C. 2"
            ],
            answer: "A. \"a\"",
            explanation: "add(\"a\")先把\"a\"推入items数组，items变成[\"a\"]，返回长度1。add(\"b\")再把\"b\"推入，items变成[\"a\",\"b\"]，返回长度2。items[0]是数组第一个元素，即最早加入的\"a\"。这道题综合了数组、函数、参数和返回值四个知识点！"
          }
        ]
      }
    ]
  }
];
