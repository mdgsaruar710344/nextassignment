import localFont from "next/font/local";
import "./globals.css";
import CommonNavbar from "./components/CommonNavbar";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <CommonNavbar></CommonNavbar>
        <br></br>
        {children}
      </body>
    </html>
  );
}
