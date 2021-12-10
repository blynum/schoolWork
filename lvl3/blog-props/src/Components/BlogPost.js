import React from "react"

function BlogPost(props) {
    return (
        <div className="blogPost--list">
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
            <h3>{props.author}</h3>
            <p>{props.date}</p>

        </div>
    )
}

export default BlogPost


