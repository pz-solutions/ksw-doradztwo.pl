import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo.svg';

export default function Header() {
    return (
        <header id="header" className="alt">
            <div className="inner">
                <Link href="/" className="logo">
                    <Image src={logo} alt="KSW" priority />
                </Link>
            </div>
        </header>
    );
}
