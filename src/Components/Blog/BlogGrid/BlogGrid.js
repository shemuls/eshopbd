import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import BlogPost from "./BlogPost.js";
import Skeleton from "react-loading-skeleton";

const BlogGrid = ({ count = 6 }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const url = `https://dummyapi.io/data/v1/post?limit=${count}`;
    fetch(url, {
      method: "GET",
      headers: { "app-id": "61ea37a72dc51138956cbf9c" },
    })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <Row>
      {!loading ? (
        posts.data.map((sPost) => (
          <Col key={sPost.id} lg={4} md={6} sm={6} xs={12}>
            <BlogPost post={sPost} loading={loading} />
          </Col>
        ))
      ) : (
        <>
          <Col lg={4} md={6} sm={6} xs={12}>
            <Skeleton style={{ height: "240px" }} />
            <Skeleton style={{ height: "30px" }} />
            <Skeleton style={{ height: "80px" }} />
          </Col>
          <Col lg={4} md={6} sm={6} xs={12}>
            <Skeleton style={{ height: "240px" }} />
            <Skeleton style={{ height: "30px" }} />
            <Skeleton style={{ height: "80px" }} />
          </Col>
          <Col lg={4} md={6} sm={6} xs={12}>
            <Skeleton style={{ height: "240px" }} />
            <Skeleton style={{ height: "30px" }} />
            <Skeleton style={{ height: "80px" }} />
          </Col>
        </>
      )}
    </Row>
  );
};

export default BlogGrid;
