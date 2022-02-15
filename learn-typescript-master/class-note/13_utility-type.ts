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

// Function to display detail infomation of aproduct
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

// Function to update product information
//      1. user ?: symbol for optional
// interface UpdateProduct {       
//     id?: number;                // will update some information, not every items every times
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }
// function updateProductItem(productItem: UpdateProduct) {
// }

//      2. use Partial uitility type
type UpdateProduct = Partial<Product>;
function updateProductItem(productItem: Partial<Product>) {

}


//  Utility Type _ Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }

//  #1
type UserProfileUpdate = {
    username?: UserProfile['username']; 
    email?: UserProfile['email'];
    profilePhotoUrl?: UserProfile['profilePhotoUrl']; 
}

// #2 - mapped type?
type UserProfileUpdate = {
    [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]        // [x in xx] like for in loop
}

// #3
type UserProfileKeys = keyof UserProfile;
type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p]
}

// #4
type Subset<T> = {
    [p in keyof T]?: T[p]
}