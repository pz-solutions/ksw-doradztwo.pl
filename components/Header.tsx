import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/images/logo.svg';

export default function Header() {
    return (
        <header className="absolute top-0 left-0 z-50 h-11 w-full sm:h-[3.25rem]">
            <div className="mx-auto h-full w-[calc(100%-3rem)] max-w-[65rem] sm:w-[calc(100%-6rem)]">
                <Link href="/" className="inline-block border-0 px-0 sm:px-6" aria-label="KSW Doradztwo — strona główna">
                    <Image
                        src={logo}
                        alt="KSW Doradztwo"
                        className="mt-5 h-auto w-[309px] max-w-[calc(100vw-3rem)] sm:mt-6"
                        priority
                    />
                </Link>
            </div>
        </header>
    );
}
