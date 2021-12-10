import React from "react"

function BlogPost(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <h3>{props.author}</h3>
            <h3>{props.date}</h3>
        </div>
    )
}

export default BlogPost


