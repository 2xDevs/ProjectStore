import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

/**
 * {
    id: 2,
    project: {
      id: 1,
      title: 'AI-Youtube-Video-Summary-using-NLP',
      image: 'https://res.cloudinary.com/dckbkdfyi/image/upload/f_auto,q_auto/v1/projectstore/AI-Youtube-Video-Summary-using-NLP',
      content: '# AI YOUTUBE VIDEO SUMMARY USING NLP   ## Abstract: The \\"AI YouTube Video Summary using NLP\\" project introduces an innovative solution to the burgeoning challenge of digesting vast amounts of video content on platforms like YouTube. With the exponential growth of online video, users often face time constraints and information overload, hindering their ability to extract valuable insights efficiently. Our project addresses this issue by harnessing the capabilities of Artificial Intelligence (AI) and Natural Language Processing (NLP) to automatically generate concise summaries of YouTube videos. Through a seamless integration with the MERN stack, our system enables users to input video URLs and receive summaries in three distinct forms: short, long, and key insights. By automating the process of transcript extraction, linguistic analysis, and summarization, our system streamlines content consumption, offering users a time-saving and effective method for accessing essential information. By leveraging machine learning algorithms and linguistic analysis techniques, our system accurately identifies and distills key themes, concepts, and insights embedded within the video content. This empowers users to gain comprehensive understanding without the need for exhaustive viewing, thereby enhancing their browsing experience and knowledge acquisition. In essence, the \\"AI YouTube Video Summary using NLP\\" project represents a significant advancement in content consumption methodologies, offering a practical solution to the challenges posed by the proliferation of video content online. Through our innovative approach, we aim to revolutionize the way users engage with YouTube videos, facilitating efficient information extraction and empowering them to make the most of their online viewing experience.  ## Keywords: \\u003E Artificial Intelligence (AI), Natural Language Processing (NLP), Text \\u003E Summarization, Multimedia Content Analysis, Automatic Summarization.",       "filelink": "https://drive.google.com/uc?id=1jiV_OJ15aVTZXAd096ai9h4A1UeeRJMP&export=download',
      filelink: 'https://drive.google.com/uc?id=1jiV_OJ15aVTZXAd096ai9h4A1UeeRJMP&export=download',
      categories: [Array],
      languages: [Array],
      price: 1999
    }
  }

 */

export type ProjectData = {
    id: number;
    image: string;
    title: string;
    categories: string[];
    languages: string[];
    price?: number;
    fileLink?: string;
};

export type ProjectsType = ProjectData[];

type ProjectsProps = {
    ProjectsData: ProjectsType;
};

export const Projects = ({ ProjectsData }: ProjectsProps) => {
    return (
        <>
            {ProjectsData.map((data, index) => {
                return (
                    <>
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2"
                        >
                            <Link
                                href={`/projects/${data.id}`}
                                className="absolute inset-0 z-10"
                                prefetch={false}
                            >
                                <span className="sr-only">View Project</span>
                            </Link>
                            <Image
                                src={data.image}
                                alt="Project 1"
                                width={500}
                                height={400}
                                className="object-cover w-full h-64"
                            />
                            <div className="bg-white p-4 dark:bg-gray-950">
                                <h3 className="font-bold text-xl">
                                    {data.title}
                                </h3>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {data.categories.map((category, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-md text-xs"
                                        >
                                            {category}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {data.languages.map((language, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-md text-xs"
                                        >
                                            {language}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <h4 className="font-semibold text-lg md:text-xl">
                                        {data.price}
                                    </h4>
                                    {data.price ? (
                                        <Button>Buy Now</Button>
                                    ) : (
                                        <Button className="w-full mt-2">
                                            Download
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </>
    );
};
