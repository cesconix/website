/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"

import * as types from "./graphql"

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "fragment CertificationBlock on CertificationBlockRecord {\n  id\n  certifications {\n    id\n    link\n    badge {\n      responsiveImage(imgixParams: {w: 124, h: 124}) {\n        srcSet\n        webpSrcSet\n        sizes\n        src\n        width\n        height\n        aspectRatio\n        alt\n        title\n        base64\n      }\n    }\n    title\n    authority\n    inProgress\n  }\n}":
    types.CertificationBlockFragmentDoc,
  "fragment HeroProfileBlock on HeroProfileBlockRecord {\n  id\n  welcome\n  fullname\n  tagline\n  shortBio {\n    value\n  }\n  socialLinks {\n    key\n    url\n    displayName\n  }\n}":
    types.HeroProfileBlockFragmentDoc,
  "fragment ImageBlock on ImageBlockRecord {\n  id\n  image {\n    responsiveImage(imgixParams: {auto: format, w: 690}) {\n      srcSet\n      webpSrcSet\n      sizes\n      src\n      width\n      height\n      aspectRatio\n      alt\n      title\n      base64\n    }\n  }\n}":
    types.ImageBlockFragmentDoc,
  "fragment ProjectBlock on ProjectBlockRecord {\n  id\n  projects {\n    id\n    date\n    link\n    title\n    hasRepository\n    description {\n      value\n      blocks\n    }\n    image {\n      responsiveImage(imgixParams: {auto: format, w: 300}) {\n        srcSet\n        webpSrcSet\n        sizes\n        src\n        width\n        height\n        aspectRatio\n        alt\n        title\n        base64\n      }\n    }\n  }\n}":
    types.ProjectBlockFragmentDoc,
  "fragment TimelineBlock on TimelineBlockRecord {\n  id\n  timelines {\n    id\n    role\n    company\n    endDate\n    startDate\n    location\n    description {\n      value\n      blocks\n    }\n  }\n}":
    types.TimelineBlockFragmentDoc,
  "query PagesSlug {\n  allPages {\n    slug\n    _publishedAt\n  }\n}\n\nquery Page($slug: String!) {\n  page(filter: {slug: {eq: $slug}}) {\n    title\n    slug\n    footerAnimatedGif {\n      responsiveImage(imgixParams: {auto: format}) {\n        srcSet\n        webpSrcSet\n        sizes\n        src\n        width\n        height\n        aspectRatio\n        alt\n        title\n        base64\n      }\n    }\n    content {\n      value\n      blocks {\n        __typename\n        ...HeroProfileBlock\n        ...ImageBlock\n        ...TimelineBlock\n        ...CertificationBlock\n        ...ProjectBlock\n      }\n    }\n    seo {\n      title\n      description\n    }\n  }\n  common {\n    ... on CommonRecord {\n      logo {\n        responsiveImage(imgixParams: {auto: format, w: 36, h: 36}) {\n          srcSet\n          webpSrcSet\n          sizes\n          src\n          width\n          height\n          aspectRatio\n          alt\n          title\n          base64\n        }\n      }\n      cvFile {\n        url\n      }\n    }\n  }\n  allPages {\n    slug\n    title\n    hidden\n  }\n}":
    types.PagesSlugDocument
}

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment CertificationBlock on CertificationBlockRecord {\n  id\n  certifications {\n    id\n    link\n    badge {\n      responsiveImage(imgixParams: {w: 124, h: 124}) {\n        srcSet\n        webpSrcSet\n        sizes\n        src\n        width\n        height\n        aspectRatio\n        alt\n        title\n        base64\n      }\n    }\n    title\n    authority\n    inProgress\n  }\n}"
): (typeof documents)["fragment CertificationBlock on CertificationBlockRecord {\n  id\n  certifications {\n    id\n    link\n    badge {\n      responsiveImage(imgixParams: {w: 124, h: 124}) {\n        srcSet\n        webpSrcSet\n        sizes\n        src\n        width\n        height\n        aspectRatio\n        alt\n        title\n        base64\n      }\n    }\n    title\n    authority\n    inProgress\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment HeroProfileBlock on HeroProfileBlockRecord {\n  id\n  welcome\n  fullname\n  tagline\n  shortBio {\n    value\n  }\n  socialLinks {\n    key\n    url\n    displayName\n  }\n}"
): (typeof documents)["fragment HeroProfileBlock on HeroProfileBlockRecord {\n  id\n  welcome\n  fullname\n  tagline\n  shortBio {\n    value\n  }\n  socialLinks {\n    key\n    url\n    displayName\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ImageBlock on ImageBlockRecord {\n  id\n  image {\n    responsiveImage(imgixParams: {auto: format, w: 690}) {\n      srcSet\n      webpSrcSet\n      sizes\n      src\n      width\n      height\n      aspectRatio\n      alt\n      title\n      base64\n    }\n  }\n}"
): (typeof documents)["fragment ImageBlock on ImageBlockRecord {\n  id\n  image {\n    responsiveImage(imgixParams: {auto: format, w: 690}) {\n      srcSet\n      webpSrcSet\n      sizes\n      src\n      width\n      height\n      aspectRatio\n      alt\n      title\n      base64\n    }\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment ProjectBlock on ProjectBlockRecord {\n  id\n  projects {\n    id\n    date\n    link\n    title\n    hasRepository\n    description {\n      value\n      blocks\n    }\n    image {\n      responsiveImage(imgixParams: {auto: format, w: 300}) {\n        srcSet\n        webpSrcSet\n        sizes\n        src\n        width\n        height\n        aspectRatio\n        alt\n        title\n        base64\n      }\n    }\n  }\n}"
): (typeof documents)["fragment ProjectBlock on ProjectBlockRecord {\n  id\n  projects {\n    id\n    date\n    link\n    title\n    hasRepository\n    description {\n      value\n      blocks\n    }\n    image {\n      responsiveImage(imgixParams: {auto: format, w: 300}) {\n        srcSet\n        webpSrcSet\n        sizes\n        src\n        width\n        height\n        aspectRatio\n        alt\n        title\n        base64\n      }\n    }\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment TimelineBlock on TimelineBlockRecord {\n  id\n  timelines {\n    id\n    role\n    company\n    endDate\n    startDate\n    location\n    description {\n      value\n      blocks\n    }\n  }\n}"
): (typeof documents)["fragment TimelineBlock on TimelineBlockRecord {\n  id\n  timelines {\n    id\n    role\n    company\n    endDate\n    startDate\n    location\n    description {\n      value\n      blocks\n    }\n  }\n}"]
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query PagesSlug {\n  allPages {\n    slug\n    _publishedAt\n  }\n}\n\nquery Page($slug: String!) {\n  page(filter: {slug: {eq: $slug}}) {\n    title\n    slug\n    footerAnimatedGif {\n      responsiveImage(imgixParams: {auto: format}) {\n        srcSet\n        webpSrcSet\n        sizes\n        src\n        width\n        height\n        aspectRatio\n        alt\n        title\n        base64\n      }\n    }\n    content {\n      value\n      blocks {\n        __typename\n        ...HeroProfileBlock\n        ...ImageBlock\n        ...TimelineBlock\n        ...CertificationBlock\n        ...ProjectBlock\n      }\n    }\n    seo {\n      title\n      description\n    }\n  }\n  common {\n    ... on CommonRecord {\n      logo {\n        responsiveImage(imgixParams: {auto: format, w: 36, h: 36}) {\n          srcSet\n          webpSrcSet\n          sizes\n          src\n          width\n          height\n          aspectRatio\n          alt\n          title\n          base64\n        }\n      }\n      cvFile {\n        url\n      }\n    }\n  }\n  allPages {\n    slug\n    title\n    hidden\n  }\n}"
): (typeof documents)["query PagesSlug {\n  allPages {\n    slug\n    _publishedAt\n  }\n}\n\nquery Page($slug: String!) {\n  page(filter: {slug: {eq: $slug}}) {\n    title\n    slug\n    footerAnimatedGif {\n      responsiveImage(imgixParams: {auto: format}) {\n        srcSet\n        webpSrcSet\n        sizes\n        src\n        width\n        height\n        aspectRatio\n        alt\n        title\n        base64\n      }\n    }\n    content {\n      value\n      blocks {\n        __typename\n        ...HeroProfileBlock\n        ...ImageBlock\n        ...TimelineBlock\n        ...CertificationBlock\n        ...ProjectBlock\n      }\n    }\n    seo {\n      title\n      description\n    }\n  }\n  common {\n    ... on CommonRecord {\n      logo {\n        responsiveImage(imgixParams: {auto: format, w: 36, h: 36}) {\n          srcSet\n          webpSrcSet\n          sizes\n          src\n          width\n          height\n          aspectRatio\n          alt\n          title\n          base64\n        }\n      }\n      cvFile {\n        url\n      }\n    }\n  }\n  allPages {\n    slug\n    title\n    hidden\n  }\n}"]

export function graphql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never
