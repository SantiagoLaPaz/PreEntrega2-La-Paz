const products = [
    {
        id: '1',
        name: 'Aluminio Serie 20',
        price: '300',
        caregory: 'perfil',
        img: 'https://http2.mlstatic.com/D_NQ_NP_893825-MLU31244697032_062019-O.webp',
        stock: 100,
        description: 'Perfil de serie 20 ventanas'
    },
    {
        id: '2',
        name: 'Aluminio Serie 25',
        price: '600',
        caregory: 'perfil',
        img: 'https://http2.mlstatic.com/D_NQ_NP_983629-MLU69339063031_052023-O.webp',
        stock: 30,
        description: 'Perfil de serie 25 ventanas'
    },
    {
        id: '3',
        name: 'Aluminio Serie Proa',
        price: '900',
        caregory: 'perfil',
        img: 'https://http2.mlstatic.com/D_NQ_NP_977065-MLU46911579017_072021-O.webp',
        stock: 10,
        description: 'Perfil de serie proa ventanas'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 500 )   
    })  
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export  const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter(prod => prod.category === category);
        resolve(filteredProducts);
      }, 500);
    });
  }