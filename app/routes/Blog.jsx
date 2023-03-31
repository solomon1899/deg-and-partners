import React from "react";

const Blog = () => {
  return (
    <div className="blogs-container">
      <div className="blog-header">
        <h2 style={{ paddingBottom: "3vh" }}>Notre Blog</h2>
        <a href="http://blog.degandpartners.com/fr/community/deg-and-partners-consulting-company/4">
          Voir Plus
        </a>
      </div>
      <div className="all-blogs">
        <div className="blog-item">
          <img
            className="blog-photo"
            src="https://s3.tamtam.pro/prod/storage/media/IMAGE/33745/1d7aa188caed0a7300bf95fcb22eb2422ae5e791.jpeg"
          />
          <p>
            <span style={{ fontFamily: "Oxygen", fontSize: 12, opacity: 0.7 }}>
              27-03-2023 <span style={{ color: "orange" }}> |</span> Fiscalité{" "}
            </span>
            <br />
            <a
              className="blog-text"
              href="https://blog.degandpartners.com/fr/article/comment-la-politique-comprendra-que-le-travail-nest-plus-une-vache-a-lait-/18273"
            >
              Versements anticipés 2022 trop élevés? Réagissez avant avril 2023!
            </a>
            <br />
            <a className="blog-link" href="https://blog.degandpartners.com/fr/article/comment-la-politique-comprendra-que-le-travail-nest-plus-une-vache-a-lait-/18273">Lire la suite</a>
          </p>
        </div>
        <div className="blog-item">
          <img
            className="blog-photo"
            src="https://s3.tamtam.pro/prod/storage/media/IMAGE/33523/8a0f734521d878479defbb0d83156cdaca391bc4.jpeg"
          />
          <p>
            <span style={{ fontFamily: "Oxygen", fontSize: 12, opacity: 0.7 }}>
              27-03-2023 <span style={{ color: "orange" }}> |</span> Fiscalité{" "}
            </span>
            <br />
            <a
              className="blog-text"
              href="https://blog.degandpartners.com/fr/article/comment-la-politique-comprendra-que-le-travail-nest-plus-une-vache-a-lait-/18273"
            >
              Comment la politique comprendra que le travail n’est plus une
              vache à lait ?
            </a>
            <br />
            <a className="blog-link" href="https://blog.degandpartners.com/fr/article/comment-la-politique-comprendra-que-le-travail-nest-plus-une-vache-a-lait-/18273">Lire La suite</a>
          </p>
        </div>
        <div className="blog-item">
          <img
            className="blog-photo"
            src="https://s3.tamtam.pro/prod/storage/media/IMAGE/33359/b3db6e89218c58b5f70d1490705fedf0f138417b.jpeg"
          />
          <p>
            <span style={{ fontFamily: "Oxygen", fontSize: 12, opacity: 0.7 }}>
              27-03-2023 <span style={{ color: "orange" }}> |</span> Fiscalité{" "}
            </span>
            <br />
            <a
              className="blog-text"
              href="https://blog.degandpartners.com/fr/article/comment-la-politique-comprendra-que-le-travail-nest-plus-une-vache-a-lait-/18273"
            >
              ​Le délai de la déclaration IPP est tombé !
            </a>
            <br />
            <a className="blog-link" href="https://blog.degandpartners.com/fr/article/comment-la-politique-comprendra-que-le-travail-nest-plus-une-vache-a-lait-/18273">Lire La suite</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
