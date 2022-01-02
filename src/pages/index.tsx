import { GetStaticProps } from "next";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { addApolloState, initializeApollo } from "../../lib/apolloClient";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navigation from "../components/Navigation/Navigation";
import Projects from "../components/Projects/Projects";
import Timeline from "../components/Timeline/Timeline";
import GET_ALL_EDUCATION from "../graphql/queries/home/getAllEducation.gql";
import GET_ALL_PROJECTS from "../graphql/queries/home/getAllProjects.gql";
import GET_ALL_EXPERIENCE from "../graphql/queries/home/getAllExperience.gql";
import GET_HOMEPAGE from "../graphql/queries/home/getHomepageData.gql";
import {
  EducationDto,
  ExperienceDto,
  LabelDto,
  HomepageDto,
  ProjectDto,
} from "../interfaces/dto.interface";
import TimelineItem from "../interfaces/timelineItem.interface";
import { ProjectItem } from "../interfaces/projectItem.interface";

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

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  const homepage = await apolloClient.query({
    query: GET_HOMEPAGE,
  });

  const experiences = await apolloClient.query({
    query: GET_ALL_EXPERIENCE,
  });

  const projects = await apolloClient.query({
    query: GET_ALL_PROJECTS,
  });

  const educations = await apolloClient.query({
    query: GET_ALL_EDUCATION,
  });

  let experienceData: TimelineItem[] = [];
  let projectsData: ProjectItem[] = [];
  let educationData: TimelineItem[] = [];

  if (experiences) {
    experienceData = experiences.data.experiences.map(
      (item: ExperienceDto) => ({
        id: item.id,
        position: item.position,
        description: item.description,
        imgSrc: item.image.id,
        imgAlt: item.image.title,
        company: item.company,
        companyUrl: item.companyUrl,
        startDate: item.startDate,
        endDate: item.endDate ?? "present",
        city: item.city,
        labels: item.labels.map((label: LabelDto) => label.label.name),
      })
    );
  }

  if (projects) {
    projectsData = projects.data.projects.map((item: ProjectDto) => ({
      id: item.id,
      type: item.type,
      title: item.title,
      description: item.description,
      labels: item.labels.map((label: LabelDto) => label.label.name),
      image: {
        src: item.image.id,
        width: item.image.width,
        height: item.image.height,
        alt: item.image.title,
      },
      links: item.links,
    }));
  }

  if (educations) {
    educationData = educations.data.educations.map((item: EducationDto) => ({
      id: item.id,
      position: item.title,
      description: item.description,
      imgSrc: item.image.id,
      imgAlt: item.image.title,
      company: item.place,
      startDate: item.startDate ?? "always",
      endDate: item.endDate,
      city: item.city,
    }));
  }

  return addApolloState(apolloClient, {
    props: {
      homepageData: homepage.data.Homepage,
      experienceData,
      projectsData,
      educationData,
    },
    revalidate: 60,
  });
};
