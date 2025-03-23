import Link from 'next/link';
import Image from "next/legacy/image";
import logo from '../public/images/logo.png';

export default function Header() {
    return (
        <header id="header" className="alt">
            <div className="inner">
                <Link href="/" className="logo">
                    <Image src={logo} alt="KSW" layout='intrinsic' />
                </Link>
            </div>
        </header>
    );
}
