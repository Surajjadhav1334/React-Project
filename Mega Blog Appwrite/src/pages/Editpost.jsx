import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {   useNavigate } from 'react-router-dom'
import {Container, Postform } from '../components'
import appwriteService from "../appwrite/config"
import { Navigate, useParams } from 'react-router-dom'
function Editpost() {
    const [post, setPosts] = useState(null)
    const {} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getposts(slug0.then((post) => {
                if (post) {
                    setPosts(post)
                }
            }))
        }
        else
        {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <Postform post={post} />
        </Container>
    </div>
  ) : null
 }

export default Editpost
