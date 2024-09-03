import "./globals.css";
import AOSInit from "@/libs/aos/aos";
import ScrollToTop from "@/components/modules/ScrollToTop";

export const metadata = {
  title: "خانه کتاب",
  description:
    "خانه کتاب محلی برای به اشتراک گذاری کتابهای شما... اینجا کتابها بین کتابخانه ی من و شما درحال پروازند چون می توانیم کتابهای دست دوم خود را با یکدیگر تعویض کنیم",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <AOSInit />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
