import React from "react";

export default function AICModalDetails(props) {
    var data = props.data.data;

    return (
        <section>
            <p>
                <strong>Title: </strong>
                {data.title}
            </p>
            <p>
                <strong>Medium: </strong>
                {data.medium_display}
            </p>
            <p>
                <strong>Artist(s): </strong>
                {data.artist_display}
            </p>
            <p>
                <strong>Created: </strong>
                {data.date_display}
            </p>
            <p>
                <strong>Place of Origin: </strong>
                {data.place_of_origin}
            </p>
            <p>
                <strong>Dimensions: </strong>
                {data.dimensions}
            </p>
            <p>
                <strong>Inscriptions: </strong>
                {data.inscriptions ? data.inscriptions : "None"}
            </p>
            <p>
                <strong>Credits: </strong>
                {data.credit_line}
            </p>
        </section>
    )
}