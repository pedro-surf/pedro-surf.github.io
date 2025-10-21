import React from "react";
import { Link } from "react-router-dom";
function CoverLetter() {
  return (
    <div
      style={{ textAlign: "justify", backgroundColor: "black", color: "pink" }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col s12"
            style={{
              paddingTop: "1.2em",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <Link className="btn " to="/">
              Back to Main Page
            </Link>
          </div>
        </div>
        <p className="flow-text">
          Greetings! I’m Pedro, 28, from Brazil. I’m an easygoing, positive
          person who puts a lot of effort, passion, and energy into everything I
          do. I value honesty and authenticity and admire people who do the
          same. When I’m not coding, you’ll usually find me exercising, playing
          music, or spending time with friends and family. My journey in tech
          began when I was a kid — I loved to code and built my first websites
          and apps early on, including one for my grandparents’ TV program. I’ve
          always been curious and creative, enjoying both reading and writing.
          At 18, I spent a year as an exchange student in the Czech Republic, an
          experience that broadened my worldview and helped me become fluent in
          English and Spanish while also learning Czech. In 2016, I backpacked
          through several South American countries, which strengthened my
          independence and adaptability. In 2019, I landed my first full-time
          role as a Full Stack Developer, working with React and Node.js on a
          platform connecting brides with wedding service providers. I took
          responsibility for implementing new features and resolving performance
          issues, improving API response times by offloading heavy JavaScript
          logic to SQL. I also built new frontend components, including a media
          uploader and scheduling tools, and eventually became the project’s
          lead developer until the company was forced to close during the
          COVID-19 crisis. After that, I contributed to an open-source project
          supporting people affected by the pandemic, using React, TypeScript,
          Material-UI, and Firebase. I also freelanced on multiple projects
          through Upwork, developing Electron-based desktop apps integrating
          PDFs, images, and CMS systems. Later in 2020, I joined a large private
          CMS project in Argentina, working with Node.js, vanilla JS, jQuery,
          and Kubernetes. Despite a chaotic environment and long nights
          debugging unpredictable issues, I managed to stabilize and extend the
          system successfully. In December 2020, I built the frontend for a
          mobile marketplace platform from scratch using Next.js. After that, I
          decided to seek a long-term position with a global company that values
          quality and stability. In early 2021, I joined an international
          outsourcing company connecting South American developers to U.S.
          clients. I’ve since worked as a Full Stack Engineer on a large-scale
          SaaS platform in the real estate industry, helping maintain and evolve
          complex applications across dozens of microservices using Node.js,
          React, and SQL. By the end of 2022, I had contributed over 750 pull
          requests across several repositories. I’m always looking for
          challenging projects where I can keep learning, contribute
          meaningfully, and grow — both as a developer and as a person. Finally,
          I am completing my degree in Computer Engineering at UFSC, which has
          given me a broad foundation in web development, embedded systems, low-
          level programming, system modeling, statistics, and project analysis.
          Thanks for reading! Pedro Silveira
        </p>
        <div className="row">
          <div
            className="col s12"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <Link className="btn" to="/">
              Back to Main Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverLetter;
