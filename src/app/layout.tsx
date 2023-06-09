import "../../styles/globals.css";
export const metadata = {
  title: "Anas Shofyan Martunis Fateh - Frontend Developer | UI/UX Designer",
  description:
    "I have skills in the field of Frontend Developer and User Interface. In the field, I have to make sure the appearance of the website matches what the designer has created.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
