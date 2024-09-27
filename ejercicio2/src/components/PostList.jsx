import React from 'react';
import usePosts from '../hooks/usePosts';
import './PostList.css'; 

const PostList = () => {
    const { posts, loading, error } = usePosts();

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <ul className="post-list">
            {posts.map(post => (
                <li key={post.id} className="post-item">
                    <h3>{post.title}</h3>
                    <p className="post-author">{post.author}</p>
                    <div className="post-meta">
                        <span className="meta-item">
                             {post.reactions} 🗨️  Reacciones 
                        </span>
                        <span className="meta-item">
                             {post.likes} 👍 Likes  
                        </span>
                        <span className="meta-item">
                             {post.views} 👁️Visitas 
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default PostList;