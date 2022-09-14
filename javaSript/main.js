const productos= [
    {codigo:1,tipo:"gpu",marca:"MSI",Modelo:"GTX3060",Precio:120000},
    {codigo:2,tipo:"monitor",marca:"MSI",Modelo:"27 pulgadas 2ms",Precio:80000},
    {codigo:3,tipo:"gpu",marca:"ASUS",Modelo:"GTX3080",Precio:250000},
    {codigo:4,tipo:"monitor",marca:"Samsung",Modelo:"30 pulgadas curvo",Precio:60000}

];
function nuevoPorducto(codigo,tipo,marca,modelo,precio){

    this.codigo=codigo,
    this.tipo=tipo,
    this.marca=marca,
    this.modelo=modelo,
    this.precio=parseFloat(precio),
    this.detallesGenerales=()=>{console.log("Codigo del producto:"+this.codigo  + "n\Tipo:"+this.tipo+"n\marca:"+this.marca+"n\Modelo:"+this.modelo +"n\Precio:"+this.precio)}
};
function agregarProducto(producto){
    productos.push(producto);
}
// de esta froma agregamos y creamos producto a nuestro array 
agregarProducto(new nuevoPorducto(5,"motherboard","MSI","z-270",50000)); 

const ul=document.getElementById("lista");
const ulC=document.getElementById("carrito");
const input=document.getElementById("ingreso");
const boton=document.getElementById("boton");
const span=document.getElementsByTagName("span");

for (const iterator of productos) {

    let li=document.createElement("li");
    li.innerHTML=`
    <div>
        <h3>Codigo:${iterator.codigo}</h3>
        <p>Tipo:${iterator.tipo}</p>
        <p>Marca:${iterator.marca}</p>
        <p>Modelo:${iterator.Modelo}</p>
        <p>Precio:${iterator.Precio}</p>
    </div>`;
    ul.append(li);
    
};
const carrito=[];

boton.addEventListener("click",()=>{
    let codigoDeProducto=parseInt (input.value);
    continuar=true;
while(continuar){
    if(codigoDeProducto==1){
        carrito.push(productos[0]);
        continar=falce;
    
    }else if(codigoDeProducto==2){
        carrito.push(productos[1]);
        bcontinar=falce;
    
    }else if(codigoDeProducto==3){
        carrito.push(productos[2]);
        continar=falce;
    
    }else if(codigoDeProducto==4){
        carrito.push(productos[3]);
        continar=falce;
    
    }else if(codigoDeProducto==5){
        carrito.push(productos[4]);
        continar=falce;
    }
    else{
    
        span.innerText="carrito vacio"
        continar=falce;
    }

}


})

for (const iterator of carrito) {

    let li=document.createElement("li");
    li.innerHTML=`
    <div>
        <h3>Codigo:${iterator.codigo}</h3>
        <p>Tipo:${iterator.tipo}</p>
        <p>Marca:${iterator.marca}</p>
        <p>Modelo:${iterator.Modelo}</p>
        <p>Precio:${iterator.Precio}</p>
    </div>`;
    ulC.append(li);
    
};


