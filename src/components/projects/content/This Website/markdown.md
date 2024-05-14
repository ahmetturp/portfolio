Recently, I embarked on the journey of creating my own portfolio website using React, Bulma, and Vite. In this post, I'll highlight some key features of the website, and discuss the technologies I used.

### Development Process

**💻 Choosing the Tech Stack**

I opted to use React as the frontend library for its component-based architecture, which allows for better organization and reusability of code. Additionally, I integrated Bulma, a CSS framework based on Flexbox, to easily create responsive and visually appealing layouts. I chose Vite as the build tool.

**🔧 Designing and Implementing Components**

I designed the layout of the website using Bulma's grid system and components such as hero section and cards for a clean and professional look. Each section of the portfolio, such as the About Me, Projects, and Education, was implemented as a separate React component to maintain code modularity and readability.

**🖌️ Styling and Customization**

While Bulma provided a solid foundation for styling, I customized the appearance of the components using custom CSS to align with my personal taste. This involved tweaking spacing, adding animations and extensions (e.g. bulma-timeline, react-scroll).

**📄 Integrating Dynamic Content**

To populate the portfolio sections, I fetched data from a JSON file for each section and dynamically rendered it on the respective pages using React's state management and component lifecycle methods. I could use a database, however, I want to keep limited amount of such content on the website so JSON allowed for easy updating and maintenance of content for my case.

### Website Features

**📱 Responsive Design**

The website is fully responsive, ensuring optimal viewing experience across various devices and screen sizes. This was achieved by leveraging Bulma's responsive utilities and CSS media queries to adapt the layout and styling accordingly.

**🌙 Dark Mode**

Having a dark mode is a great touch to all applications. The website automatically selects a theme based on the user's browser preference. Then your theme preference is saved and loaded upon revisiting the website.

**🎨 Projects Showcase**

One of the main features of the website is the Projects section, where I showcase my notable projects with brief descriptions and screenshots.

**👆 Interactive Elements**

Throughout the website, I incorporated interactive elements such as hover effects, transition animations to enhance user engagement and provide a seamless browsing experience. These subtle touches contribute to the overall polish and professionalism of the website.

## Conclusion

Building my software developer portfolio website was a rewarding experience that allowed me to practice my newly learned skills and showcase my projects in a professional manner.

For the future, I want to build a project which I can utilize Redux Toolkit, React Hook Form and React Query.
