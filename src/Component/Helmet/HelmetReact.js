import React from 'react';
import {useLocation} from "react-router-dom";
import {Helmet} from "react-helmet";

function HelmetComponent({description, title}) {
    const location = useLocation()

    return (
        <Helmet
            title={title}
            meta={[
                {"name": "description", "content": description},
                {"property": "og:type", "content": "article"}
            ]}
            link={[
                {"rel": "canonical", "href": location.pathname},
            ]}
        />
    );
}

export default HelmetComponent;