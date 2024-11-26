
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
      id: "marketing-strategy",
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
      id: "marketing-strategy",
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
  { name: "Meta Business Suite", id: "meta-suite", link: "", image: "" },
  { name: "Google Ads", id: "google-ads", link: "", image: "" },
  { name: "Google Analytics", id: "google-analytics", link: "", image: "" },
  { name: "Canva", id: "canva", link: "", image: "/canva.webp" },
  { name: "Adobe Express", id: "express", link: "", image: "" },
  { name: "Photoshop", id: "photoshop", link: "", image: "" },
  {
    name: "WordPress",
    id: "wordpress",
    link: "https://wordpress.com/",
    image: "/wordpress.png",
  },
  {
    name: "HubSpot",
    id: "hubspot",
    link: "https://www.hubspot.com/",
    image: "/hubspot.png",
  },
];


  return (
    <Tabs defaultValue="education" className="w-full max-w-4xl mx-auto p-4">
      <TabsList className="grid w-full grid-cols-3 rounded-full bg-pink-100 p-1">
        <TabsTrigger
          value="education"
          className="rounded-full font-bold text-pink-700 data-[state=active]:bg-white data-[state=active]:text-pink-800 transition-all"
        >
          Education
        </TabsTrigger>
        <TabsTrigger
          value="certificates"
          className="rounded-full font-bold text-pink-700 data-[state=active]:bg-white data-[state=active]:text-pink-800 transition-all"
        >
          Certificates
        </TabsTrigger>
        <TabsTrigger
          value="skills"
          className="rounded-full font-bold text-pink-700 data-[state=active]:bg-white data-[state=active]:text-pink-800 transition-all"
        >
          Skills
        </TabsTrigger>
      </TabsList>
      <TabsContent value="education">
        <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-pink-800 text-center">
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex-shrink-0 w-1/3 flex justify-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Saint Mary's University"
                width={150}
                height={150}
                className="rounded-full border-4 border-pink-200"
              />
            </div>
            <div className="flex-shrink-0 w-1/3 text-center">
              <h2 className="text-2xl font-bold text-pink-900">
                Saint Mary&apos;s University
              </h2>
              <p className="text-lg font-medium text-pink-700">
                Bachelor of Commerce
              </p>
              <p className="text-pink-600">Major in Marketing</p>
            </div>
            <div className="flex-shrink-0 w-1/3">
              <h3 className="text-xl font-bold text-pink-900 mb-2 text-center">
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
        <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-lg">
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
                    key={cert.id}
                    alt={`HubSpot ${cert.name} Certificate`}
                    width={100}
                    height={100}
                    className="mb-2"
                  />
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">
                    {cert.name}
                  </h3>
                  <Link href={cert.link} key={cert.id}>
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
        <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-pink-800 text-center">Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
                      height={100}
                      className="object-fill rounded-full"
                    />
                  </div>
                  <Link href={skill.link}>
                    <span className="text-sm font-medium text-pink-700 text-center">
                      {skill.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

