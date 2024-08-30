import React from 'react'
import Feed from '@components/Feed';

const Home = () => {
    return (<section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Learn 
            <br className="max-md:hidden" />
            <span className=" bg-gradient-to-r from-blue-400 via-blue-500 to-blue-100 text-transparent bg-clip-text ">With AI powered Instructors</span>
        </h1>
        <p className="desc text-center">
        This website serves as a comprehensive hub for students, educators, and professionals, providing access to high-quality educational resources, interactive learning tools, and the latest advancements in engineering. 
        </p>
        <Feed/>
    </section>
    )
}
export default Home;