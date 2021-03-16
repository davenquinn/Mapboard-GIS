import React from "react";
import Link from "next/link";
import h from "@macrostrat/hyper";
import dynamic from "next/dynamic";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export const DarkModeButton = dynamic(() => {
  if (typeof window == "undefined") return Promise.resolve(null);
  return import("@macrostrat/ui-components/lib/cjs/dark-mode").then((mod) => {
    return () =>
      h(mod.DarkModeProvider, null, h(mod.DarkModeButton, { large: true }));
  });
});

export const LinkButton = ({ href, label }) =>
  h(Link, { href }, h("a.link-button", null, label));

export const NextLinkButton = (props) => {
  const { href, label } = props;
  return h(LinkButton, {
    href,
    label: h([label, " ", <FaArrowRight />]),
  });
};

export const PrevLinkButton = (props) => {
  const { href, label } = props;
  return h(LinkButton, {
    href,
    label: h([<FaArrowLeft />, " ", label]),
  });
};

export const PageLinkButton = (props) => {
  const { href, children, ...rest } = props;
  return h(
    "div.page-link-button",
    rest,
    h(NextLinkButton, {
      href,
      label: children,
    })
  );
};

export const GetAppButton = () =>
  h(
    "a.link-button",
    {
      href: "https://testflight.apple.com/join/0TfVlWyN",
    },
    <span>
      Get the app
      <sup>
        <em>beta</em>
      </sup>
    </span>
  );

export const TestFlightButton = () =>
  h(
    "a.link-button",
    {
      href: "https://testflight.apple.com/join/0TfVlWyN",
    },
    <>
      Join the <em>TestFlight</em> beta
    </>
  );
