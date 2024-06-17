// import React from 'react';
// import './Post.css';
// import ProductImage_1 from "../../assets/blog-section/post-1.jpg";
// import ProductImage_2 from "../../assets/blog-section/post-2.jpg";
// import ProductImage_3 from "../../assets/blog-section/post-3.jpg";

// const Post = () => {
//   const posts = [
//     { imgSrc: ProductImage_1, title: 'First Time Home Owner Ideas', author: 'Kristin Watson', date: 'Dec 19, 2021' },
//     { imgSrc: ProductImage_2, title: 'How To Keep Your Furniture Clean', author: 'Robert Fox', date: 'Dec 15, 2021' },
//     { imgSrc: ProductImage_3, title: 'Small Space Furniture Apartment Ideas', author: 'Kristin Watson', date: 'Dec 12, 2021' }
//   ];

//   return (
//     <div className="recent-blog">
//       <div className="header">
//         <h2>Recent Blog</h2>
//         <a href="#view-all-posts" className="view-all">View All Posts</a>
//       </div>
//       <div className="posts">
//         {posts.map((post, index) => (
//           <div key={index} className="post-item">
//             <img src={post.imgSrc} alt={post.title} className="post-image" />
//             <h3>{post.title}</h3>
//             <p>by {post.author} on {post.date}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Post;


import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostRequest } from '../../redux/postActions';
import './Post.css';
const Post = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts(); // Fetch posts when component mounts
  }, [fetchPosts]);

  return (
    <div className="recent-blog">
      <div className="header">
        <h2>Recent Blog</h2>
        <a href="#view-all-posts" className="view-all">View All Posts</a>
      </div>
      <div className="posts">
        {posts.map((post, index) => (
          <div key={index} className="post-item">
            <img src={post.imgSrc} alt={post.title} className="post-image" />
            <h3>{post.title}</h3>
            <p>by {post.author} on {post.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

const mapDispatchToProps = {
  fetchPosts: fetchPostRequest, // Map fetchPostRequest action creator to props,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
