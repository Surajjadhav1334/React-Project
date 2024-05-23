import React, {useState, useEffect} from 'react'
import appwriteService from "../appwrite/config"
import {Container, PostCard} from "../components"
function Allpost() {
    const [posts, setPosts] =useState([])
    useEffect(() => {}, [])
    appwritrService.getPosts([]).then((posts) => {
        setPosts(posts.documents)
    })
  return (
    <div className='w-full py-8'>
     <Container>
      <div className='flex flex-wrap'>
        {posts.map((post) => {
            <div key={post.$id} className='p-2 w-1/2'>
                <PostCard post={post}/>
            </div>
        })}
      </div>
     </Container>
    </div>
  )
}

export default Allpost
