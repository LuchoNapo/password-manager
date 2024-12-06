
export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <h1>Profile</h1>

            {children}
        </div>
    );
}
