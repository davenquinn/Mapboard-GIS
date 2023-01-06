import React from "react";
import Link from "next/link";
import h from "@macrostrat/hyper";
import { DarkModeButton, GetAppButton } from "../buttons";
import { getVersionsBySeries } from "../../loaders/versions";
import { ActiveLink } from "./links";
import { FaHome } from "react-icons/fa";

export function unnestLinks(links: Links): Links {
  let newLinks: Links = [];

  for (const link of links) {
    newLinks.push(link);
    // @ts-ignore
    if (link.hasOwnProperty("children")) {
      // @ts-ignore
      newLinks.push(...(link.children ?? []));
    }
  }
  return newLinks.filter((d) => {
    // Check if is react node
    // @ts-ignore
    return d.hasOwnProperty("href");
  });
}

interface LinkSpec {
  href: string;
  label: string;
  icon?: React.ReactNode;
  shortLabel?: string;
  children?: Link[];
}

export type Link = LinkSpec | React.ReactNode;
export type Links = Link[];

const navLinks: Links = [
  { href: "/about", label: "About" },
  { href: "/docs", label: "User guide" },
  h("li.spacer"),
  h("li", null, h(GetAppButton)),
  h("li", null, h(DarkModeButton)),
];

const aboutLinks: Links = [
  { href: "/about", label: "Motivation" },
  // { href: '/about/features', label: "Features"}
  { href: "/about/features", label: "Features" },
  { href: "/about/interop", label: "Interoperability" },
  { href: "/about/pricing", label: "Pricing" },
  { href: "/about/gallery", label: "Gallery" },
  { href: "/about/roadmap", label: "Roadmap" },

  //{ href: '/about/get-involved', label: "Get involved" }
  //{ href: '/about/contact', label: "Contact"}
];

const userGuideLinks: Links = [
  { href: "/docs", label: "Getting started" },
  {
    href: "/docs/projects",
    label: "Projects",
    children: [
      {
        href: "/docs/projects/new-project",
        label: "Project creation options",
        shortLabel: "Creation options",
      },
      {
        href: "/docs/projects/file-format",
        label: "Project file format",
        shortLabel: "File format",
      },
    ],
  },
  { href: "/docs/map-interface", label: "Map interface" },
  { href: "/docs/data-types", label: "Data types" },
  { href: "/docs/topology", label: "Topology" },
  { href: "/docs/basemaps", label: "Basemaps" },
  { href: "/docs/tethered-mode", label: "Tethered mode" },
  { href: "/docs/ios/releases", label: "Releases" },
  { href: "/docs/reporting-bugs", label: "Reporting bugs" },
];

const buildVersionHistoryLinks = () => {
  return getVersionsBySeries().map((d) => {
    const { series, versions } = d;
    return {
      series,
      label: "Version " + series,
      children: versions.map((v) => {
        return {
          href: `/docs/ios/releases/${v.metadata.version}`,
          label: v.metadata.version,
        };
      }),
    };
  });
};
const versionHistoryLinks = buildVersionHistoryLinks();

const homepage = [{ href: "/", label: "Home", icon: h(FaHome) }];

const allLinks = unnestLinks([
  ...homepage,
  ...navLinks,
  ...aboutLinks,
  ...userGuideLinks,
  ...versionHistoryLinks,
]);

export { navLinks, aboutLinks, userGuideLinks, versionHistoryLinks, allLinks };
