import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    /* Using array destructuring to obtain the value of the variable as well as a setter */
    /* Any type can be used as state for useState */
    const [name, setName] = useState("Mario");
    const [age, setAge] = useState(25);

    /* If we want to have objects as state, using the map function is useful */ 
    const [blogs, setBlogs] = useState([{name: "Blog 1", author: "Bob", id: 1}, {name: "Blog 2", author: "Ben", id: 2}, {name: "Blog 3", author: "Bart", id: 3}]);


    const handleClick = (e) => {
        console.log("Button pressed", e);
        console.log("You pressed: (%d, %d)", e.clientX, e.clientY);
        setName("Luigi");
        setAge(10);
    }

    const handleClickAgain = (param, e) => {
        console.log("Handling click with " + param);
        console.log("Event parameter " + e.target);
    }

    // The blog deletion functionality is a prop that is handled in Home.js where the blogs' data is located
    const handleDelete = (id) => {
        // we pass in the id and simply filter out the blog we don't want; then, we call setState
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // useEffect() doesn't require being stored in a variable
    // Important: make  sure not to change the state in the useEffect hook; this could trigger an infinite loop
    // Passing in a dependency array changes the frequency at which useEffect is called
    useEffect(() => {
        console.log("re-rendered")
    });

    return (
        <div className="Home">
            <h1>Content here</h1>
            <h2>{ name } is { age }.</h2>
            {/* Only pass in the reference to the function, not a function call; otherwise, the function would fire right away */}
            {/* We can't directly pass in an argument to the onClick function. We need to wrap it in an anonymous function */}
            <button onClick={handleClick}>Click me!</button>
            {/* The click event is passed to the anonymous function wrapper */}
            <button onClick={(e) => handleClickAgain("Test", e)}>Click this other button</button>

            {/* Here we want to pass in a property so that BlogList has access to the blogs state that is here */}
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
            {/* Reusable components makes this process very easy */}
            <BlogList blogs={blogs.filter((blog) => blog.author === "Ben")} title="Ben's blogs" handleDelete={handleDelete} />
        </div>
    );


}

export default Home;