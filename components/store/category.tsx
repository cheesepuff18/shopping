import styles from '../../styles/store.module.css'
import * as React from 'react'

export interface CategoryProp {
    name: string;
    active: boolean;
}

// Category Prop meant for the shop page
export default function Category({ props, selectCategory }: { props: CategoryProp, selectCategory(category: string) : void}) {
    return (
        <a onClick={() => selectCategory(props.name)}>
            <div className={styles.category + " " + (props.active ? styles.activeCategory : "")}>
                {props.name}
            </div>
        </a>
    );
}