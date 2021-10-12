import React from 'react'
import Layout from '../components/layout/Layout'
import { Product, ProductProp } from '../models/product'
import ProductIcon from '../components/store/product'
import Category, { CategoryProp } from '../components/store/category'
import styles from '../styles/store.module.css'

interface StoreProps {
    products: Array<ProductProp>
}

interface StoreState {
    allProducts: Array<ProductProp>,
    activeProducts: Array<ProductProp>,
    categories: Array<CategoryProp>
}

// Storefront Product Page
export default class Store extends React.Component<StoreProps, StoreState> {
    constructor(props: StoreProps) {
        super(props);

        // Create initial list of categories based on whole pool of products
        let categoryNames: Array<string> = []
        props.products.forEach(x => x.category.forEach(y => categoryNames.push(y)));
        
        // Set up initial state with all products and no categories selected
        this.state = {
            allProducts: props.products,
            activeProducts: props.products,
            categories: categoryNames.filter((v, i, a) => a.indexOf(v) === i && v !== "").map(x => ({ name: x, active: false }))
        }
    }

    // Activated when selecting a category. Activates or inactivates categories and filters out inactive products
    setCategory(category: string) : void {
        // Flips active-ness of selected category
        const index = this.state.categories.findIndex(x => x.name === category);
        const newCategories = this.state.categories.slice();
        newCategories[index].active = !newCategories[index].active;

        const activeCategories = newCategories.filter(x => x.active).map(x => x.name);
        var activeProducts : Array<ProductProp>;

        // If nothing is active, then return all products
        if(activeCategories.length === 0)
        {
            activeProducts = this.state.allProducts.slice();
        }
        else 
        {
            activeProducts = this.state.allProducts.filter(x => x.category.some(y => activeCategories.includes(y)));
        }
        this.setState({
            categories: newCategories,
            activeProducts: activeProducts
        });
    }

    render() {
        return (
            <Layout>
                <div className={styles.storefront}>
                    <div className="w-100"><b>Shop By Category</b></div>
                    <div className={styles.categoryContainer}>
                        {this.state.categories.map((category, index) => (
                            <Category props={category} selectCategory={() => this.setCategory(category.name)}/>
                        ))}
                    </div>
                    <div className={styles.productArea}>
                        {this.state.activeProducts.map((product, index) => (
                            <ProductIcon props={product} />
                        ))}
                    </div>
                </div>
            </Layout>
        );
    }
}

// Initial load of products
export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/products`)
    const productsJson: Array<Product> = await res.json()
    var productProps: Array<ProductProp> = productsJson.map(function (prod) { return new ProductProp(prod) })

    // TODO: Figure out why this step is necessary
    var products = JSON.parse(JSON.stringify(productProps))
    // Pass data to the page via props
    return {
        props: { products }
    }
}