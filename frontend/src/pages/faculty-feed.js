import React, { useEffect } from "react";
import Body from "../components/Body";
import feedpic1 from "./img/feedpic1.jpeg";
import feedpic2 from "./img/feedpic2.png";
import feedpic3 from "./img/feedpic3.png";
import "./FeedPage.css";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'

function FacultyFeed(props) {
    console.log(props.currentUser)
  return (
    <Container>
      <>
        {props.currentUser.is_staff === false ? (
          <>
          <Alert variant="warning">
              You do not have acces to this content <Link to={"/login/options"}>login as a student</Link>
            </Alert>
            
          </>
        ) : (
          <>
            {props.token == null || props === "" ? (
              <Alert variant="warning">
                You are not logged in. Please{" "}
                <Link to={"/login/options"}>login</Link>
              </Alert>
            ) : (
              <>
                <Body sidebarFaculty>
                    <section class="SchoolNews">
                    <div class="main_container">
                        <h2 class="news-title">School News</h2>
                        <div class="row">
                        <div class="ct-blog col-sm-6 col-md-4">
                            <div class="inner">
                            <div class="crop">
                                <img alt="News Entry" src={feedpic1} />
                            </div>
                            <div class="ct-blog-content">
                                <div class="ct-blog-date">
                                <span>May </span>
                                <strong>1</strong>
                                </div>
                                <h3 class="ct-blog-header">
                                5 tips manage your time while balancing school and work!
                                </h3>
                            </div>
                            </div>
                        </div>
                        <div class="ct-blog col-sm-6 col-md-4">
                            <div class="inner">
                            <div class="crop">
                                <img alt="News Entry" src={feedpic2} />
                            </div>
                            <div class="ct-blog-content">
                                <div class="ct-blog-date">
                                <span>April </span>
                                <strong>27</strong>
                                </div>
                                <h3 class="ct-blog-header">
                                Star Student selected to represent Capstone University in
                                academic competition.
                                </h3>
                            </div>
                            </div>
                        </div>
                        <div class="ct-blog col-sm-6 col-md-4">
                            <div class="inner">
                            <div class="crop">
                                <img alt="News Entry" src={feedpic3} />
                            </div>
                            <div class="ct-blog-content">
                                <div class="ct-blog-date">
                                <span>April </span>
                                <strong>25</strong>
                                </div>
                                <h3 class="ct-blog-header">
                                Event Calendar for Fall 2022 Semester
                                </h3>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                </Body>
              </>
            )}
          </>
        )}
      </>
    </Container>
  );
}

export default FacultyFeed;
