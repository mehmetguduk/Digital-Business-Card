import React from 'react';
import mehmetguduk from "../images/mehmetguduk.jpg"

export default function Info() {
    return (
        <div className="info">
            <img className="photo" src={mehmetguduk} alt="Mehmet Güdük" />
            <div className='info-container'>
                <h1 className="name">Mehmet Güdük</h1>
                <h2 className="job">Frontend Developer</h2>
                <a className="website" href="https://mehmetguduk.netlify.app/" target="_blank" rel="noreferrer">mehmetguduk.netlify.app</a>
                <a className="button-email" href="mailto:mehmetguduk98@gmail.com" target="_blank" rel="noreferrer">
                    <i class="email-logo fa fa-envelope" aria-hidden="true"></i>
                    Email
                </a>
            </div>

            <span className='change-color'>
                <i class="brush-logo fa fa-paint-brush" aria-hidden="true"></i>
            </span>
        </div>
    )
}