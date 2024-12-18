import { Rabbit, Package } from "lucide-react";
import React from "react";

export default {
  logo: (
    <span
      style={{
        display: "flex",
        color: "#0E7490",
      }}
    >
      Carrot Documentation
    </span>
  ),
  project: {
    link: "https://github.com/Health-Informatics-UoN/hutch",
  },
  head: (
    <>
      <link rel="icon" type="image/svg+xml" href="/hutch/images/favicon.svg" />
    </>
  ),
  footer: {
    content: (
      <span>
        © {new Date().getFullYear()}{" "}
        <a href="https://nottingham.ac.uk" target="_blank">
          <img
            src="/hutch/images/uon_white_text_web.png"
            alt="University of Nottingham"
            width={243}
            height={90}
          />
        </a>
        <br />
        MIT licence
      </span>
    ),
  },
};
