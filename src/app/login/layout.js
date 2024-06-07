import '../../styles/globals.scss'
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Login",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
