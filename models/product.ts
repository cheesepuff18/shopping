// Product Prop Model
export class ProductProp {
    productId: string;
    imageLocation: string;
    name: string;
    price: number;
    brand: string;
    subtitle: string;
    unitType: string;
    category: Array<string>;
    isEssential: boolean;
    deliverableNextDay: boolean;
    enabled: boolean;
    inCart: boolean;

    constructor(product : Product){
        this.productId = product.productId.value;
        this.imageLocation = product.imageUrl;
        this.name = product.name;
        this.price = product.price;
        this.brand = product.brand;
        this.subtitle = product.subtitle;
        this.unitType = product.unitType;
        this.category = [product.category];
        this.isEssential = product.isEssential;
        this.deliverableNextDay = product.deliverableNextDay;
        this.enabled = product.enabled;
        this.inCart = false;
    }
}

// Product In Cart Model
export class CartProduct {
    productId: string;
    imageLocation: string;
    name: string;
    quantity: number;
    price: number;
    deliverableNextDay: boolean;

    constructor(product : ProductProp){
        this.productId = product.productId;
        this.imageLocation = product.imageLocation;
        this.name = product.name;
        this.price = product.price;
        this.deliverableNextDay = product.deliverableNextDay;
        this.quantity = 0;
    }
}

// Model for product straight from JSON
export interface Product {
    productId: {
        value: string
      },
      name: string
      upcCode: string,
      price: number,
      description: string,
      imageUrl: string,
      stepSize: number,
      unitType: string,
      subtitle: string,
      brand: string,
      storeSource: string,
      category: string,
      subcategory: string,
      inventoryOnHand: number,
      isEssential: boolean,
      deliverableNextDay: boolean,
      perHomeMaximum: number,
      enabled: boolean,
      inventoryHeld: number,
      weeklyConsumptionQuantity: number,
      subsubcategory: string,
      defaultTrackedItemSectionType: number,
      internalUnitQuantity: number,
      internalUnitMeasure: number,
      productUrl: string,
      itemType: string,
      perishabilityDays: number,
      isExplicitCaseQuantityRequired: boolean
}