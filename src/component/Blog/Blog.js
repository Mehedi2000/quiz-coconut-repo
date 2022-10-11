import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='mt-10'>
            <h1 className='mb-10 text-4xl font-bold'>Welcome To My Blog!!!</h1>
            <div className='w-3/5 mx-auto'>
                <div className='border-2 border-gray-300 p-10 bg-orange-200 rounded-lg'>
                    <p className='text-2xl font-bold'>1.What is the Purpose of react router?</p>
                    <p className='font-medium'><span className='text-xl font-semibold'>Answer : </span>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file,
                        the user will be redirected to that particular route.React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                </div>
                <div className='border-2 border-gray-300 p-10 rounded-lg mt-2 bg-green-200'>
                    <p className='text-2xl font-bold'>2.How does Context API Works?</p>
                    <p className='font-medium'><span className='text-xl font-semibold'>Answer :</span>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier,
                        lighter approach to state management using React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                </div>
                <div className='border-2 border-gray-300 p-10 rounded-lg mt-2 bg-violet-300'>
                    <p className='text-2xl font-bold'>3.Describe UseRef Hook?</p>
                    <p className='font-medium'><span className='text-xl font-semibold'>Answer :</span>The hook useRef() in React returns an object that has a property current that we can access as we do with objects. This property is initialized to the passed argument in the function useRef() . The returned object will persist for the full lifetime of the component.
                        The hook useRef() accepts one argument, which is the value to initialize the property current in the returned object.
                        In order to use the hook useRef , you will have to import it from the React package first.One of the most common use cases of the hook useRef in React is to reference a DOM element.
                        Since every DOM element has a property ref , we can use the hook useRef for setting a ref to that element.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;