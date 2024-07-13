# html

- <meta name="viewport" content="width=device-width, initial-scale=1.0">

  - `viewport` 属性用来控制页面在移动设备上的显示效果
  - `width=device-width` 表示将页面宽度设置为移动设备的屏幕宽度，这样页面的宽度会自适应设备屏幕的宽度
  - `initial-scale=1.0` 表示页面的初始缩放比例为1.0，即不进行缩放，以保持页面原始大小在设备屏幕上显示

- `rel="stylesheet"` 属性指定了链接的资源是样式表

- `button-container` 用于指代包含多个按钮的容器元素

- property：属性

- margin-bottom: 20px; 表示设置该元素的下边距为20像素，即在元素下方留出20像素的空间。

- display: flex; 表示设置该元素为flex布局，即子元素会按照弹性盒模型进行排列

- `display: block;`：将该元素设置为块级元素。

- 在JavaScript文件中动态地添加了一个名为active的class，那么相应的CSS样式会在该按钮上生效

- `border-collapse: collapse;`：合并单元格边框，使得相邻单元格的边框不重叠。

- `white-space: nowrap;`：使得单元格中的文本不换行，确保文本内容不会垂直显示（此属性用于避免表格列中的文本垂直排列）。

- padding属性值的顺序为上、右、下、左，如果只提供两个值，则第一个值应用于上下边距，第二个值应用于左右边距

- `position: relative;`：设置按钮元素相对定位，使得后续可以通过绝对定位来控制其子元素的位置。

- `content: attr(data-popover);`：用于为元素的内容设置属性值，具体的内容来自元素的`data-popover`属性。

- `pointer-events: none;`：禁用元素的鼠标事件，使元素不响应鼠标事件。

- DOM:文档对象模型（Document Object Model）

- addEventListener() 方法用于向指定元素添加事件句柄

- sort（）：第一个参数的元素肯定在第二个参数的元素前面!!!

  这个方法的排序是看回调函数的返回值：

  -  如果返回值大于 0，则位置互换。
  -  如果返回值小于 0，则位置不变。

- tableBody.innerHTML = '';重新渲染表格内容之前清空现有内容，以确保表格数据的更新或重绘
- 如果想要确保每次循环只显示新数据且不叠加，可以在每次循环之前手动清空表格内容，或者在循环之外执行一次性清空表格的操作。

- 模板字符串使用反引号 **``** 作为字符串的定界符分隔的字面量。

  模板字面量是用反引号（**`**）分隔的字面量，允许多行字符串、带嵌入表达式的字符串插值和一种叫带标签的模板的特殊结构。

  模板字符串的表达式部分，它们被包含在 **${}** 内部，并在运行时求值。



-  外部样式：

  <link> 标签要写在 <head> 标签中。

- `display: none;`会使元素完全从文档流中移除，而`visibility: hidden;`则只是将元素隐藏，但仍占据原来的空间。

- `z-index: 2;` 是 CSS 中用于设置元素在堆叠上下文中的层叠顺序的属性。`z-index` 属性的值用于指定元素在堆叠顺序中的层级关系，值越大的元素会显示在值较小的元素的上面。

- querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素。

- ```javascript
  `<span style="color: blue;">DX </span>${item.name}`
  ```

## 自己写

- html：

  - link: styles

    ```javascript
    <link rel="stylesheet" href="styles.css"></link>
    ```

    

  - head

  - button

  - table

    - thaed
    - tbody

  - script

    ```javascript
    <script src="script.js"></script>
    ```

    

- css

  - 两个页面按钮
  - 表格样式
  - 难度按钮
  - 操作三个按钮
  - 操作popover

- js

  - modal:

    ```javascript
    const modal = document.createElement('div');
    modal.classList.add('modal')
    modal.innerHTML = `
    <div class='modal-content'>
    	<span class="modal-close">
    		&times
    	</span>
    	<h2 id="modal-heading"></h2>
    	<img id='modal-cover-image' src="../images/image.png">
    </div>
    `;
    document.body.appendChild(modal);
    
    const closeModalButton = modal.querySelector('.close');
    closeModalButton.addEventListener('click', () => {
        document.getElementById('covername').textContent = item.name;
        modal.style.display = 'none';
    })
    
    const coverButton = row.querySelector('button[查看封面]')；
    coverButton.document.addEventListener('click', () => {
        modal.style.display = 'flex';
    })
    ```

    

  - 在内容加载完成时执行主函数：

    ```javascript
    document.addEventListener('DOMContentLoaded', () => {
        
    })
    ```

    

  - 获取数据

    ```javascript
    fetch => (data.json)
    	.then(response => response.json())
    	.then(jsonData => {
        	data = jsonData;
        	showTable('SD');
    })
    ```

  - 两个按钮：事件监听click

  - ```javascript
    sdButton.addEventListener('click', () => {
        sdButton.classList.add('active');
        dxButton.classList.remove('active');
        showTable('SD');
    })
    ```

  - 表格主体：函数

    - 过滤数据

      ```javascript
      const fileredData = data.filter(item => item.category === catetory);
      ```

    - 排序

      ```javascript
      sort((a, b) => b['DX Rating'] - a['DX Rating']);
      ```

    - 清空表格

      ```javascript
      tableBody.innerHTML = '';
      ```

    - 循环

      ```javascript
      filteredData.forEach(item, index) => {
          
      }
      ```

      - 定义一个新创建的表格行row

        ```javascript
        const row = document.createElement('tr');
        ```

      - 定义name，定义difficulty

        ```javascript
        const name = catetory === 'DX'
        			? `<span style="color:#00f;">DX </span>`${item.name}
        			:&{item.name};
        
        const difficulties = {
            'Expert': 'Expert',
            'Advanced': 'Advanced',
            'Re:MASTER': 'ReMaster',
            'Master': 'Master',
        }
        ```

      - 在row中添加数据

      - 将row加到表格最后

        

        

        

        

        

        







