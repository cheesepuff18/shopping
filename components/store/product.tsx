import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/store.module.css'
import { ProductProp } from '../../models/product'

export default function ProductIcon({ props }: { props: ProductProp }) {
    return (
        <div>
            <Link href={"/product/" + props.productId}>
                <div className={styles.productIcon}>
                    <Image
                        src={`/api/imageproxy?url=${encodeURIComponent(props.imageLocation)}`}
                        alt={props.name}
                        width={220}
                        height={200}
                        layout="fixed"
                    />
                    <br/>

                    {/* brand shows if available */}
                    {props.brand !== "" ? (
                        <>
                            {props.brand}
                            <br />
                        </>
                    ) : (
                        <></>
                    )}

                    {props.name}
                    <br />

                    {/* subtitle shows if available */}
                    {props.subtitle !== "" ? (
                        <>
                            <span className={styles.subtitle}>{props.subtitle}</span>
                            <br />
                        </>
                    ) : (
                        <></>
                    )}

                    <div className={styles.price}>
                        ${props.price / 100}
                    </div>

                    {/* dynamic button */}
                    {!props.inCart ? (
                        <button className={styles.button}>+ Add To Cart</button>
                    ) : (
                        <button className={styles.buttonInCart}>Already In Cart</button>
                    )}
                </div>
            </Link>
        </div>
    );
}