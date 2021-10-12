import React, {ReactNode, ReactElement} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/layout.module.css'
import NavBarOption, { NavBarProp } from './NavBarOption'
import {CartProduct, ProductProp} from '../../models/product'


// TODO: Move to separate file
let navBarOptions: Array<NavBarProp> = [
    {
        imageLocation: "/images/navbar/book-open-solid.svg",
        text: "Recipes",
        url: "/recipes"
    },
    {
        imageLocation: "/images/navbar/store-solid.svg",
        text: "Shop",
        url: "/store"
    },
    {
        imageLocation: "/images/navbar/profile_pic.png",
        text: "Profile",
        url: "/profile"
    },
    {
        imageLocation: "/images/navbar/sliders-h-solid.svg",
        text: "Settings",
        url: "/settings"
    },
]

interface LayoutProps {
    children: ReactElement
}

interface LayoutState {
    cartProducts: Array<CartProduct>
}

export default class Layout extends React.Component<LayoutProps, LayoutState> {
    constructor(props: { children: ReactElement }) {
        super(props);
        this.state = {
            cartProducts: new Array<CartProduct>()
        };
    }

    addProductToCart(product : ProductProp){
        if(this.state.cartProducts.filter(x => x.productId === product.productId).length === 0){
            this.state.cartProducts.push(new CartProduct(product));
        }
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 d-flex flex-column">
                            <div className={styles.navRow + " border-bottom"}>
                                <div className="float-start d-inline-flex">
                                    <Link href="/">
                                        <a>
                                            <Image
                                                src="/images/logo.png"
                                                alt="Logo"
                                                width={175}
                                                height={38}
                                                layout="fixed"
                                            />
                                        </a>
                                    </Link>

                                    <input type="email" className={styles.searchBar + " form-control"} placeholder="Search"></input>
                                </div>

                                <div className="float-end d-inline-flex">
                                    <button type="button" className="btn btn-danger">Get $20 Off</button>

                                    {navBarOptions.map((option, index) => (
                                        <NavBarOption props={option} />
                                    ))}
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                {this.props.children}
                            </div>
                        </div>
                        <div className="col-md-2 border-start d-flex flex-column">
                            <div className="flex-grow-1 text-center">
                                <b>Your Cart</b>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}