
import { Card, CardContent } from "@/components/ui/card";
import { FaLinkedin, FaEnvelope, FaMapPin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-8 text-center">
          Say hello! 👋
        </h2>
        <p className="text-xl text-pink-900 font-semibold  text-center mb-12 max-w-2xl mx-auto">
          Ready to bring creative problem-solving and data-driven insights to
          your team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300">
            <CardContent className="flex flex-col items-center p-6">
              <FaEnvelope className="w-12 h-12 text-pink-600 mb-4" />

              <a
                href="mailto:sophieqtucker@gmail.com"
                className="text-pink-800 hover:text-pink-500 font-semibold transition-colors"
              >
                sophieqtucker@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300">
            <CardContent className="flex flex-col items-center p-6">
              <FaLinkedin className="w-12 h-12 text-pink-600 mb-4" />

              <a
                href="https://linkedin.com/in/sophie-tucker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-800 hover:text-pink-500 font-semibold transition-colors"
              >
                linkedin.com/in/sophie-tucker
              </a>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200 shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300">
            <CardContent className="flex flex-col items-center p-6">
              <FaMapPin className="w-12 h-12 text-pink-600 mb-4" />
              <p className="text-pink-800 hover:text-pink-500 font-semibold transition-colors">
                Dartmouth, Nova Scotia
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
