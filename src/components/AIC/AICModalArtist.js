import React from "react";

// TODO: Refactor component to map instead of typing out each one.

export default function AICModalArtist(props) {
    var data = props.data.data;

    console.log(data);

    if (data == undefined) {
        return <section><p>No information available</p></section>
    }

    return (
        <section>
            { data.title && <p><strong>Name: </strong>{data.title}</p> }
            { data.alt_titles && <p><strong>Other Names: </strong>{data.alt_titles.join(', ')}</p>}
            { data.birth_date && <p><strong>Birth Date: </strong>{data.birth_date}</p>}
            { data.birth_place && <p><strong>Birth Location: </strong>{data.birth_place}</p>}
            { data.death_date && <p><strong>Death Date: </strong>{data.death_date}</p>}
            { data.death_place && <p><strong>Death Location: </strong>{data.death_place}</p>}
            { data.description && <div dangerouslySetInnerHTML={{__html: data.description}} /> } 
        </section>
    )
}