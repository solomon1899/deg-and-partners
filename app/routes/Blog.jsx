import React from "react";

const Blog = () => {
  return (
    <div className="blogs-container">
      <div className="blog-header">
        <h2 style={{ paddingBottom: "3vh" }}>Notre Blog</h2>
        <a href="http://blog.degandpartners.com/fr/community/deg-and-partners-consulting-company/4">Voir Plus</a>
      </div>
      <div className="all-blogs">
        <div className="blog-item">
          <img src="https://s3.tamtam.pro/prod/storage/media/IMAGE/33523/8a0f734521d878479defbb0d83156cdaca391bc4.jpeg" />
        </div>
        <div className="blog-item">
          <img src="https://s3.tamtam.pro/prod/storage/media/IMAGE/33523/8a0f734521d878479defbb0d83156cdaca391bc4.jpeg" />
        </div>
        <div className="blog-item">
          <img src="https://s3.tamtam.pro/prod/storage/media/IMAGE/33523/8a0f734521d878479defbb0d83156cdaca391bc4.jpeg" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
