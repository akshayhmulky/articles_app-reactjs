import React from 'react';
import './Articles.css';

function Articles({ articles }) {
  //   console.log('inside Articles tab', articles);

  return (
    <div className="card w-50 mx-auto">
      <table className="articletable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Upvotes</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {articles &&
            articles.map((article, index) => (
              <tr className="article" key="article-index" key={index}>
                <td className="article-title">{article.title}</td>
                <td className="article-upvotes">{article.upvotes}</td>
                <td className="article-date">{article.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Articles;
