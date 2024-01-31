


![dribbble-full](https://github.com/samik1234/dribble-next/assets/82882143/485911fc-ee09-4bd3-afbe-291a08365ac3)








🤖 INTRODUCTION 


 A full stack Dribble clone developed using Next.js, GraphQL, Next Auth, TypeScript, and tailwindcss features all the necessary features of dribble from sharing and showcasing projects.










🔋 FEATURES



👉 Modern Design Home Page: Features a clean and modern design resembling Dribbble, with a visually appealing interface showcasing project previews and navigation.

👉 Browsing and Pagination: Browse different projects, filter them by category, and experience smooth pagination for seamless data exploration.

👉 Authentication & Authorization System: A fully functional authentication and authorization system allows users to log in securely using JWT and Google authentication.

👉 Create Post Page: Provides a dedicated space for users to share their projects with the community. It includes fields for project details, images, and other relevant information.

👉 Project Details and Related Projects: A detailed view with related projects functionality, enabling users to explore more projects within the same category or theme.

👉 Edit and Re-upload Images: Users have the capability to edit previously created projects, including the ability to re-upload images from their devices to the cloud for updates.

👉 Delete Projects: The delete functionality simplifies project removal with a one-click process, streamlining the user experience.

👉 Portfolio-Style User Profile Page: The user profile page adopts a portfolio-style layout, displaying the user's projects along with the project profiles of other users for easy exploration.

👉 Backend API Routes: Backend API routes for handling JWT token management for secure authentication and image uploading, supporting seamless integration with the frontend.









Install the project dependencies using npm:

npm install
Set Up Environment Variables





Create a new file named .env in the root of your project and add the following content:

GOOGLE_CLIENT_ID=


GOOGLE_CLIENT_SECRET=


NEXTAUTH_URL=


NEXTAUTH_SECRET=


CLOUDINARY_NAME=


CLOUDINARY_KEY=


CLOUDINARY_SECRET=


GRAFBASE_API_URL=


GRAFBASE_API_KEY=





Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
