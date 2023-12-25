const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createData = new Date(created_at);

  return (
    <div className="user-wrapper">
      <div className="image-wrapper">
        <img src={avatar_url} alt="image" className="user-img" />
      </div>
      <div className="user-link">
        <a href={`https://github.com/${login}`}>{name || login}</a>
      </div>
      <div className="user-description">
        <p>
          {name ? name : "User"} joined on{" "}
          <b>
            {`${createData.getDate()} ${createData.toLocaleString("en-us", {
              month: "short",
            })} ${createData.getFullYear()}`}
          </b>{" "}
        </p>
        <div className="desc public-repos">
          <h3>Public Repos:</h3>
          {public_repos}
        </div>
        <div className="desc followers">
          <h3>Followers:</h3>
          {followers}
        </div>
        <div className="desc following">
          <h3>Following:</h3>
          {following}
        </div>
      </div>
    </div>
  );
};

export default User;
