import "./globals.scss";

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

export default function RootLayout({
    children,
    title = "David G.",
}: LayoutProps) {
    return (
        <html lang="en">
            <head>
                <title>{title}</title>
                <link rel="icon" href="./favicon.png" sizes="any" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <meta
                    name="description"
                    content="
                    David G. is a student and frontend developer based in Moldova. He is passionate about web development and design.
                "
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&family=Space+Grotesk:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="flex flex-col min-h-screen bg-light font-mont text-dark dark:bg-dark dark:text-light">
                {children}
            </body>
        </html>
    );
}
