interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// API function to receive product info
function fetchProduct(): Promise<Product[]> {

}

//      1. use TS directly = cannot use interface Product becuase it is only partial info
// function displayProductDetail(shoppingItem: { id: number; name: string; price: number }) {
// }

//      2. use another interface ProductDetail = still cannot use interface Product directly
// interface ProductDetail {
//     id: number; 
//     name: string; 
//     price: number
// }
// function displayProductDetail(shoppingItem: ProductDetail) {
// }

//      3. use Pick of utility type
// function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {
// }
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayListByName(shoppingItem: ShoppingItem) {
    
}