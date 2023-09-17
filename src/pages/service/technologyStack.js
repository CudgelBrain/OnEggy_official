import React from "react";
import Headline from "../components/headline";

const technologyStack = () => {
  const title = "Technology Stacks";
  const desc =
    "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services";
  return (
    <div>
      <Headline title={title} desc={desc} />
      <div className="flex justify-between mt-16">
        <img src="/service/html.png" alt="HTML" height={73} width={64.4} />
        <img src="/service/vue.png" alt="Vue" height={55.59} width={64.4} />
        <img src="/service/react.png" alt="React" height={57.35} width={64.4} />
        <img src="/service/angular.png" alt="Angular" height={68.42} width={64.4} />
        <img src="/service/node.png" alt="Node" height={72.12} width={117.6} />
        <img src="/service/aws.png" alt="AWS" height={72.12} width={120.67} />
        <img src="/service/python.png" alt="Python" height={72.12} width={72.4} />
        <img src="/service/sql.png" alt="SQL" height={72.12} width={136.6} />
      </div>
    </div>
  );
};

export default technologyStack;
