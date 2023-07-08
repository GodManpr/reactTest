window.onload = function(){
    //React.createElement 创建react元素
    //<div class="box">hello world</div>
    const div = React.createElement("div",{className:"box"},'hello world');
    const _li1 = React.createElement("li",{className:"li"},'list-1');
    const _li2 = React.createElement("li",{className:"li"},'list-2');
    const _ul = React.createElement("ul",{className:"ul"},_li1,_li2);
    
    //JS创建dom元素
    var p = document.createElement('p'); //真实dom
    p.innerHTML = 'test';
    p.style.color = 'red';
    console.log(p); //真实dom
    console.log(div); //虚拟dom

    //元素渲染
    const domContainer = document.getElementById('my'); //指定容器
    const root = ReactDOM.createRoot(domContainer); //创建根目录
    root.render(h1); //将元素渲染
    
}