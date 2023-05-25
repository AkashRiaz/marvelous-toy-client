import React from "react";
import useTitle from "../../../hooks/useTitle";

const Blogs = () => {
  useTitle("blogs");
  return (
    <div className="my-16">
      <div className="bg-gray-100 lg:p-10 p-4 rounded-xl mb-10">
        <h2 className="font-semibold text-3xl my-3">
          1.What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h2>
        <p className="text-lg">
          {" "}
          <span className="font-bold">Access Token:</span> Access tokens are
          used in token-based authentication to allow an application to access
          an API. The application receives an access token after a user
          successfully authenticates and authorizes access, then passes the
          access token as a credential when it calls the target API. The passed
          token informs the API that the bearer of the token has been authorized
          to access the API and perform specific actions specified by the Scope
          that was granted during authorization. In addition, if you have chosen
          to allow users to log in through an Identity Provider (IdP), such as
          Facebook, the IdP will issue its own access token to allow your
          application to call the IDP's API. For example, if your user
          authenticates using Facebook, the access token issued by Facebook can
          be used to call the Facebook Graph API. These tokens are controlled by
          the IdP and can be issued in any format. JSON Web Token (JWT) access
          tokens conform to the JWT standard and contain information about an
          entity in the form of claims. They are self-contained therefore it is
          not necessary for the recipient to call a server to validate the
          token. Access tokens issued for the Management API and access tokens
          issued for any custom API that you have registered with Auth0 follow
          the JWT standard, which means that their basic structure conforms to
          the typical JWT structure, and they contain standard JWT claims
          asserted about the token itself.
        </p>
        <p>
          <span className="font-bold">Refresh Token:</span> A refresh token is a
          special token that is used to obtain additional access tokens. This
          allows you to have short-lived access tokens without having to collect
          credentials every time one expires. You request a refresh token
          alongside the access and/or ID tokens as part of a user's initial
          authentication and authorization flow. Applications must then securely
          store refresh tokens since they allow users to remain authenticated.
          For clients such as native apps, persistent refresh tokens help
          improve a user's authentication experience. For example, persistent
          refresh tokens allow a user to access streaming video services on
          their smart TV without signing in after they complete the initial
          device authorization. With persistent refresh token behavior, the same
          refresh token is returned each time the client makes a request to
          exchange a refresh token for a new access token until the refresh
          token lifetime expires
        </p>
        <p>
          <span className="font-bold">Work:</span>Why do refresh tokens matter,
          and does a client need to exchange them for a new access token? The
          main reason why refresh tokens exist is because most access tokens
          don't live forever. That is to say, an access token may expire after a
          specific period of time like a few hours or days. Hence, in order to
          avoid requesting that the client perform an activity like entering a
          username and password to retrieve a new access token, you can use
          refresh tokens to get a new access token. Refresh tokens matter a lot
          because they can improve the user experience and the general security
          of an application. On the side of user experience, imagine forcing
          your users to log in every time they return to your application after
          the access token expires. Most popular services seamlessly allow users
          to return to their previous session by silently generating new access
          tokens using refresh tokens.
        </p>
        <p>We should store them HTTP only cookies</p>
      </div>
      <div className="bg-gray-100 lg:p-10 p-4 rounded-xl mb-10">
        <h2 className="font-semibold text-3xl my-3">
          2.Compare SQL and NoSQL databases?
        </h2>
        <p className="text-lg">
          <span className="font-bold">SQL Database</span> SQL is a
          domain-specific language used to query and manage data. It works by
          allowing users to query, insert, delete, and update records in
          relational databases. SQL also allows for complex logic to be applied
          through the use of transactions and embedded procedures such as stored
          functions or views
        </p>
        <p>
          <span className="font-bold">NoSQL Database</span>NoSQL stands for Not
          only SQL. It is a type of database that uses non-relational data
          structures, such as documents, graph databases, and key-value stores
          to store and retrieve data. NoSQL systems are designed to be more
          flexible than traditional relational databases and can scale up or
          down easily to accommodate changes in usage or load. This makes them
          ideal for use in applications
        </p>
        <p className="font-bold">Comparison</p>
        <p>
          1.Stands for Structured Query Language. 1.Stands for Not Only SQL
          2.Relational database management system (RDBMS). 2.Non-relational database
          management system. 3.Suitable for structured data with predefined schema
          3.Suitable for unstructured and semi-structured data. 4.Data is stored in
          tables with columns and rows. 4.Data is stored in collections or
          documents. 5.Follows ACID properties (Atomicity, Consistency, Isolation,
          Durability) for transaction management. 5.Does not necessarily follow
          ACID properties. 6.Supports JOIN and complex queries. 6.Does not support
          JOIN and complex queries. 7.Uses normalized data structure. 7.Uses
          denormalized data structure. 8.Requires vertical scaling to handle large
          volumes of data. 8.Horizontal scaling is possible to handle large volumes
          of data. 9.Examples: MySQL, PostgreSQL, Oracle, SQL Server, Microsoft SQL
          Server. 9.Examples: MongoDB, Cassandra, Couchbase, Amazon DynamoDB, Redis
        </p>
      </div>
      <div className="bg-gray-100 lg:p-10 p-4 rounded-xl mb-10">
        <h2 className="font-semibold text-3xl my-3">
          3.What is express js? What is Nest JS?
        </h2>
        <p className="text-lg">
          <span className="font-bold">Express Js: </span> Express.js is the most
          popular web framework for Node.js. It is designed for building web
          applications and APIs and has been called the de facto standard server
          framework for Node.js. Building a backend from-scratch for an
          application in Node.js can be tedious and time consuming. From setting
          up ports to route handlers, writing all of the boilerplate code takes
          away from what really matters, which is writing the business logic for
          an application. By using web frameworks like Express.js, developers
          can save time and focus on other important tasks
        </p>
        <p className="text-lg">
          {" "}
          <span className="font-bold">Next Js: </span>Next.js is a front-end
          framework that makes it easy to build fast websites with React—which
          is a free and open-source front-end JavaScript library for building
          user interfaces based on UI components. Being one of the most popular
          front-end frameworks, React has become a developer favorite. Standard
          use cases for React are modern stack websites and single-page
          applications (SPAs). The former spans multiple pages, like a
          traditional website, but is implemented with a modern framework—while
          the latter provides an app-like user experience by updating the
          current page, rather than loading new pages from a server
        </p>
      </div>
      <div className="bg-gray-100 lg:p-10 p-4 rounded-xl mb-10">
        <h2 className="font-semibold text-3xl my-3">
          4.What is MongoDB aggregate and how does it work?
        </h2>
        <p className="text-lg">
          In MongoDB, aggregation operations process the data records/documents
          and return computed results. It collects values from various documents
          and groups them together and then performs different types of
          operations on that grouped data like sum, average, minimum, maximum,
          etc to return a computed result. It is similar to the aggregate
          function of SQL. MongoDB provides three ways to perform aggregation
          1.Aggregation pipeline 2.Map-reduce function 3.Single-purpose
          aggregation.
        </p>
        <p className="text-lg">
          In MongoDB, the aggregation pipeline consists of stages and each stage
          transforms the document. Or in other words, the aggregation pipeline
          is a multi-stage pipeline, so in each state, the documents taken as
          input and produce the resultant set of documents now in the next
          stage(id available) the resultant documents taken as input and produce
          output, this process is going on till the last stage. The basic
          pipeline stages provide filters that will perform like queries and the
          document transformation modifies the resultant document and the other
          pipeline provides tools for grouping and sorting documents. You can
          also use the aggregation pipeline in sharded collection.
        </p>
        <p className="text-lg">
          There is no better method than MongoDB Aggregations when we need to
          collect the metrics from MongoDB for any graphical illustration or
          maybe other operations. Aggregation in MongoDB is responsible for
          processing the data, which results in the calculated outputs,
          generally by assembling the data from several documents and then
          executes in various ways on those assembled data in order to yield one
          collective result. It practices documents and then yield computed
          outputs and thus execute a range of operations on the assembled data
          to return only one result.Aggregation in MongoDB was progressed when
          limitations were viewed because of having millions of embedded
          documents, taking much time in processing, and server’s random memory
          which may terminate the operations. This MongoDB Aggregation uses the
          Pipeline concept in the UNIX command, where the pipeline defines the
          possibility to perform an operation on few inputs and apply the output
          resulted as the input for the succeeding command, and it follows the
          same. MongoDB supports this idea in the aggregation framework. Here,
          the operators come in three ranges such as stages, expressions, and
          accumulators. There is a group of possible stages and every of those
          is considered as a group of documents as an input and generates a
          resulting group of documents (otherwise, the last JSON document at the
          completion of the pipeline. This will then, in turn, be implemented
          for the succeeding stage and likewise. Some possible stages determined
          in the aggregation framework are as follows: 1. $match: It is a
          filtering operation and therefore this can decrease the number of
          documents that are given as input to the succeeding stage. 2.
          $project: It is applied to choose few particular fields from a
          collection. 3. $group: It performs the concrete aggregation that we
          are discussing overhead. 4. $sort: It helps to sort the documents. 5.
          $limit: It limits the sum of documents to look at, provided by the
          specific number beginning from the existing positions. 6. $skip: It
          helps to make skipping possible forwardly in the list of documents for
          a provided sum of documents. 7. $unwind: It is operated to unwind
          documents which are using arrays. While applying an array, the data
          element is a form of pre-joined and then this operation will be
          uncompleted with this to include distinct documents another time.
          Hence, with the help of this stage, we can increase the sum of
          documents for the succeeding stage
        </p>
      </div>
    </div>
  );
};

export default Blogs;
