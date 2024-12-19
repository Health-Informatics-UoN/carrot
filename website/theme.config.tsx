import { ReceiptText, ShieldQuestion } from "lucide-react";
import React from "react";
import { useConfig } from "nextra-theme-docs";

export default {
  logo: (
    <span
      style={{
        display: "flex",
        fontWeight: 700,
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
        alignItems: "center",
      }}
    >
      <img
        style={{
          display: "flex",
          color: "#ea5a0c",
          width: "1.55rem",
          marginRight: "0.5rem",
        }}
        src="/carrot/carrot-logo.png"
        alt="carrot-logo"
      />
      Carrot Documentation
    </span>
  ),
  project: {
    link: "https://github.com/Health-Informatics-UoN/carrot",
  },
  docsRepositoryBase:
    "https://github.com/Health-Informatics-UoN/carrot/tree/main/website",
  head() {
    const { frontMatter } = useConfig();

    return (
      <>
        <meta
          property="og:title"
          content={frontMatter.title || "Carrot Documentation"}
        />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "Carrot provides tools supporting mapping and convert data to OMOP CDM in a secure environment."
          }
        />
        <title>{frontMatter.title || "Carrot Documentation"}</title>
        <link rel="icon" type="image/x-icon" href="/carrot/icons/favicon.ico" />
      </>
    );
  },
  footer: {
    content: (
      <footer
        style={{
          padding: "10px 0",
          backgroundColor: "white",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <a href={"https://www.nottingham.ac.uk/"}>
              <img
                style={{ display: "block", width: "200px" }}
                src="/carrot/logos/UoN-light.png"
                alt="UoN Logo"
                className="dark:hidden"
              />
              <img
                style={{
                  display: "none",
                  width: "200px",
                }}
                src="/carrot/logos/UoN-dark.png"
                alt="UoN Logo"
                className="dark:block"
              />
            </a>
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center", // Centered the items
                marginTop: "1rem",
                marginBottom: "1.5rem",
                listStyle: "none",
                padding: "0",
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "rgba(107, 114, 128, 1)",
              }}
            >
              <li
                style={{
                  marginRight: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <a
                  href="https://www.nottingham.ac.uk/utilities/privacy/privacy.aspx"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ShieldQuestion style={{ marginRight: "0.5rem" }} /> Privacy
                  Policy
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center" }}>
                <a
                  href="https://www.nottingham.ac.uk/utilities/terms.aspx"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ReceiptText style={{ marginRight: "0.5rem" }} />
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
          <hr
            style={{
              margin: "2rem 0",
              borderColor: "rgba(229, 231, 235, 1)",
              borderWidth: "1px",
            }}
          />
          <span
            style={{
              display: "block",
              fontSize: "0.875rem",
              textAlign: "center",
              color: "rgba(107, 114, 128, 1)",
            }}
          >
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://www.nottingham.ac.uk/"
              style={{ textDecoration: "underline", color: "inherit" }}
            >
              University of Nottingham
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    ),
  },
};
