"use client";
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";
import Link from 'next/link';




const Feed = () => {
 
  

  return (
    <section className='feed'>
      
    <Link href="/another-page">
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Let's Get Started</button>
      
    </Link>
  

    </section>
  );
};

export default Feed;