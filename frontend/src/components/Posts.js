export default function Posts() {
    const posts = [
      {
        id: 1,
        text: 'Hello, world! The content for the ' +
        'user will be shown here, once the user has login',
        timestamp: 'a minute ago',
        author: {
          username: 'Franklin',
        },
      },
      {
        id: 2,
        text: 'Second post',
        timestamp: 'an hour ago',
        author: {
          username: 'Kyle',
        },
      },
    ];
  
    return (
      <>
        {posts.length > 0 ?
          posts.map(post => {
            return (
              <p key={post.id}>
                <b>{post.author.username}</b> &mdash; {post.timestamp}
                <br />
                {post.text}
              </p>
            );
          })
        :
          <p>There are no blog posts.</p>
        }
      </>
    );
  }