import * as React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="mx-auto w-[calc(100%-3rem)] max-w-[65rem] py-12 sm:w-[calc(100%-6rem)] sm:py-16">
                <ul className="list-none p-0 text-[0.8em] text-muted max-xs:[&_li]:block max-xs:[&_li]:border-0 max-xs:[&_li]:pl-0 xs:flex xs:[&_li+li]:ml-4 xs:[&_li+li]:border-l xs:[&_li+li]:border-line xs:[&_li+li]:pl-4">
                    <li>2022–2026 &copy; <a href="https://pz-solutions.pl" rel="noreferrer" target="_blank" className="border-b border-dotted border-current transition-colors hover:border-transparent hover:text-highlight">PZ Solutions</a></li>
                    <li>Design: <a href="https://html5up.net" className="border-b border-dotted border-current transition-colors hover:border-transparent hover:text-highlight">HTML5 UP</a></li>
                </ul>
            </div>
        </footer>
    );
}
