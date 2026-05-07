function renderProducts(ProductsList, categorySelect, booleanSelect)
  {
      const productContainer = document.getElementById("exibicaoItems");

      productContainer.replaceChildren();

      let headerFormat = categorySelect;
      headerFormat = headerFormat[0].toUpperCase() + headerFormat.slice(1);

      document.getElementById("categoriaExibir").textContent = headerFormat;

      let productListCopy = [];

      if(categorySelect === 'todos')
        {
          productListCopy = ProductsList.filter(product => product.active);;
        }
      else
        {
          if(booleanSelect)
            {
              const filteredActiveProducts  = ProductsList.filter( item => item.category === categorySelect && item.active);    
          
              if(filteredActiveProducts.length === 0)
                {
                  alert("Não há items ativos da categoria selecionada.");
                }
            else
                { 
                  productListCopy = filteredActiveProducts;
                }
            }
        }

      

      
        
      productListCopy.forEach( product => 
            {
                
              const divItemContainer = document.createElement("div");
              const imageItem = document.createElement("img");
              const itemList = document. createElement("ul");
              const itemFeatureName = document. createElement("li");
              const itemFeatureCategory = document. createElement("li");
              const itemFeaturePrice = document. createElement("li");
              const itemFeatureStatus = document. createElement("li");

              itemFeatureName.textContent = `Nome: ${product.name}`;
              itemFeatureCategory.textContent = `Categoria: ${product.category}`;
              itemFeaturePrice.textContent = `Preço: R$${product.price}`;
              itemFeatureStatus.textContent = `Status: ${product.active}`; 

              divItemContainer.classList.add("divCard");
                    
              imageItem.classList.add("imageCard")
              imageItem.src = product.imagePath;
              imageItem.alt = product.alt;

              itemList.append(itemFeatureName, itemFeatureCategory, itemFeaturePrice, itemFeatureStatus);
              divItemContainer.append(imageItem, itemList);
              productContainer.appendChild(divItemContainer);
        
            });
  }



const products = [
  {
    name: "Mouse",
    price: 80,
    category: "acessórios",
    active: true,
    imagePath: "assets/imagens/categorias/acessórios/Mouse.png",
    alt: "Mouse para computador"
  },
  {
    name: "Teclado",
    price: 150,
    category: "acessórios",
    active: true,
    imagePath: "assets/imagens/categorias/acessórios/Teclado.png",
    alt: "Teclado para computador"
  },
  {
    name: "Monitor",
    price: 900,
    category: "periféricos",
    active: true,
    imagePath: "assets/imagens/categorias/periféricos/Monitor.png",
    alt: "Monitor para computador"
  },
  {
    name: "Notebook",
    price: 3500,
    category: "computadores",
    active: true,
    imagePath: "assets/imagens/categorias/computadores/Notebook.png",
    alt: "Notebook"
  },
  {
    name: "Webcam",
    price: 200,
    category: "acessórios",
    active: true,
    imagePath: "assets/imagens/categorias/acessórios/Webcam.png",
    alt: "Webcam para videochamadas"
  },
  {
    name: "Headset",
    price: 250,
    category: "acessórios",
    active: true,
    imagePath: "assets/imagens/categorias/acessórios/Headset.png",
    alt: "Headset com microfone"
  },
  {
    name: "Cadeira Gamer",
    price: 1200,
    category: "móveis",
    active: true,
    imagePath: "assets/imagens/categorias/móveis/cadeira-gamer.png",
    alt: "Cadeira gamer para escritorio"
  },
  {
    name: "Mesa Escritório",
    price: 800,
    category: "móveis",
    active: true,
    imagePath: "assets/imagens/categorias/móveis/mesa-escritório.png",
    alt: "Imagem do produto Mesa Escritório"
  },
  {
    name: "Smartphone",
    price: 2200,
    category: "eletrônicos",
    active: true,
    imagePath: "assets/imagens/categorias/eletrônicos/Smartphone.png",
    alt: "Smartphone"
  },
  {
    name: "Carregador USB-C",
    price: 90,
    category: "acessórios",
    active: true,
    imagePath: "assets/imagens/categorias/acessórios/carregador-usb-c.png",
    alt: "Carregador USB-C"
  },
  {
    name: "Impressora",
    price: 700,
    category: "periféricos",
    active: true,
    imagePath: "assets/imagens/categorias/periféricos/Impressora.png",
    alt: "Impressora"
  },
  {
    name: "HD Externo",
    price: 400,
    category: "armazenamento",
    active: true,
    imagePath: "assets/imagens/categorias/armazenamento/hd-externo.png",
    alt: "HD externo para armazenamento"
  },
  {
    name: "Tablet",
    price: 1400,
    category: "eletrônicos",
    active: true,
    imagePath: "assets/imagens/categorias/eletrônicos/Tablet.png",
    alt: "Tablet"
  },
  {
    name: "Smartwatch",
    price: 650,
    category: "eletrônicos",
    active: true,
    imagePath: "assets/imagens/categorias/eletrônicos/Smartwatch.png",
    alt: "Smartwatch"
  },
  {
    name: "Caixa de Som",
    price: 300,
    category: "eletrônicos",
    active: true,
    imagePath: "assets/imagens/categorias/eletrônicos/caixa-de-som.png",
    alt: "Caixa de som portatil"
  },
  {
    name: "SSD",
    price: 350,
    category: "armazenamento",
    active: true,
    imagePath: "assets/imagens/categorias/armazenamento/SSD.png",
    alt: "SSD para armazenamento"
  },
  {
    name: "Pen Drive",
    price: 60,
    category: "armazenamento",
    active: true,
    imagePath: "assets/imagens/categorias/armazenamento/pen-drive.png",
    alt: "Pen drive USB"
  },
  {
    name: "Roteador",
    price: 280,
    category: "periféricos",
    active: true,
    imagePath: "assets/imagens/categorias/periféricos/Roteador.png",
    alt: "Roteador de internet"
  },
  {
    name: "Scanner",
    price: 850,
    category: "periféricos",
    active: true,
    imagePath: "assets/imagens/categorias/periféricos/Scanner.png",
    alt: "Scanner de documentos"
  },
  {
    name: "Suporte para Notebook",
    price: 130,
    category: "acessórios",
    active: true,
    imagePath: "assets/imagens/categorias/acessórios/suporte-nootbook.png",
    alt: "Suporte para notebook"
  },
  {
    name: "Mousepad",
    price: 45,
    category: "acessórios",
    active: true,
    imagePath: "assets/imagens/categorias/acessórios/Mousepad.png",
    alt: "Mousepad"
  },
  {
    name: "Estante",
    price: 500,
    category: "móveis",
    active: true,
    imagePath: "assets/imagens/categorias/móveis/Estante.png",
    alt: "Estante para escritorio"
  },
  {
    name: "Gaveteiro",
    price: 380,
    category: "móveis",
    active: true,
    imagePath: "assets/imagens/categorias/móveis/Gaveteiro.png",
    alt: "Gaveteiro para escritorio"
  },
  {
    name: "PC Gamer",
    price: 5200,
    category: "computadores",
    active: true,
    imagePath: "assets/imagens/categorias/computadores/pc-gamer.png",
    alt: "PC gamer"
  },
  {
    name: "MacBook",
    price: 7800,
    category: "computadores",
    active: true,
    imagePath: "assets/imagens/categorias/computadores/MacBook.png",
    alt: "MacBook"
  },
  {
    name: "All in One",
    price: 4200,
    category: "computadores",
    active: true,
    imagePath: "assets/imagens/categorias/computadores/all-in-one.png",
    alt: "Computador all in one"
  }
];
 
const categorySelect = document.getElementById("categoriaFiltro");

renderProducts(products, 'todos' , false);

categorySelect.addEventListener('change', () => 
  {
     const selectedCategory = categorySelect.value; 

     renderProducts(products, selectedCategory, true);
  })

