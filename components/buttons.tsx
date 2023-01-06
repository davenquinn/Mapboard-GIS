import React from "react";
import Link from "next/link";
import h from "@macrostrat/hyper";
import dynamic from "next/dynamic";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import classNames from "classnames";

export const DarkModeButton = dynamic(() => {
  if (typeof window == "undefined") return Promise.resolve(null);
  return import("@macrostrat/ui-components/lib/cjs/dark-mode").then((mod) => {
    return () =>
      h(mod.DarkModeProvider, null, h(mod.DarkModeButton, { large: true }));
  });
});

export const LinkButton = ({ href, label, className }) =>
  h(Link, { href }, h("a.link-button", { className }, label));

export const NextLinkButton = (props) => {
  const className = classNames("next-link-button", props.className);
  const { href, label, ...rest } = props;
  let children: React.ReactNode = <FaArrowRight />;
  if (label != null) {
    children = h([h("span.label-text", [label, " "]), children]);
  }
  return h(LinkButton, {
    href,
    ...rest,
    className,
    label: children,
  });
};

export const IconLeftButton = (props) => {
  const { href, label, icon, className, ...rest } = props;
  let children: React.ReactNode = icon;
  if (label != null) {
    children = h([icon, h("span.label-text", [label, " "])]);
  }
  return h(LinkButton, {
    href,
    ...rest,
    className: classNames("icon-left-button", className),
    label: children,
  });
};

export const PrevLinkButton = (props) => {
  const { href, label, icon = h(FaArrowLeft), ...rest } = props;
  return h(IconLeftButton, {
    href,
    ...rest,
    icon,
    className: "prev-link-button",
    label,
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
      href: "https://apps.apple.com/us/app/mapboard-gis/id1446188315",
    },
    <span>Get the app!</span>
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

export const NewFeature = ({ version }) =>
  h("span.new-feature.tag", [
    `New in `,
    [
      h(
        Link,
        { href: `/docs/ios/releases/${version}` },
        h("a", ["v", h("span.code", version)])
      ),
      " 🎉",
    ],
  ]);
