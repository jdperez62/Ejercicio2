import { useState, useEffect } from 'react';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulación de una llamada a una API
    const fetchPosts = () => {
      setTimeout(() => {
        try {
          const mockData = [
            {
                id: 1,
                title: 'Post 1',
                author: 'Autor 1',
                likes: 120,
                views: 300,
                reactions: 45,
            },
            {
                id: 2,
                title: 'Post 2',
                author: 'Autor 2',
                likes: 85,
                views: 150,
                reactions: 30,
            },
            {
                id: 3,
                title: 'Post 3',
                author: 'Autor 3',
                likes: 50,
                views: 250,
                reactions: 90,
            },
          ];
          setPosts(mockData);
          setLoading(false);
        } catch (err) {
          setError('Error al cargar los posts');
          setLoading(false);
        }
      }, 1000);
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default usePosts;