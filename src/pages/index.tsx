import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

import Contact from "@components/Contact/Contact";
import Footer from "@components/Footer/Footer";
import Hero from "@components/Hero/Hero";
import Navigation from "@components/Navigation/Navigation";
import Projects from "@components/Projects/Projects";
import Timeline from "@components/Timeline/Timeline";

import {
  mapEducationToTimelineItem,
  mapExperieceToTimelineItem,
  mapProjectToProjectItem,
} from "@utils/mappers";

import { getCollection } from "@services/collection";

import { addApolloState, initializeApollo } from "../../lib/apolloClient";
import { Collection } from "../const/collections";
import GET_ALL_EDUCATION from "../graphql/queries/home/getAllEducation.gql";
import GET_ALL_EXPERIENCE from "../graphql/queries/home/getAllExperience.gql";
import GET_ALL_PROJECTS from "../graphql/queries/home/getAllProjects.gql";
import GET_HOMEPAGE from "../graphql/queries/home/getHomepageData.gql";
import {
  EducationDto,
  ExperienceDto,
  HomepageDto,
  ProjectDto,
} from "../interfaces/dto.interface";
import { ProjectItem } from "../interfaces/projectItem.interface";
import TimelineItem from "../interfaces/timelineItem.interface";

export default function Home({
  homepageData,
  experienceData,
  projectsData,
  educationData,
}: Props) {
  return (
    <>
      <Head>
        <title>Adrian Saiz Ferri</title>
      </Head>
      <Navigation />
      <Hero
        smallTitle={homepageData.heroSmallTitle}
        title={homepageData.heroTitle}
        description={homepageData.heroDescription}
      />
      <main className="homepage">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-12">
              <section>
                <h3>{homepageData.aboutTitle}</h3>
                <ReactMarkdown
                  components={{
                    span: ({ children }) => {
                      return <span className="color-primary">{children}</span>;
                    },
                  }}
                  rehypePlugins={[rehypeRaw, rehypeSanitize]}
                >
                  {homepageData.aboutDescription}
                </ReactMarkdown>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-12">
              <section>
                <h3>{homepageData.experienceTitle}</h3>
                <Timeline items={experienceData} />
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <section>
                <h3>{homepageData.projectsTitle}</h3>
                <Projects items={projectsData} />
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-10 col-12">
              <section>
                <h3>{homepageData.educationTitle}</h3>
                <Timeline items={educationData} />
              </section>
            </div>
          </div>
        </div>
        <Contact
          title={homepageData.contactTitle}
          description={homepageData.contactDescription}
        />
      </main>
      <Footer />
    </>
  );
}

interface Props {
  homepageData: HomepageDto;
  experienceData: TimelineItem[];
  projectsData: ProjectItem[];
  educationData: TimelineItem[];
}

export const getStaticProps: GetStaticProps = async ({
  locale,
}: GetStaticPropsContext) => {
  const apolloClient = initializeApollo();

  const homepageData = await getCollection({
    query: GET_HOMEPAGE,
    locale,
    collectionName: Collection.HOMEPAGE,
  });

  const experienceData = await getCollection<ExperienceDto, TimelineItem>({
    query: GET_ALL_EXPERIENCE,
    locale,
    collectionName: Collection.EXPERIENCE,
    mapper: mapExperieceToTimelineItem,
  });

  const projectsData = await getCollection<ProjectDto, ProjectItem>({
    query: GET_ALL_PROJECTS,
    locale,
    collectionName: Collection.PROJECTS,
    mapper: mapProjectToProjectItem,
  });

  const educationData = await getCollection<EducationDto, TimelineItem>({
    query: GET_ALL_EDUCATION,
    locale,
    collectionName: Collection.EDUCATION,
    mapper: mapEducationToTimelineItem,
  });

  return addApolloState(apolloClient, {
    props: {
      homepageData,
      experienceData,
      projectsData,
      educationData,
      messages: (
        (await import(`../../i18n/${locale}.json`)) as { default: unknown }
      ).default,
    },
    revalidate: 60,
  });
};
