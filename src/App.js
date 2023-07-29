function App() {
  const title = 'Blog Post';
  const body = 'This is my blog post';

  const comments = [
    { id: 1, text: 'Comment one' },
    { id: 2, text: 'Another comment' },
    { id: 3, text: 'more than just two' },
  ];

  const loading = false;
  const showComments = true;

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className='container'>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>5 + 5 = {5 + 5}</p>
      <p>Random Number: {Math.random() * 10}</p>
      {showComments && (
        <>
          <h2>{title.toUpperCase()}</h2>
          <div className='comments'>
            <h3>Comments ({comments.length})</h3>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment.text}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
