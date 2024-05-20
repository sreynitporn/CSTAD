const URL= 'https://fakestoreapi.com/products';

async function factALLAPIProduct(){
    const responsce = await fetch(URL);
    const data = await responsce.json();

    console.log(data);
    let result= '';
    data.map((e)=>{
        result +=`
        <div class="card">
                <img src="${e.image}" alt="">
                <div class="body">
                    <div class="title">${e.title}</div>
                    <div class="dis">${e.dis}</div>
                    <div class="price">price(${e.price})</div>
                    <div class="year">rate(${e.year})</div>
                </div>
            </div>
        `;
    })
    document.getElementById('demo').innerHTML = result;
}
factALLAPIProduct();