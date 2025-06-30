import React from 'react';

function Videos() {
    const nonr = "noopener noreferrer";
    const ytURL = "https://www.youtube.com/@southpaw8347";
    return (
        <div>
            <header>
                <h1>My Videos</h1>
                <h3>Below are links to videos from my <a href={ytURL} target={"_blank"} rel={nonr}>YouTube Channel</a>.</h3>
            </header>
            <ul style={{listStyle: 'none', marginTop: '.5rem'}}>
                <li><a href={"https://youtu.be/RUX8OYi81Y8"} target={"_blank"} rel={nonr}>Add an Application to Linux
                    'Favorites' Bar</a>
                    <ul style={{listStyle: 'none', marginBottom: '.5rem'}}>
                        <li>Some applications that run in Linux unfortunately don't allow the user to pin that
                            application to their Favorites bar. This video walks you through the creation of a <a
                                href={"https://github.com/southP4w/handy-commandy/blob/main/.bash_scripts/favorite.sh"}
                                target={"_blank"} rel={nonr}>script</a> to
                            add any application to the Favorites bar in Ubuntu.
                        </li>
                        <li>
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/RUX8OYi81Y8?si=Vza4pye2zBL-5f2K"
                                    title="Add Application to Linux Favorites" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </li>
                    </ul>
                </li>
                <li><a href={"https://youtu.be/oDAv6Ft-kdo"} target={"_blank"} rel={nonr}>Build a Calculator</a>
                    <ul style={{listStyle: 'none', marginBottom: '.5rem'}}>
                        <li>A video tutorial showing you how to build a standard calculator in Java/JavaFX using Stacks
                            and Queues.
                        </li>
                        <li>
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/oDAv6Ft-kdo"
                                    title="Calculator in Java/JavaFX"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </li>
                    </ul>
                </li>
            </ul>
            <p>More to come.</p>
        </div>
    );
}

export default Videos;