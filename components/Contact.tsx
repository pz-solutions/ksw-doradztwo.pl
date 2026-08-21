import * as React from 'react';

const fieldClassName = 'block h-[2.75em] w-full border-0 bg-field px-4 text-inherit outline-none focus:ring-2 focus:ring-highlight';
const labelClassName = 'mb-4 block text-[0.8em] font-semibold tracking-[0.25em] uppercase';
const buttonClassName = 'h-[3.5em] cursor-pointer border-0 px-7 text-[0.8em] font-semibold tracking-[0.25em] whitespace-nowrap uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-highlight';

function ContactIcon({ type }: { type: 'building' | 'finance' }) {
    return (
        <span className="absolute top-0 left-0 flex size-8 items-center justify-center rounded-full bg-white text-navy" aria-hidden="true">
            {type === 'building' ? (
                <svg viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
                    <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h2a2 2 0 0 1 2 2v10M8 7h4M8 11h4M8 15h4M3 21h18" />
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
                    <path d="M12 2v20M17 6.5c-1-1-2.4-1.5-4.2-1.5-2.3 0-4.3 1.1-4.3 3.2 0 5 8.5 2.2 8.5 7.2 0 2.1-1.9 3.6-4.7 3.6-2 0-3.7-.6-5-1.8" />
                </svg>
            )}
        </span>
    );
}

export default function Contact() {
    return (
        <section className="overflow-x-hidden border-b border-line">
            <div className="mx-auto w-[calc(100%-3rem)] max-w-[65rem] md:flex md:w-[calc(100%-6rem)]">
                <section className="border-line py-12 sm:py-16 md:w-3/5 md:border-r md:pr-12">
                    <form
                        method="post"
                        name="contact"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        action="/"
                        className="mb-8 flow-root"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="hidden" name="bot-field" />
                        <div className="mb-6 xs:float-left xs:w-1/2 xs:pr-3 sm:mb-8 sm:pr-4">
                            <label htmlFor="name" className={labelClassName}>Imię i nazwisko</label>
                            <input type="text" name="name" id="name" autoComplete="name" className={fieldClassName} required />
                        </div>
                        <div className="mb-6 xs:float-left xs:w-1/2 xs:pl-3 sm:mb-8 sm:pl-4">
                            <label htmlFor="email" className={labelClassName}>Email</label>
                            <input type="email" name="email" id="email" autoComplete="email" className={fieldClassName} required />
                        </div>
                        <div className="mb-6 clear-both sm:mb-8">
                            <label htmlFor="message" className={labelClassName}>Wiadomość</label>
                            <textarea name="message" id="message" rows={6} className={`${fieldClassName} h-auto py-3`} required />
                        </div>
                        <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
                            <input type="submit" value="Wyślij" className={`${buttonClassName} bg-white text-navy hover:bg-highlight`} />
                            <input type="reset" value="Wyczyść" className={`${buttonClassName} bg-transparent text-white shadow-[inset_0_0_0_2px_white] hover:text-highlight hover:shadow-[inset_0_0_0_2px_#9bf1ff]`} />
                        </div>
                    </form>
                </section>
                <section className="md:w-2/5 md:pl-12">
                    <section className="relative border-t border-line py-12 md:border-t-0">
                        <div className="relative mb-8 pl-[3.25em]">
                            <ContactIcon type="building" />
                            <h3 className="mb-2 text-[1.25em] leading-[1.65] font-semibold sm:text-[1.35em]">KSW Doradztwo Sp. z o. o.</h3>
                            <span>
                                03-126 Warszawa,
                                <br />
                                ul. Ceramiczna 29a/30
                                <br />
                                +48 (22) 110 76 81
                                <br />
                                +48 663 631 997
                                <br />
                                <a href="mailto:biuro@ksw-doradztwo.pl" className="border-b border-dotted border-current transition-colors hover:border-transparent hover:text-highlight">biuro@ksw-doradztwo.pl</a>
                                <br />
                                <br />
                                Biuro czynne:
                                <br />
                                Pon. - Czw. od 8.00 do 16.30
                                <br />
                                Pt. od 9.00 do 15.00
                            </span>
                        </div>
                    </section>
                    <section className="relative border-t border-line py-12">
                        <div className="relative mb-8 pl-[3.25em]">
                            <ContactIcon type="finance" />
                            <span>
                                NIP: 527-296-96-57
                                <br />
                                REGON: 389866608
                                <br />
                                KRS: 0000919485
                                <br />
                                Licencja nr: 33785/2009
                            </span>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    );
}
