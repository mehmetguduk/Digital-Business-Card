import React from 'react';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='socials-container'>
                <a className="social" href="https://www.linkedin.com/in/mehmetguduk/" target="_blank" rel="noreferrer">
                    <i class="social-logo fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a className='social' href="https://github.com/mehmetguduk" target="_blank" rel="noreferrer">
                    <i class="social-logo fa fa-github-square" aria-hidden="true"></i>
                </a>
            </div>
        </footer>
    )
}