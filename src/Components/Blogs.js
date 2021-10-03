import React from "react";

import "./Blogs.css"

class Blogs extends React.Component {

    state = {
        isLoaded: false,
        data: []
    }

    componentDidMount() {
        fetch("https://dev.to/api/articles?username=livesamarthgupta")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                data: result
              });
            },
            (error) => {
              console.log("Error Occured! " + error);
            }
          )
      }

    blogGenerator = (blogItems) => {
        return blogItems.map(item => (
            <div className="ui card" key={item.id}>
                <div className="content">
                    <div className="right floated meta">{item.readable_publish_date}</div>
                    <img className="ui avatar image" src={item.user.profile_image_90} alt="User Profile" /> {item.user.name}
                </div>
                <a className="image" href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.cover_image} alt={item.title}/>
                </a>
                <div className="description marginal">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </div>
                <div className="content">
                    <span className="right floated">
                        <i className="heart outline like icon"></i>
                        {item.public_reactions_count}
                    </span>
                    <i className="comment icon"></i>
                    {item.comments_count}
                </div>
            </div>
       ))
    }

    render() {
        return (
            <div className="container cards" >
                {this.blogGenerator(this.state.data)}
            </div>
        )
    }

}

export default Blogs;