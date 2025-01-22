export interface Product {
    _id : string;
    title : string;
    _type : "product";
    description : string;
    productImage?: {
        asset : {
            _ref:  string;
            _type: "image";
        };
    };
    price : number;
    tags : string [];
    discountPercentage : number;
}
