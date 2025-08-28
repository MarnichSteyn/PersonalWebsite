import { useState, useEffect } from 'react';
import { useAuth } from '../context/Authentication.jsx';
import Modal from '../components/Modal';
import '../styles/Blog.css';

const initialPosts = [
    {
        id: 1,
        title: "First Steps into Web Development",
        content: "My journey began with a simple 'Hello, World!' in HTML. From there, I delved into CSS to style my pages and then JavaScript to make them interactive. Learning React has been a game-changer, allowing me to build complex, component-based user interfaces. This portfolio is a testament to that journey, showcasing the skills I've developed along the way.",
        date: "2024-01-15"
    },
    {
        id: 2,
        title: "The Power of Python in Data Science",
        content: "Python has become my go-to language for everything from scripting to complex data analysis. Its simplicity and the vast ecosystem of libraries like Pandas, NumPy, and Scikit-learn make it incredibly powerful. I'm particularly fascinated by its application in machine learning and am currently exploring neural networks and deep learning concepts.",
        date: "2024-03-22"
    }
];

function Blog() {
    
    const { isAuthenticated } = useAuth();
    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem('blogPosts');
        return savedPosts ? JSON.parse(savedPosts) : initialPosts;
    });

    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [editingPost, setEditingPost] = useState(null);

    useEffect(() => {
        localStorage.setItem('blogPosts', JSON.stringify(posts));
    }, [posts]);

    const handleViewPost = (post) => {
        setSelectedPost(post);
        setIsViewModalOpen(true);
    };

    const handleAddPost = () => {
        setEditingPost({ id: null, title: '', content: '' });
        setIsFormModalOpen(true);
    };

    const handleEditPost = (post) => {
        setEditingPost(post);
        setIsFormModalOpen(true);
    };

    const handleDeletePost = (postId) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            setPosts(posts.filter(post => post.id !== postId));
        }
    };

    const handleSavePost = (e) => {
        e.preventDefault();
        const { title, content } = editingPost;
        
        if (editingPost.id) {
            setPosts(posts.map(post => post.id === editingPost.id ? { ...post, title, content } : post));
        } else {
            const newPost = {
                id: Date.now(),
                title,
                content,
                date: new Date().toISOString().split('T')[0]
            };
            setPosts([newPost, ...posts]);
        }
        setIsFormModalOpen(false);
        setEditingPost(null);
    };

    return (
        <div className="blog-page">
            <div className="blog-header">
                <h1>Blog</h1>
                {isAuthenticated && (
                    <button onClick={handleAddPost} className="add-post-button">Add New Post</button>
                )}
            </div>

            <div className="blog-list">
                {posts.map(post => (
                    <div key={post.id} className="blog-post-item">
                        <div className="blog-post-content" onClick={() => handleViewPost(post)}>
                            <h2>{post.title}</h2>
                            <p>{post.content.substring(0, 150)}...</p>
                            <span>{post.date}</span>
                        </div>
                        {isAuthenticated && (
                            <div className="blog-post-actions">
                                <button onClick={() => handleEditPost(post)}>Edit</button>
                                <button onClick={() => handleDeletePost(post.id)}>Delete</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <Modal isOpen={isViewModalOpen} onClose={() => setIsViewModalOpen(false)}>
                {selectedPost && (
                    <div className="blog-view-modal">
                        <h1>{selectedPost.title}</h1>
                        <span>{selectedPost.date}</span>
                        <p>{selectedPost.content}</p>
                    </div>
                )}
            </Modal>

            <Modal isOpen={isFormModalOpen} onClose={() => setIsFormModalOpen(false)}>
                {editingPost && (
                    <form onSubmit={handleSavePost} className="blog-form">
                        <h2>{editingPost.id ? 'Edit Post' : 'Add New Post'}</h2>
                        <input
                            type="text"
                            placeholder="Post Title"
                            value={editingPost.title}
                            onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                            required
                        />
                        <textarea
                            placeholder="Post Content"
                            value={editingPost.content}
                            onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                            required
                        />
                        <button type="submit">Save Post</button>
                    </form>
                )}
            </Modal>
        </div>
    );
}

export default Blog;