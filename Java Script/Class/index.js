let menu = ['កម្សាន្ត','បច្ចេកវិទ្យា','ជឺវិតនិងសង្គម','កីឡា','ស័៍ុហ្គេម​២០២២'];
let con = ' ';
menu.map((value)=>{
    con +=`
        <li><a href="">${value}</a></li>
    `;
})
document.getElementById('menu').innerHTML = `<li><a href=""><i class="fa-solid fa-house"></i></a></li>${con}`;

let product = [
    {
        'img':'/Class/img/2.jpg',
        'title':'iphone',
        'dis':'hell my phone',
        'price':'20$',
        'year':'2023'
        
    },
    {
        'img':'/Class/img/shop.jpg',
        'title':'iphone',
        'dis':'hell my phone',
        'price':'20$',
        'year':'2023'
        
    },
    {
        'img':'/Class/img/2.jpg',
        'title':'iphone',
        'dis':'hell my phone',
        'price':'20$',
        'year':'2023'
        
    },
    {
        'img':'/Class/img/shop.jpg',
        'title':'iphone',
        'dis':'hell my phone',
        'price':'20$',
        'year':'2023'
        
    },
];
let data = '';
function fetchProduct(){
    product.map((product)=>{
        data += `
        <div class="card">
        <img src="${product['img']}" alt="">
        <div class="body">
            <div class="title">${product['title']}</div>
            <div class="dis">${product['dis']}</div>
            <div class="price">${product['price']}</div>
            <div class="year">year ${product['year']}</div>
        </div>
    </div>
    `
    })
    document.getElementById('result').innerHTML = data;
}
fetchProduct();