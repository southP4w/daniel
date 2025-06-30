import React from 'react';

function Projects() {
    const nonr = "noopener noreferrer";
    const gitURL = "https://github.com/southp4w/";
    return (
        <div>
            <header>
                <h1>My Projects</h1>
                <p>Below are links to some programming projects from my <a href={gitURL} target={"_blank"}
                                                                           rel={nonr}>GitHub</a>.</p>
            </header>
            <ul>
                <li><a href={gitURL + "Library-System"} target={"_blank"} rel={nonr}>Library-System</a> – A mock book
                    rental system for a library.
                </li>
                <li><a href={gitURL + "natural-language-processing"} target={"_blank"}
                       rel={nonr}>natural-language-processing</a> – Simple N-Grams, a simple Naive Bayes classifier, and
                    a Multinomial Classifier (using HuggingFace Transformers).
                </li>
                <li><a href={gitURL + "Calculator"} target={"_blank"} rel={nonr}>Calculator</a> – A Calculator in Java +
                    JavaFX, built using stacks and queues.
                </li>
            </ul>
        </div>
    );
}

export default Projects;