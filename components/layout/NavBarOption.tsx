import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/layout.module.css'

export interface NavBarProp {
    imageLocation: string;
    text: string;
    url: string;
}

// Component for navigation options in top navbar
export default function NavBarOption({ props }: { props: NavBarProp }) {
    return (
        <div className={styles.option}>
            <Link href={props.url}>
                <a>
                    <div className="mx-auto text-center">
                        <Image
                            src={props.imageLocation}
                            alt={props.text}
                            width={30}
                            height={30}
                            layout="fixed"
                        />
                        <br/>
                        {props.text}
                    </div>
                </a>
            </Link>
        </div>
    );
}