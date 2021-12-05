/* Putting BlogList in its own component makes it more reusable than it would be if it were just in Home */ 
/* Destructuring is another way of getting the props */
 const BlogList = ({blogs, title, handleDelete}) => {
    // const blogs = props.blogs;
    /* templating for objects using map instead of hardcoding */
    /* To ensure that the each blog-preview can be differentiated, we include a unique key */

    /* Recall that every component's template needs to be encased in a div */
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                        <h2>{blog.name}</h2>
                        <p>Written by {blog.author}</p>
                        {/* We don't want to directly mutate props here; rather, we should use the setter for the state */}
                        {/* Hence, deletion should be implemented in Home.js instead */}

                        <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                </div>
            ))}
        </div>
    );
 }

 export default BlogList;