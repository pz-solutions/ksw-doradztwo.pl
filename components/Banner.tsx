import * as React from 'react';

export default function Banner() {
    return (
        <section className="relative -mt-11 flex min-h-[24rem] items-center overflow-hidden bg-[url('/images/banner.jpg')] bg-cover bg-center py-24 sm:-mt-[3.25rem] sm:h-[75vh] sm:min-h-[30rem] sm:max-h-[50rem] sm:bg-fixed sm:py-16 lg:bg-scroll">
            <div className="absolute inset-0 bg-navy/85" />
            <div className="relative z-10 mx-auto w-[calc(100%-3rem)] max-w-[65rem] sm:w-[calc(100%-6rem)]">
                <header className="mb-8 hidden w-fit max-w-full sm:block">
                    <h1 className="text-[2rem] leading-[1.65] font-semibold after:mt-[0.325em] after:mb-2 after:block after:h-0.5 after:w-[calc(100%+0.5em)] after:max-w-full after:bg-white sm:text-[3.25em]">KSW Doradztwo</h1>
                </header>
                <div className="sm:flex sm:items-center">
                    <p className="mb-8 max-w-2xl text-[0.7em] font-semibold tracking-[0.25em] uppercase sm:mr-6 sm:mb-0">
                        Doradztwo w zakresie prowadzenia działalności od rozpoczęcia do
                        zakończenia
                    </p>
                    <a
                        href="#uslugi"
                        className="inline-flex h-[3.5em] items-center gap-8 px-7 text-[0.8em] font-semibold tracking-[0.25em] whitespace-nowrap uppercase shadow-[inset_0_0_0_2px_white] transition-colors duration-200 hover:text-highlight hover:shadow-[inset_0_0_0_2px_#9bf1ff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight"
                    >
                        Usługi
                        <span aria-hidden="true" className="text-2xl leading-none">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
