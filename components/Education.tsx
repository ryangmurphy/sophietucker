import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Education() {

  const certificates = [
    {
      name: "Digital Marketing",
      id: "digital-marketing",
      link: "https://app.hubspot.com/academy/achievements/c7q3342f/en/1/sophie-tucker/digital-marketing",
      image: "/hubspot.png",
    },
    {
      name: "Content Marketing",
      id: "content-marketing",
      link: "https://app.hubspot.com/academy/achievements/bmydbj7b/en/1/sophie-tucker/content-marketing",
      image: "/hubspot.png",
    },
    {
      name: "Social Media Marketing",
      id: "social-media-marketing",
      link: "https://app.hubspot.com/academy/achievements/mwk9tqcm/en/1/sophie-tucker/social-media-marketing",
      image: "/hubspot.png",
    },
    {
      name: "Social Media Marketing II",
      id: "social-media-marketing-2",
      link: "https://app.hubspot.com/academy/achievements/d1kv91kv/en/1/sophie-tucker/social-media-marketing-certification-ii",
      image: "/hubspot.png",
    },
    {
      name: "SEO",
      id: "seo",
      link: "https://app.hubspot.com/academy/achievements/8mw4j74y/en/1/sophie-tucker/seo",
      image: "/hubspot.png",
    },
    {
      name: "SEO II",
      id: "seo-2",
      link: "https://app.hubspot.com/academy/achievements/5t19kmjz/en/1/sophie-tucker/seo-ii",
      image: "/hubspot.png",
    },
  ];

const skills = [
  {
    name: "Microsoft Office",
    id: "microsoft-office",
    link: "https://www.microsoft.com/en-ca/microsoft-365/microsoft-office",
    image: "/microsoft-office.jpeg",
  },
  {
    name: "Meta Business Suite",
    id: "meta-suite",
    link: "https://www.facebook.com/business/tools/meta-business-suite",
    image: "https://img.icons8.com/fluency/96/meta.png",
  },
  {
    name: "Google Ads",
    id: "google-ads",
    link: "https://ads.google.com/home/",
    image: "https://img.icons8.com/color/96/google-ads.png",
  },
  {
    name: "Google Analytics",
    id: "google-analytics",
    link: "https://marketingplatform.google.com/about/analytics/",
    image:
      "https://img.icons8.com/external-others-pike-picture/100/external-Google-Analytics-advertising-others-pike-picture.png",
  },
  {
    name: "Canva",
    id: "canva",
    link: "https://www.canva.com/",
    image: "https://img.icons8.com/fluency/96/canva.png",
  },
  {
    name: "Adobe Express",
    id: "express",
    link: "https://www.adobe.com/express/",
    image: "https://img.icons8.com/ios-filled/100/adobe-logo.png",
  },
  {
    name: "WordPress",
    id: "wordpress",
    link: "https://wordpress.com/",
    image: "https://img.icons8.com/fluency/96/wordpress.png",
  },
  {
    name: "HubSpot",
    id: "hubspot",
    link: "https://www.hubspot.com/",
    image: "https://img.icons8.com/windows/96/hubspot.png",
  },
];


  return (
    <Tabs
      defaultValue="education"
      className="w-full max-w-4xl mx-auto py-8 md:py-24"
    >
      <TabsList className="grid w-full grid-cols-3 rounded-full bg-pink-100 p-1">
        <TabsTrigger
          value="education"
          className="rounded-full font-bold text-pink-600 data-[state=active]:bg-white data-[state=active]:text-pink-950 transition-all"
        >
          Education
        </TabsTrigger>
        <TabsTrigger
          value="certificates"
          className="rounded-full font-bold text-pink-600 data-[state=active]:bg-white data-[state=active]:text-pink-950 transition-all"
        >
          Certificates
        </TabsTrigger>
        <TabsTrigger
          value="skills"
          className="rounded-full font-bold text-pink-600 data-[state=active]:bg-white data-[state=active]:text-pink-950 transition-all"
        >
          Skills
        </TabsTrigger>
      </TabsList>
      <TabsContent value="education">
        <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-pink-800 text-center">
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
              <Image
                src="/smu-logo.png"
                alt="Saint Mary's University"
                width={150}
                height={150}
                className="rounded-full border-4 border-pink-200"
              />
            </div>
            <div className="flex-shrink-0 w-full md:w-1/3 text-center mb-4 md:mb-0">
              <h2 className="text-xl md:text-2xl font-bold text-pink-900">
                Saint Mary&apos;s University
              </h2>
              <p className="text-md md:text-lg font-semibold text-pink-700">
                Bachelor of Commerce
              </p>
              <p className="text-md text-pink-600">
                Major in Marketing
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-lg md:text-xl font-bold text-pink-900 mb-2 text-center">
                Relevant Courses
              </h3>
              <ul className="space-y-1 text-center">
                {[
                  "Marketing Management",
                  "Marketing Research",
                  "Retail and Marketing Analytics",
                  "Statistics",
                  "Strategic Management",
                ].map((course, index) => (
                  <li key={index} className="text-md font-medium text-pink-700">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="certificates">
        <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-pink-800 text-center">
              Certificates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center justify-center text-center"
                >
                  <Image
                    src={cert.image}
                    alt={`HubSpot ${cert.name} Certificate`}
                    width={100}
                    height={100}
                    className="mb-2"
                  />
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">
                    {cert.name}
                  </h3>
                  <Link href={cert.link}>
                    <Badge
                      variant="secondary"
                      className="bg-pink-100 text-pink-700"
                    >
                      HubSpot Certified
                    </Badge>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="skills">
        <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-pink-800 text-center">
              Technical Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="bg-pink-800 p-1 rounded-full shadow-md mb-2">
                    <Image
                      src={skill.image}
                      alt={`${skill.name} logo`}
                      width={80}
                      height={80}
                      className="p-1 rounded-full max-w-32"
                    />
                  </div>
                  <Link href={skill.link}>
                    <span className="text-sm md:text-base font-medium text-pink-700 text-center">
                      {skill.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-xs leading-3 tracking-tight text-pink-400 font-extralight">
              Icons by{" "}
              <Link
                href="https://icons8.com"
                className="underline-offset-1 underline"
              >
                Icons8.
              </Link>
            </p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

