import React from "react";

const Blog = () => {
  return (
    <div className="container mt-3">
      <h1 className="text-center text-info">Question Ans:-</h1>
      <div className=" d-block mx-auto   bg-light mt-4 p-3">
        <h4>Difference between javascript and nodejs?</h4>
        <p>
          Ans:javascript: JavaScript is a programming language. It is running in
          any web browser with a proper browser engine.JavaScript running any
          engine like Spider monkey (FireFox), JavaScript Core (Safari), V8
          (Google Chrome).
        </p>{" "}
        <br /> Vs
        <p>
          Ans:nodejs:It is an interpreter and environment for JavaScript with
          some specific useful libraries which JavaScript programming can use
          separately.Node JS only run in a V8 engine which mainly used by google
          chrome. And javascript program which will be written under this Node
          JS will be always run in V8 Engine.
        </p>
      </div>
      <div className=" d-block mx-auto   bg-light mt-4 p-3">
        <h4>When should you use nodejs and when should you use mongodb?</h4>

        <p>
          Use Mongodb:-NoSQL databases like MongoDB are a good choice when your
          data is document-centric and doesn't fit well into the schema of a
          relational database, when you need to accommodate massive scale, when
          you are rapidly prototyping, and a few other use case
        </p>
        <br />
        <p>
          Use Node js:Node. js is primarily used for non-blocking, event-driven
          servers, due to its single-threaded nature. It's used for traditional
          web sites and back-end API services, but was designed with real-time,
          push-based architectures in mind.
        </p>
      </div>
      <div className=" d-block mx-auto   bg-light mt-4 p-3">
        <h4> Differences between sql and nosql databases.?</h4>
        <p>
          Ans:SQL databases have fixed or static or predefined schema. NoSQL
          databases have dynamic schema. SQL databases display data in form of
          tables so it is known as table-based database. NoSQL databases display
          data as collection of key-value pair, documents, graph databases or
          wide-column stores.
        </p>
      </div>
      <div className=" d-block mx-auto   bg-light mt-4 p-3">
        <h4> What is the purpose of jwt and how does it work.?</h4>
        <p>
          Ans:JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </p>
      </div>
    </div>
  );
};

export default Blog;
