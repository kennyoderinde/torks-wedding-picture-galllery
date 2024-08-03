import React from 'react';

export default function Cards(props) {
    const { item } = props;
    
    return (
        <div className='card font-quicksand'>
            <section className='column-left font-quicksand '>
                <img className="card-img" src={item.coverImg} alt={item.title} />
            </section>
            <section className='column-right'>
                <span className='material-symbols-outlined'>location_on</span>
                <span className="card-country">{item.country}</span>
                <a href={item.googleMapLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                <h3 className="card-country-title">{item.title}</h3>
                <h4 className="card-date">{item.date}</h4>
                <p>{item.description}</p>
                <span>Read more..</span>
            </section>
        </div>
    );
}
