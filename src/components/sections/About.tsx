export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              {/* Replace with your image */}
            </div>
          </div>

          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate web developer with expertise in modern JavaScript
              frameworks. I specialize in building responsive, performant web
              applications with great user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With a background in computer science and X years of professional
              experience, I've worked on projects ranging from small business
              websites to large-scale web applications.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Name:</h4>
                <p className="text-gray-500 dark:text-gray-400">Your Name</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Email:</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  your.email@example.com
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Education:</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  Your University
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Location:</h4>
                <p className="text-gray-500 dark:text-gray-400">Your City</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
